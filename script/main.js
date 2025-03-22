import { getData } from "../script/getData.js";
import { User } from "../script/userClass.js";
import { buildCard } from "../script/domBuilder.js";

"use strict"

const userURL = "https://jsonplaceholder.typicode.com/users";
const users = [];
const cardsContainer = document.querySelector("#cards-container");

const constructSite = async function () {
    const userData = await getData(userURL);
    
    for (let [index, user] of userData.entries()) {
        users[index] = new User(user);
        console.log(users[index]);
    
    }

    for (let user of users) {
        const card = buildCard(user);
        cardsContainer.appendChild(card);
    }
}

constructSite();