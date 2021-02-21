
 import { getCriminals, useCriminals } from './CriminalProvider.js'
 import { Criminal } from "./Criminal.js"
 import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from '../officers/OfficerProvider.js'




const criminalsContainer = document.querySelector(".criminalsContainer")

const eventHub = document.querySelector(".container")



// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", crimeThatWasChosenEvent => {
    // Use the property you added to the event detail.
    if (crimeThatWasChosenEvent.detail.crimeThatWasChosen !== "0"){
        const convictionsArray = useConvictions()
        const chosenConvictionObject = convictionsArray.find(convictionObj => {
            return convictionObj.id === parseInt(crimeThatWasChosenEvent.detail.crimeThatWasChosen)
        })

        const criminalsArray = useCriminals()
            // Filter the criminals application state down to the people that committed the crime
        const matchingCriminals = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
            // Then invoke render() and pass the filtered collection as
            // an argument
        renderToDom(matchingCriminals) 
    }
})



// Creates a variable to render criminals 
 const renderToDom = (criminalCollection) => {
    let criminalsHTMLRepresentations = ""
//   Loops through the criminal array and asigns it to a html representation
    for (const criminal of criminalCollection) {
        criminalsHTMLRepresentations += Criminal(criminal)
   }
    
    criminalsContainer.innerHTML = `
    <h2>Criminals</h2>
    <section class="criminalsList">
    ${criminalsHTMLRepresentations}
    </section>`
}

 
 export const CriminalList = () => {
     getCriminals()
     .then(() => {
    // Creates a CiminalList function that calls getCriminals to be passed to a new variable that takes the useCriminals array and renders it to the dom  
         const criminalArray = useCriminals()
         renderToDom(criminalArray)
     })
    }


    eventHub.addEventListener("officerSelected", event => {
        // How can you access the officer name that was selected by the user?
        const officerName = event.detail.selectedOfficerName
        
            
    
        // How can you get the criminals that were arrested by that officer?
        const criminalsArray = useCriminals()
        const criminals = criminalsArray.filter(
            criminalObject => {
              if(criminalObject.arrestingOfficer === officerName) {
                  return true
              }
              }
        ) 
        renderToDom(criminals)
    }) 