import { getChildren } from "./database.js"


const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="child-${child.name}">${child.name}</li>`
    }
    // crrected ${child,name}

    html += "</ol>"
    return html
}



// add eventlistener:  When the kid name is clicked, it should display their wish.
//clickEvent.target will get the html element。（to confirm）
document.addEventListener(
    'click',
    (clickEvent) => {
        for (const child of children) {
            //the if statement 呼应 line 14。
            if (clickEvent.target.id === `child-${child.name}`) {
                window.alert(`${child.name}'s wish is ${child.wish}`)
            }
        }
    }
)