
const apiKey = `9973533`
const button = document.querySelector('#submit');
// const input = document.querySelector('#text-input')

// getting button to click to access the API for data:

const cocktailContainer = document.querySelector('#cocktail-container');
button.addEventListener('click', async () => {
    cocktailContainer.innerHTML = "";
    console.log( cocktailContainer.innerHTML)
   
   const input = document.querySelector('#text-input').value.toLowerCase();
    // Will helped me with this//
    

    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?s=${input}`);
    const cocktailData = response.data;
    console.log(cocktailData);

    if (input == ''){
        console.log('Please enter a search query.');
        return;

    }

 

 
///////////// Tom and Britney assisted me with this today /////////////

// creating a cocktail container
// const cocktailContainer = document.querySelector('#cocktail-container');
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
    
}

// retrieving cocktail instructions
let instructions = document.createElement('p');
    instructions.innerText = cocktailData.drinks[i].strInstructions;
    cocktail.appendChild(instructions);

    cocktailContainer.appendChild(cocktail);
    
  
 }

 

})




    
        

        



        
        
        



