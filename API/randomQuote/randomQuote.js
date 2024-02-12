const url = 'https://api.quotable.io/quotes/random'
const btn = document.getElementById('btn')
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const container = document.querySelector('.container')

const getQuote = () => {
   quote.classList.remove('fade')
   author.classList.remove('fade')
   fetch(url)
      .then(data => data.json())
      .then(item => {
         console.log(item)
         quote.textContent = `"${item[0].content}"`
         author.textContent = `${item[0].author}`
         quote.classList.add('fade')
         author.classList.add('fade')
      })
}
getQuote()
window.addEventListener('load', getQuote) //Це гарантує, що коли веб-сторінка буде повністю завантажена та готова до взаємодії,
// функція getQuote() буде виконана, отримуючи випадкову цитату та оновлюючи відображену цитату та автора на веб-сторінці.Це гарантує,
// що коли веб-сторінка буде повністю завантажена та готова до взаємодії, функція getQuote() буде виконана, отримуючи випадкову цитату
//  та оновлюючи відображену цитату та автора на веб-сторінці.
btn.addEventListener('click', getQuote)



