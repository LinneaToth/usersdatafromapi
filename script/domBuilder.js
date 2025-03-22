"use strict"

const buildCard = function (user) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("id" + user.id);
    const infoMain = document.createElement("article");
    const btn = document.createElement("button");
    btn.innerText = "+";
    const infoOptional = document.createElement("aside");
    infoOptional.classList.add("hidden");
    const name = document.createElement("h2");
    name.innerText = user.name;
    const username = document.createElement("p");
    username.innerText = "Username: " + user.userName;
    const email = document.createElement("p");
    email.innerText = user.email.toLowerCase();
    const headingOptional = document.createElement("h3");
    headingOptional.innerText = user.name + "'s details:";
    const city = document.createElement("p");
    city.innerText = user.city;
    const phone = document.createElement("p");
    phone.innerText = user.phoneNbr;
    const companyName = document.createElement("p");
    companyName.innerText = user.companyName;

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
        console.log("button was clicked " + user.id)
    })

    return card;
}

export { buildCard };