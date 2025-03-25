"use strict"

//Element-creating function so I don't have to repeat myself all the time
function buildElement(type, innerText = null, id = null, cls = null) {
    const builtElement = document.createElement(type);

    if (innerText) {
        builtElement.innerText = innerText;
    }

    if (id) {
        builtElement.id = id;
    }

    if (cls) {
        if (typeof (cls) === "object") {
            for (let cl of cls) {
                builtElement.classList.add(cl);
            }
        } else if (typeof (cls) === "string") {
            builtElement.classList.add(cls);
        }
    }

    return builtElement;
}

//Building card for each user
function buildCard(user) {
    //User card container
    const card = buildElement("div", null, "id-" + user.id, "card");

    //Main user info
    const infoMain = buildElement("article");
    //Show/hide details button
    const btn = buildElement("button", "▽");
    //Optional user info
    const infoOptional = buildElement("aside", null, null, "hidden");
    //Start of actual content

    const name = buildElement("h2", user.name);
    const usernameEm = buildElement("em", "Username: ", "username-em");
    const username = buildElement("p", user.userName, "username");
    const email = buildElement("p", user.email.toLowerCase(), "email");
    const emailEm = buildElement("em", "E-mail: ", "email-em");
    const headingOptional = document.createElement("h3");

    // Add the persons first name to the detailed info. First checks if the name contains any tiles such as mr. or mrs.
    let usersName = undefined;

    if (user.name.includes(".")) {
        const indexOfPeriod = user.name.indexOf(".");
        usersName = user.name.substring(indexOfPeriod + 2);
    }
    const indexOfWhitespace = (usersName || user.name).indexOf(" ");
    const firstName = (usersName || user.name).substring(0, indexOfWhitespace);

    //Getting the possessive noun correct, either 's or ' if the name ends with an s
    if (firstName[firstName.length - 1] === "s") {
        headingOptional.innerText = firstName + "' details:";
    } else {
        headingOptional.innerText = firstName + "'s details:";
    }

    const cityEm = buildElement("em", "City: ", "city-em");
    const city = buildElement("p", user.city, "city-text", "city");
    const phoneEm = buildElement("em", "Phone: ", "phone-em");
    const phone = buildElement("p", user.phoneNbr, "phone");
    const companyEm = buildElement("em", "Company: ", "company-em");
    const companyName = buildElement("p", user.companyName, "company");

    //Putting it all together
    infoOptional.appendChild(headingOptional);
    city.prepend(cityEm);
    infoOptional.appendChild(city);
    phone.prepend(phoneEm);
    infoOptional.appendChild(phone);
    companyName.prepend(companyEm);
    infoOptional.appendChild(companyName);

    infoMain.appendChild(name);
    username.prepend(usernameEm);
    infoMain.appendChild(username);
    email.prepend(emailEm);
    infoMain.appendChild(email);
    infoMain.appendChild(btn);
    card.appendChild(infoMain);
    card.appendChild(infoOptional);

    //Show/hide detailed information
    btn.addEventListener("click", () => {
        infoOptional.classList.toggle("hidden");
        card.classList.toggle("double-card");

        if (btn.innerText != "△") {
            btn.innerText = "△";
        } else {
            btn.innerText = "▽";
        }
    })
    return card;
}

//adding options to the select user drop down menu
const buildSelect = function (users, selectElement) {
    for (let user of users) {
        const optionElement = buildElement("option", user.name);
        optionElement.value = user.id;
        selectElement.appendChild(optionElement);
    }
}

export { buildCard, buildSelect };