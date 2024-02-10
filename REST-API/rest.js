fetch(
   'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
) // За замовчуванням, об'єкт відповіді  формат JSON
   .then(res => res.json()) //json()  конвертує її у JavaScript-об'єкт.
   .then(data => setHeroes(data)) //JavaScript-об'єктом, передається в другий блок then() в якості параметру data. Ця функція просто виводить цей об'єкт у консоль

function setHeroes({squadName,homeTown,formed,members/**ключ до функції  */}) {
    document.body.insertAdjacentHTML('afterbegin',
    `
    <h1>${squadName}</h1>
    <h2>Hometown ${homeTown} // Formed ${formed}</h2>
    <div class='heroes'>${setMembers(members)}</div>
    `)
}


function setMembers(members) {
 return members.map((hero) => `<div>
    <h3>${hero.name}</h3>   
     <P>Secret identity:${hero.secretIdentity}</P>
    <P>Age:${hero.age}</P>
    <p>Superpower:</p>
    <ul>
        ${hero.powers.map((power) => `<li>${power}</li>`).join('')}
    </ul></div>
 `
 ).join('')
}
