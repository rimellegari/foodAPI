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
    const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=54949f98&app_key=c26ded90ae7e169806d50ce87a548d29`
    const response = await fetch(baseURL);
    //convert response to json format
    const data = await response.json()
    //generate html content
    generateHTML(data.hits)
    console.log(data)
}
//map functions call a written function and apply it to each array element
function generateHTML(results){
// initiating constant 
    let generatedHTML = '';
//the function will loop through each element and create an ite
    results.map(result =>{ //we call the map function bringing result which gets de image within the recipe
        generatedHTML +=
        `
        <section class="item">
        <img src="${result.recipe.image}" alt="${result.recipe.label}" srcset="">
        <div class="flex-container">
            <h1 class="recipe-title">${result.recipe.label}</h1>
            <a href="${result.recipe.url}" target = "_blank" class="view-recipe">View Recipe</a>  
        </div>
        <p class="item-data">Calories:${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Ingredients:${result.recipe.ingredientLines}</p>
    </section>
        `
    })

    searchResultDiv.innerHTML = generatedHTML;
}