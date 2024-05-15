const apiKey = `9973533`
const button = document.querySelector('#submit');


// getting button to click to access the API for data:


button.addEventListener('click', async () => {
    const input = document.querySelector('#text-input').value.toLowerCase();
    console.log(input);
    document.querySelector('#text-input').innerHTML = '';

    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?s=${input}`);
    const cocktailData = response.data;
    console.log(cocktailData);



///////////// Tom and Britney assisted me with this today /////////////

// creating a cocktail container
const cocktailContainer = document.querySelector('#cocktail-container');
// looping through drinks
for (let i = 0; i < cocktailData.drinks.length; i++) {
  //  creating a div for cocktails
    let cocktail = document.createElement('div');
    
// creating a title for cocktails
    let title = document.createElement('h2');
    title.innerText = cocktailData.drinks[i].strDrink;
    cocktail.appendChild(title);
   
//  retrieving cocktail images 
let cocktailImage = document.createElement('img')
cocktailImage.src = cocktailData.drinks[i].strDrinkThumb;
cocktail.appendChild(cocktailImage)

// retrieving glassware names
let glassName = document.createElement('h3');
    glassName.innerText = cocktailData.drinks[i].strGlass;
    cocktail.appendChild(glassName);

// creating unordered list and list items for measurements and ingredients
    let ingredientList = document.createElement('ul');
    cocktail.appendChild(ingredientList)
    
    for(let j = 1; j <= 15; j++){
        const measurement = cocktailData.drinks[i][`strMeasure${j}`]
        const ingredient = cocktailData.drinks[i][`strIngredient${j}`];
        console.log(ingredient);
        if (measurement && ingredient) { 
        let listItem = document.createElement('li');
        listItem.innerText = `${measurement} - ${ingredient}`;
        ingredientList.appendChild(listItem);
    }
    cocktailContainer.appendChild(cocktail);
}

// retrieving cocktail instructions
let instructions = document.createElement('p');
    instructions.innerText = cocktailData.drinks[i].strInstructions;
    cocktail.appendChild(instructions);
    


    
        

        
 ////////////////// Trial and Error /////////////////////////////   

// // retrieving glassware:

// const glassName = cocktailData.drinks;
// for(let i = 0; i < glassName.length; i++){
//     let glasswareElement = glassName[i].strGlass;
//     let glassware = document.querySelector('#glassware');
//     glassware.textContent = glasswareElement;
// }
        
// let cocktailImage = document.querySelector('#cocktail-image'); 
// for (let i = 0; i < cocktailData.drinks.length; i++) {
//    cocktailImage.src = cocktailData.drinks[i].strDrinkThumb;
   

// }
  

// // retrieving cocktail name:
// //  how to get this to 
// const drinkName = cocktailData.drinks;
// for (let i = 0; i < drinkName.length; i++){
//     let cocktailRecipeElement = drinkName[i].strDrink;
//     let recipeName = document.querySelector('#recipe-name');
//     recipeName.textContent = cocktailRecipeElement;

// }

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
