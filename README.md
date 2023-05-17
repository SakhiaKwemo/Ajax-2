# AJAX 

* [x] What is Ajax?
    - paint demo
    - local
    - public
    - ajax definitions
* [x] Pros/Cons Ajax?
* [x] Ajax Methods
    - Vanilla JS (Basic Js)
        - XMLHTTPRequest "12-18 lines of code"
        - fetch "2-4 lines of code"
    - JQuery (Library/Alternative Js)
        - axios
* [x] Demos
    - fetch
        - fetch "console" (random cat api)
        - fetch "button" (random cat api)

        *BREAK* 
    - jquery
        - ajax "button" (random cat api)
            *download library*
        - ajax "form" (anime api)
    

## What is Ajax?
- Ajax was brought up in 2005, through the article "Ajax: A New Approach to Web Application"
- A technique that allows the user interface to update itself without a refresh

# Pros of using Ajax
- Less trafic
- Loading Time, basically since there is less initial data, it can be loaded more quickly
- Infinite Scrolling, its a much better seemingless User Experience, constantly updating it with new information

# Cons of using Ajax
- Cant save or bookmark, certain pieces of data, because it can only be accessed when scrolled
- Security, Increased vulnerablity in data, due to the increase of response, and requests, can be easily intercepted
- Complex, Increased in complexity can cause more errors, due to implementation

# Ajax Methods

- Vanilla Js
    - XHMLHTTPRequests
    ```js
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open('GET', 'https://api-nba-v1.p.rapidapi.com/games?date=2022-02-12');
    xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
    xhr.setRequestHeader('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');

    xhr.send(data);

    ```

    - fetch
    ```js
        const url = 'https://api-nba-v1.p.rapidapi.com/games?date=2022-02-12';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        };

        fetch(url, options);
        .then(e => e.text());
        .then(e => e);
        .catch(err => console.log(err))
    ```

- jQuery
    - axios
    ```js
        import axios from 'axios';

        const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games',
        params: {date: '2022-02-12'},
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
        };

        axios.request(options);
        .then(e => e.data)
        .catch(err => console.log(err)) 
    ```