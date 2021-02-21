
 import { useOfficers, getOfficers } from "../officers/OfficerProvider.js"

 const eventHub = document.querySelector(".container")

 const contentTarget = document.querySelector(".filters__officer")


 eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        
        const selectedOfficer = changeEvent.target.value
        // Define a custom event
        const officerSelectedCustomEvent = new CustomEvent("officerSelected", {
            detail: {
            selectedOfficerName: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(officerSelectedCustomEvent)
    }
})


const render = officersCollection => {
    // Use interpolation here to invoke the map() method on
    // the convictionsCollection to generate the option elements.
    // Look back at the example provided above.
contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select a officer...</option>
            ${officersCollection.map(officer => `<option value="${officer.name}">${officer.name}</option>`).join("")
        }
    </select>
`
}

export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
    .then( () => {
      // Get all officers from application state
      const officers = useOfficers()
      render(officers)
    })
}

