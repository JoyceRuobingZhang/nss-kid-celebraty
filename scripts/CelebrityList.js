import { getCelebrities } from "./database.js"


const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li id="star--${star.id}">${star.name}</li>`
    }
    // corrected <li id="star--${star.id}">${star.name}</li>`

    html += "</ol>"
    return html
}



//add eventListener: When the celebrity name is clicked, it should display their sport.
document.addEventListener("click", clickEvent => {
    for (const star of celebrities) {
        if (clickEvent.target.id === `star--${star.id}`) {
            window.alert(`${star.name}'s sport is ${star.sport}`)
        }
    }
})