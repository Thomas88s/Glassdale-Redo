
export const Criminal = (criminalObj) => {
    return `
    <article class="criminal">
      <h3>${criminalObj.name}</h3>
      <p>Age: ${criminalObj.age}</p> 
      <p>Conviction: ${criminalObj.coviction}</p> 
      <p>Start date: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p> 
      <p>End date: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p> 
    </article>

    `
}