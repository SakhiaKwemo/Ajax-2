const button = document.getElementById('newFact')
const text = document.getElementById('textFact')

button.addEventListener('click', () => {
    const url = 'https://meowfacts.herokuapp.com/';

    fetch(url)
    .then(e => e.json())
    .then(e => {
        const newText = e.data[0]
        text.innerHTML = newText
    })
    .catch(err => console.log(err))
})





