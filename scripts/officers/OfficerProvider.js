
 let officers = []

 export const useOfficers = () => {
     return officers.slice()
 }
 
 export const getOfficers = () => {
    //  Requests the data from an API:
     return fetch("https://criminals.glassdale.us/officers")
    //  Converts the JSON string reponse to a JavaScript data structure (object or array)
         .then(response => response.json())
    // Then parse the data. Parsing means analyzing and converting a program into an internal format that Javascript can actually run.
         .then(
             parsedOfficers => {
                 console.table(parsedOfficers)
                 officers = parsedOfficers
             }
         )
 }