//.then method
fetch('api-link')
.then( 
    //whenever the fetch is done, place the result of that fetch inside "e"
    (e) => {

    }
)
.then((e) => {
        //whenever the first .then() is done, place the result of that .then() inside "e"
        console.log(e)
})
.catch()
