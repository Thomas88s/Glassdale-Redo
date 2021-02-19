
 import { useConvictions, getConvictions} from "./ConvictionProvider.js"

    // ConvictionSelect component that renders a select HTML element
    // which lists all convictions in the Glassdale PD API

const eventHub = document.querySelector(".container")
// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")



// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", changeEvent => {
    // this only happens if the `crimeSelect` element was changed
    if (changeEvent.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: changeEvent.target.value
            }
        })
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})



const render = convictionsCollection => {
        // Use interpolation here to invoke the map() method on
        // the convictionsCollection to generate the option elements.
        // Look back at the example provided above.
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(conviction => `<option value="${conviction.id}">${conviction.name}</option>`).join("")
            }
        </select>
    `
}



export const ConvictionSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getConvictions()
    .then( () => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}
