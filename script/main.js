import { getData } from "./getData.js";
import { User } from "./userClass.js";
import { buildCard, buildSelect } from "./domBuilder.js";

"use strict"

document.addEventListener("DOMContentLoaded", async () => {

    const userURL = "https://jsonplaceholder.typicode.com/users";
    const users = [];
    const cardsContainer = document.querySelector("#cards-container");
    const selectElement = document.querySelector("#users");
    const showAllBtn = document.querySelector("#show-all");
    const userData = await getData(userURL);


    for (let [index, user] of userData.entries()) {
        users[index] = new User(user);
    }

    buildSelect(users, selectElement);
    const allOptions = document.querySelectorAll("option");

    function hideAll() {
        showAllBtn.innerText = "Show all";
        const allCards = document.querySelectorAll(".card");
        for (const card of allCards) {
            card.remove();
        }
    }

    function showOrHideAll() {
        console.log("showOrHideAll runs");
        if (showAllBtn.innerText === "Show all") {
            for (let user of users) {
                const card = buildCard(user);
                cardsContainer.appendChild(card);
                selectElement.value = "none";
            }

            showAllBtn.innerText = "Hide all"

        } else if (showAllBtn.innerText === "Hide all") {
            hideAll();
            selectElement.value = "none";
        }
    }

    showAllBtn.addEventListener("click", () => {
        showOrHideAll();
    });

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