import { getCriminals, useCriminals } from "./../criminals/CriminalProvider.js"
import { saveNote } from "./NoteProvider.js"

 const contentTarget = document.querySelector(".noteFormContainer")
 const eventHub = document.querySelector(".container")

 export const NoteForm = () => {
    // rest of the code here
    getCriminals()
    .then(() => {
        const arrayOfCriminals = useCriminals()
        render(arrayOfCriminals)
    })

}

 const render = (criminalsArray) => {
     contentTarget.innerHTML = `
     <h2>Notes</h2>
     <label for="note-criminalId">Suspect: </label>
     <select name="note-criminalId" id="note-criminalId">
         <option value="0">Please select a criminal...</option>
         ${criminalsArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")}
     </select>
     <label for="note-author">Author: </label>
     <input type="text" placeholder="Full Name" id="note-author">
     <label for="note-date">Date: </label>
     <input type="date"  id="note-date">
     <label for="note-text">Notes: </label>
     <input type="text" id="note-text">
         <button id="saveNote">Save Note</button>
     `
 }
 
 // Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        const criminalId = document.getElementById("note-criminalId").value
        const author = document.getElementById("note-author").value
        const date = document.getElementById("note-date").value
        const text = document.getElementById("note-text").value


        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "author": author,
            "date": date,
            "criminalId": parseInt(criminalId),
            "text": text,
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

