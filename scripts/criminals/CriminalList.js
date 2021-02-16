
 import { getCriminals, useCriminals } from './CriminalProvider.js'

 
 export const CriminalList = () => {
     getCriminals().then(() => {
    // Creates a CiminalList function that calls getCriminals to be passed to a new variable that takes the useCriminals array and renders it to the dom  
         const criminalArray = useCriminals()
         renderToDom(criminalArray)
     })
    }