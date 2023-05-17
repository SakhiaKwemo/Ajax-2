const $button = $('#newFact')
const $text = $('#textFact')
const $count = $('#countFact')

$button.on('click', () => {

    console.log("The input field value is this: " + $count.val())

    const options = {
    url: `https://meowfacts.herokuapp.com/?count=${$count.val()}`,
    };

    axios.request(options)
    .then(e => {
        const arrayofFacts = e.data.data
        $text.text("")
        arrayofFacts.forEach(element => {
            axios.request({url: 'https://api.catboys.com/img'})
            .then(image => {
                $text.append(`<li><img style="width: 100px" src='${image.data.url}'/>${element}
                </li>`) 
            })
        }); 
    })
    .catch(err => console.log(err)) 

})

/*
const x = document.getElementbyId('id) ---> $x = $(#id)
# --> id
. --> classes
*/
