"use strict"

const getData = async function (url) {
    try {
        const data = await fetch(url);

        if (!data.ok) {
            throw new Error("Response not ok, status: " + data.status);
        }
        const dataJSON = await data.json();
        return dataJSON;

    } catch (e) {
        console.log(e.message);
    }
}

export { getData };