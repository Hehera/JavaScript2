const key = 'Vc1lzTNpsSfK7DbuM12QpqKEhmkFP3oQKvJXG7RK'
const url = `https://countryapi.io/api/all?apikey=${key}`

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
   const inputWord = document.getElementById('input').value

   fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log({data})
        const country = Object.values(data).find(obj => obj.name.toLowerCase() === inputWord.toLowerCase());
        const languagesHTML = Object.values(country.languages).map(language => `<span>${language}</span>`).join(', ');
        const currenciesHTML = Object.values(country.currencies).map(currency => `<span>${currency.name} (${currency.symbol})</span>`).join(', ');
            if(country) {
                result.innerHTML = `
                <h1>${country.name}</h1>
                <img src="${country.flag.large}">
                <p id="Capital">Capital: <span>${country.capital}</span></p>
                <p id="Continent">Continent: <span>${country.subregion}</p>
                <p id="Population">Population: <span>${country.population}</span </p>
                <p id="Currency">Currency: <span>${currenciesHTML}</p>
                <p id="CommonLanguage">Common language: <span>${languagesHTML}</span </p>
                `
            } else {
                console.log('error')
        }
      })
})
