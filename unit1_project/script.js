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

    const response = await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
    const cocktailData = response.data;
    console.log(cocktailData);

 const cocktailPic = cocktailData.drinks[i].strDrink.strDrinkThumb;
 cocktailImage.setAttribute('src', cocktailPic);

})

// retrieve and display image of cocktail:

// const cocktailPic = cocktailData.drinks[i].strDrink.strDrinkThumb