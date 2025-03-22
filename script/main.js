import { getData } from "../script/getData.js";
import { User } from "../script/userClass.js";
import { buildCard } from "../script/domBuilder.js";

"use strict"

const userURL = "https://jsonplaceholder.typicode.com/users";
const users = [];
const cardsContainer = document.querySelector("#cards-container");
const showAllBtn = document.querySelector("#show-all");

const showAll = async function () {
    if (showAllBtn.innerText === "Show all") {
        console.log(showAllBtn.innerText);
        const userData = await getData(userURL);

        for (let [index, user] of userData.entries()) {
            users[index] = new User(user);
        }

        for (let user of users) {
            const card = buildCard(user);
            cardsContainer.appendChild(card);
        }
        showAllBtn.innerText = "Hide all"

    } else if (showAllBtn.innerText === "Hide all") {
        console.log(showAllBtn.innerText);
        showAllBtn.innerText = "Show all";
        const allCards = document.querySelectorAll(".card");

        for (const card of allCards) {
            card.remove();
        }
    }
}


showAllBtn.addEventListener("click", showAll);
