const apiKey = `9973533`
const button = document.querySelector('#submit');


// getting button to click to access the API for data:


button.addEventListener('click', async () => {
    const input = document.querySelector('#text-input').value.toLowerCase();
    console.log(input);
    let cocktailImage = document.querySelector('#cocktail-image');
    let recipeName = document.querySelector('#recipe-name');
    let glassware = document.querySelector('#glassware');
    // let ingredients = document.querySelector('#ingredients');
    let measurements = document.querySelector('#measurements');
    let instructions = document.querySelector('#instructions');

    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?s=${input}`);
    const cocktailData = response.data;
    console.log(cocktailData);


    
// retrieve and display image of cocktail by running a loop because str.DrinkThumb was an array within an object:

const cocktailPic = cocktailData.drinks;
for (let i = 0; i < cocktailPic.length; i++) {
   let cocktailImageURL = cocktailPic[i].strDrinkThumb;
   let cocktailImage = document.querySelector('#cocktail-image');
   cocktailImage.setAttribute('src', cocktailImageURL);
}

// retrieving cocktail name:
//  how to get this to 
const drinkName = cocktailData.drinks;
for (let i = 0; i < drinkName.length; i++){
    let cocktailRecipeElement = drinkName[i].strDrink;
    let recipeName = document.querySelector('#recipe-name');
    recipeName.textContent = cocktailRecipeElement;

}

// retrieving glassware:

const glassName = cocktailData.drinks;
for(let i = 0; i < glassName.length; i++){
    let glasswareElement = glassName[i].strGlass;
    let glassware = document.querySelector('#glassware');
    glassware.textContent = glasswareElement;
}

// creating an array for ingredients: here I thought I needed to creat an array, but I found another way to grab the ingredients.

// const ingredientName1 = cocktailData.drinks
// for( let i = 0; i < ingredientName1.length; i++){
// let ingredient1 = ingredientName1[i].strIngredient1;
// console.log(ingredient1);
// }

// const ingredientName2 = cocktailData.drinks
// for( let i = 0; i < ingredientName2.length; i++){
// let ingredient2 = ingredientName2[i].strIngredient2;
// console.log(ingredient2);
// }
// const ingredientName3 = cocktailData.drinks
// for( let i = 0; i < ingredientName3.length; i++){
// let ingredient3 = ingredientName3[i].strIngredient3;
// console.log(ingredient3);
// }

//  I used to chat gpt to see if i can do nested loops to retrieve the list of ingredients: here is the code example I used to figure this out instead of repeating code: 
//      for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     console.log(`i: ${i}, j: ${j}`);
    // }
// }


   
    // ingredients.innerHTML = ''; 

    for (let i = 0; i < cocktailData.drinks.length; i++) {
    let ingredients = document.querySelector('#ingredients');
    for(let j = 1; j <= 7; j++){
        const ingredientsList = cocktailData.drinks[i][`strIngredient${j}`];
        console.log(ingredientsList);

        ingredientsList.innerHTML = '';

        let ingredientElement = document.createElement('li');
        ingredientElement.innerText = ingredientsList;
        ingredients.appendChild(ingredientElement);
        

        // checking to see if the list item is empty:

         
        if(!ingredientElement.innerText.trim()) {
            ingredientElement.parentNode.removeChild(ingredientElement);
        }
        }
    }




})
