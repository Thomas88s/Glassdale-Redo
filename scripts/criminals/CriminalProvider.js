
 let criminals = []

 export const useCriminals = () => criminals.slice()
 
 export const getCriminals = () => {
     //  Requests the data from an API:
    fetch("https://criminals.glassdale.us/criminals")
//  Converts the JSON string reponse to a JavaScript data structure (object or array)
    .then(response => response.json())
     /*
         Load database state into application state with a fetch().
         Make sure the last then() updates the criminals array
     */
    .then(
        parsedCriminals => {
            console.table(parsedCriminals)
            criminals = parsedCriminals
        }
    )
 }