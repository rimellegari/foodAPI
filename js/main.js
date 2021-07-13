//selecting search form
const searchForm = document.querySelector('form');
//selecting div
const searchResultDiv = document.querySelector('.search-result');
//selecting whole container
const container = document.querySelector('.container');

//App-ID

const APP_ID = '54949f98';

//App-Key

const APP_KEY = 'c26ded90ae7e169806d50ce87a548d29';

//base url



//search value

let searchQuery
//EventListener when submitting tehe form

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    //get search value
    searchQuery = e.target.querySelector('input').value; //getting text from the form insetad of resetting page
   
    fetchAPI();

});

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=54949f98&app_key=c26ded90ae7e169806d50ce87a548d29`
    const response = await fetch(baseURL);
    console.log(response)
}