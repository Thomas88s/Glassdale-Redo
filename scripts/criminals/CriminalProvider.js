let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}
//  Copy of criminal array needs to be returned
 

export const getCriminals = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
//    Grabs the criminal information from the API
   return fetch("https://criminals.glassdale.us/criminals")
     .then(response => response.json())
   
     .then(parsedCriminals => {
         console.table(parsedCriminals)
         criminals = parsedCriminals
     })
}