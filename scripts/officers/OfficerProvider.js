

let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
//   Request the data stored in the API
    return fetch("https://criminals.glassdale.us/officers")
 //  Then convert the Json recieved into a JS data structure
        .then(response => response.json())
    //  Now plug the parsedOfficers into an officers variable 
        .then(parsedOfficers => {
            // console.table(parsedOfficers)
            officers = parsedOfficers          
    })
}