
 import { getCriminals, useCriminals } from './CriminalProvider.js'
 import { Criminal } from "./Criminal.js"

 const criminalsContainer = document.querySelector(".criminalsContainer")

// Creates a variable to store the html imported criminal representations
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