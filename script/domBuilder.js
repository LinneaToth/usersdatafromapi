"use strict"
console.log("dombuilder loads")

const buildCard = function (user) {
    //User card
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("id" + user.id);
    //Main user info
    const infoMain = document.createElement("article");
    //Show/hide details button
    const btn = document.createElement("button");
    btn.innerText = "▽";
    //Optional user info
    const infoOptional = document.createElement("aside");
    infoOptional.classList.add("hidden");
    //Start of actual content
    const name = document.createElement("h2");
    name.innerText = user.name;
    const username = document.createElement("p");
    username.innerText = "Username: " + user.userName;
    const email = document.createElement("p");
    email.innerText = user.email.toLowerCase();
    const headingOptional = document.createElement("h3");

    // Add the persons first name to the detailed info. First checks if the name contains any tiles such as mr. or mrs.
    let usersName = undefined;

    if (user.name.includes(".")) {
        const indexOfPeriod = user.name.indexOf(".");
        usersName = user.name.substring(indexOfPeriod + 2);
        console.log(usersName);
    }
    const indexOfWhitespace = (usersName || user.name).indexOf(" ");
    const firstName = (usersName || user.name).substring(0, indexOfWhitespace);
    headingOptional.innerText = firstName + "'s details:";

    const city = document.createElement("p");
    city.innerText = user.city;
    const phone = document.createElement("p");
    phone.innerText = user.phoneNbr;
    const companyName = document.createElement("p");
    companyName.innerText = "Company: " + user.companyName;

    infoOptional.appendChild(headingOptional);
    infoOptional.appendChild(city);
    infoOptional.appendChild(phone);
    infoOptional.appendChild(companyName);

    infoMain.appendChild(name);
    infoMain.appendChild(username);
    infoMain.appendChild(email);
    infoMain.appendChild(btn);
    card.appendChild(infoMain);
    card.appendChild(infoOptional);

    btn.addEventListener("click", () => {
        infoOptional.classList.toggle("hidden");
        card.classList.toggle("double-card");
        console.log("button was clicked " + user.id)

        if (btn.innerText != "△") {
            btn.innerText = "△";
        } else {
            btn.innerText = "▽";
        }
    })
    return card;
}

const buildSelect = function (users, selectElement) {
    for (let user of users) {
        const optionElement = document.createElement("option");
        optionElement.value = user.id;
        optionElement.innerText = user.name;
        selectElement.appendChild(optionElement);
    }
}

export { buildCard, buildSelect };