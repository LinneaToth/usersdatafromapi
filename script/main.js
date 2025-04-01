import { getData } from "./getData.js"; //API data fetch
import { User } from "./userClass.js"; //class to create user objects
import { buildCard, buildSelect } from "./domBuilder.js"; //Builds cards for each user, fills select with options for each user

"use strict"

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const userURL = "https://jsonplaceholder.typicode.com/users";
        const users = [];
        const userData = await getData(userURL);
        const cardsContainer = document.querySelector("#cards-container"); //Selecting existing container for all of the cards

        for (let [index, user] of userData.entries()) {
            users[index] = new User(user); //loading the users array with User objects, based on the fetched data
        }

        const selectElement = document.querySelector("#users"); //The selector that will contain all of the users
        buildSelect(users, selectElement); //Function that takes all of the user and fills them into the select element as options
        const showAllBtn = document.querySelector("#show-all"); //Toggle show/hide all user cards button 

        showAllBtn.addEventListener("click", showOrHideAll)

        function showOrHideAll() {
            if (showAllBtn.innerText === "Show all") {
                hideAll();
                for (let user of users) { //If all are shown, it will build cards for all of the users
                    const card = buildCard(user);
                    cardsContainer.appendChild(card);
                    selectElement.value = "none";
                }
                showAllBtn.innerText = "Hide all";
                return;

            } else if (showAllBtn.innerText === "Hide all") { //If "hide all" is clicked, hideAll() will run and remove all the cards
                hideAll();
                selectElement.value = "none";
            }
        }

        function hideAll() {
            showAllBtn.innerText = "Show all";
            const allCards = document.querySelectorAll(".card"); //An array with all elements with the class card 
            for (const card of allCards) {
                card.remove(); //All of the cards are removed, one by one 
            }
        }

        selectElement.addEventListener("change", () => {
            const value = selectElement.selectedOptions[0].value; //the (hidden) option value matches the user id from the object! 
            hideAll();
            if (value) {
                const user = users.find((userMatch) => { //this part will find and return the first object with matching id (there will only be one, anyway) 
                    return userMatch.id === parseInt(value);
                })
                const card = buildCard(user); //The matching user gets a card, which is posted on the page
                cardsContainer.appendChild(card);
            }
        })

    } catch (e) {
        console.log("Something went wrong:", e)
    }

})
