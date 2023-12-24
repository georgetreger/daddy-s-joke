
const btnEl = document.querySelector('.btn-1');
const jokeEl = document.querySelector('.joke-text');

const apiKey = 'yG3mvtimqYnoEx+EaPOmDw==InLthYKV3ScHfvSU';


   const options = {
        method: "Get",
         headers: {
            "X-Api-Key": apiKey,
         },
   };

     const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

      async  function getJoke(){
          btnEl.innerText = 'loading'
         jokeEl.innerText = "updating..."
        const response = await fetch(apiURL, options);
              const data = await response.json()
                   jokeEl.innerHTML = data[0].joke
                   
       }

          btnEl.addEventListener('click', ()=>{
            getJoke();
          });