
/*
1) get names from user
    - use a prompt
    - display names already given in prompt
2) save the names


3) print names on the page
    - display names as unordered list items
*/

let names = []
let newName = ""

function creatPrompt () {
    let message = `Please enter a name. \n
    You have already entered the following names:\n`
    for (let index = 0; index < names.length; index += 1){
        let currentName = names[index]
        message += currentName + `\n`
    }
    message += `\nEnter "exit" or press cancel to stop.`
    return message
}

while (newName !== null) {
    let promptMessage = creatPrompt()
    newName = prompt(promptMessage)
    if (newName === "exit"){
        newName = null
    }
    if (newName !== null && newName !== ""){
        names.push(newName)
    }
    console.log(newName)
}

function displayTitle (){
    document.write(`<h1>Template Literals Demo</h1>`)
}

function displayNames(arrayOfNames){
    document.write("<ul><h3>Arbitrary List of Names</h3>")
        for(let index = 0; index < arrayOfNames.length; index += 1){
            let currentName = arrayOfNames[index]
            document.write(`<li>${currentName}</li>`)
        }
    document.write("</ul>")
}

function renderPage (){
    displayTitle()
    displayNames(names)
}

renderPage()