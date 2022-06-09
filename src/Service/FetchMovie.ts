const API_KEY = 'apikey=7cb619f1';
const Adress = 'https://www.omdbapi.com/?';

const fetchMovie =  () => {
 const data = fetch(`${Adress}${API_KEY}&s=matrix&page=1`)
.then((response) => response.json())
.then((data) => data.Search
)
return data
}

const fetchMoviePlotFull =  (id:string) => {
    const data = fetch(`${Adress}${API_KEY}&i=${id}&plot=full`)
   .then((response) => response.json())
   .then((data) => data
   )
   return data
   }

export {fetchMovie,fetchMoviePlotFull}