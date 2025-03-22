import { getData } from "../script/getData.js";
import { User } from "../script/userClass.js";
import { buildCard, buildSelect } from "../script/domBuilder.js";

"use strict"

addEventListener("DOMContentLoaded", async function (event) {

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

    const showOrHideAll = function () {
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

    showAllBtn.addEventListener("click", showOrHideAll);



    for (let option of allOptions) {
        try {
            option.addEventListener("click", () => {
                console.log(option.value)
                hideAll();

                if (option.value) {
                    const user = users.find((userMatch) => {
                        return userMatch.id === parseInt(option.value);
                    })
                    const card = buildCard(user);
                    cardsContainer.appendChild(card);
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }

})