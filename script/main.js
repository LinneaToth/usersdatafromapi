import { getData } from "./getData.js";
import { User } from "./userClass.js";
import { buildCard, buildSelect } from "./domBuilder.js";

"use strict"

document.addEventListener("DOMContentLoaded", async () => {
    const userURL = "https://jsonplaceholder.typicode.com/users";
    const users = [];
    const userData = await getData(userURL);

    for (let [index, user] of userData.entries()) {
        users[index] = new User(user);
    }

    const selectElement = document.querySelector("#users");
    buildSelect(users, selectElement);

    const cardsContainer = document.querySelector("#cards-container");


    const showAllBtn = document.querySelector("#show-all");
    showAllBtn.addEventListener("click", showOrHideAll)


    function showOrHideAll() {

        if (showAllBtn.innerText === "Show all") {

            for (let user of users) {
                const card = buildCard(user);
                cardsContainer.appendChild(card);
                selectElement.value = "none";
            }

            showAllBtn.innerText = "Hide all";
            return;

        } else if (showAllBtn.innerText === "Hide all") {
            console.log("hide all");
            hideAll();
            selectElement.value = "none";
        }
    }

    function hideAll() {
        showAllBtn.innerText = "Show all";
        const allCards = document.querySelectorAll(".card");
        for (const card of allCards) {
            card.remove();
        }
    }

    selectElement.addEventListener("change", () => {
        const value = selectElement.selectedOptions[0].value;
        hideAll();
        if (value) {
            const user = users.find((userMatch) => {
                return userMatch.id === parseInt(value);
            })
            const card = buildCard(user);
            cardsContainer.appendChild(card);
        }
    })

})
