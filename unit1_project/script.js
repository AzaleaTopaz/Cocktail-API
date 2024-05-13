const apiKey = `9973533`
const button = document.querySelector('#submit');


// getting button to click to access the API for data:


button.addEventListener('click', async () => {
    const input = document.querySelector('#text-input').value.toLowerCase();
    console.log(input);
    let cocktailImage = document.querySelector('#cocktail-image');
    let recipeName = document.querySelector('#recipe-name');
    let glassware = document.querySelector('#glassware');
    let ingredients = document.querySelector('#ingredients');
    let measurements = document.querySelector('#measurements');
    let instructions = document.querySelector('#instructions');

    const response = await axios.get(`http://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?s=${input}`);
    const cocktailData = response.data;
    console.log(cocktailData);


    
// retrieve and display image of cocktail by running a loop because str.DrinkThumb was an array within an object:

const cocktailPic = cocktailData.drinks;
for (let i = 0; i < cocktailPic.length; i++) {
   let cocktailImageURL = cocktailPic[0].strDrinkThumb;
   let cocktailImage = document.querySelector('#cocktail-image');
   cocktailImage.setAttribute('src', cocktailImageURL);
}

const drinkName = cocktailData.drinks;
for (let i = 0; i < drinkName.length; i++){
    let coktailRecipeElement = drinkName[i].strDrink;
    let recipeName = document.querySelector('#recipe-name');
    recipeName.textContent = coktailRecipeElement;

}

})



