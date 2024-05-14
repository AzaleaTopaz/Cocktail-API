const apiKey = `9973533`
const button = document.querySelector('#submit');


// getting button to click to access the API for data:


button.addEventListener('click', async () => {
    const input = document.querySelector('#text-input').value.toLowerCase();
    console.log(input);
    document.querySelector('#ingredients').innerHTML = '';

    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?s=${input}`);
    const cocktailData = response.data;
    console.log(cocktailData);

// let cocktailContainer = document.querySelector('#cocktail-container');

// for (let i = 0; i < cocktailData.drinks.length; i++){
//   let drink = cocktailData.drinks[i];

//   let recipeInfo = document.querySelector('#recipe-info');
//   let cocktailImage = document.querySelector('#cocktail-image');
//   let cocktailName = document.querySelector('#cocktail-name');
//   let ingredients = document.querySelector('#ingredients');


//     cocktailImage.src = drink.strDrinkThumb;
//     cocktailName.textContent = drink.strDrink;

//   for(let j = 1; j <= 15; j++){
//     let ingredient = drink[`strIngredient${j}`];
//     let measure = drink[`strMeasure${j}`];
//     if (ingredient && measure){
//         let listItem = document.createElement('li');
//         listItem.textContent = `${measure} ${ingredient}`;
//         ingredients.appendChild(listItem);

//     }
//   }
// recipeInfo.appendChild(cocktailImage);
// recipeInfo.appendChild(cocktailName);
// recipeInfo.appendChild(ingredients);
// cocktailContainer.appendChild(recipeInfo);
// }

// retrieve and display image of cocktail by running a loop because str.DrinkThumb was an array within an object:

let cocktailImage = document.querySelector('#cocktail-image'); 
for (let i = 0; i < cocktailData.drinks.length; i++) {
   cocktailImage.src = cocktailData.drinks[i].strDrinkThumb;
   

}

// // retrieving cocktail name:
// //  how to get this to 
const drinkName = cocktailData.drinks;
for (let i = 0; i < drinkName.length; i++){
    let cocktailRecipeElement = drinkName[i].strDrink;
    let recipeName = document.querySelector('#recipe-name');
    recipeName.textContent = cocktailRecipeElement;

}

// // retrieving glassware:

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

//  I used chat gpt to see if i can do nested loops to retrieve the list of ingredients: here is the code example I used to figure this out instead of repeating code: 
//      for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     console.log(`i: ${i}, j: ${j}`);
    // }
// }
const cocktailContainer = document.querySelector('#cocktail-container');

for (let i = 0; i < cocktailData.drinks.length; i++) {
    let ingredients = document.querySelector('#ingredients');
    let cocktail = document.createElement('div');
    // cocktailContainer.appendChild(cocktail);
    let title = document.createElement('h2');
    title.innerText = cocktailData.drinks[i].strDrink;
    cocktail.appendChild(title);
    let ingredientList = document.createElement('ul');
    cocktail.appendChild(ingredientList)
    for(let j = 1; j <= 15; j++){
        const ingredient = cocktailData.drinks[i][`strIngredient${j}`];
        console.log(ingredient);
        // ingredient.innerHTML = '';
        if (ingredient) { 
        let listItem = document.createElement('li');
        listItem.innerText = ingredient;
        ingredientList.appendChild(listItem);
    
        
        }
        cocktailContainer.appendChild(cocktail);
    }

   
   
     
// retrieving measurements:

// for (let i = 0; i < cocktailData.drinks.length; i++) {
//     let measurements = document.querySelector('#measurements');
// for(let j = 0; j <= 15; j++){
//     const measurement = cocktailData.drinks[i][`strMeasure${j}`];
//     console.log(measurement);
//     // measurement.innerHTML = '';
//     if (measurement) { 
//     let listItem2 = document.createElement('li');
//     listItem2.innerText = measurement;
//     measurements.appendChild(listItem2);
    
//     }

// }
        
        
        

        

        

        // checking to see if the list item is empty:

        //  
        // if(!ingredientElement.innerText.trim()) {
        //     ingredientElement.parentNode.removeChild(ingredientElement);
        // }
        // }
    // }


// }


}
})
