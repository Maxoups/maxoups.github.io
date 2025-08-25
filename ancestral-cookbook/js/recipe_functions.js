

function createRecipeSlider(images) {
  // Build the inner <img> tags
  const imgTags = images
    .map(src => `<img src="${src}" alt="">`)
    .join("\n    ");

  // Wrap with the container div
  let image_divs = `
<div class="receipe-slider owl-carousel">
    ${imgTags}
</div>`;
  document.getElementById("slider-container").innerHTML = image_divs;
}

function addRecipeTitle(text) {
  document.getElementById("recipe-title").innerText = text;
}

function addRecipeChef(text) {
    document.getElementById("recipe-chef").innerText = text
}

function parseCSV(csvString) {
    return Papa.parse(csvString, {
        download: true,
        header: true, // first row as header
        skipEmptyLines: true
    });
}


//#####################################################################//
// Recipe variables
const recipeTitle = "Vegetarian butter salad"
const recipeCook  = "Stéphane Maire"
const recipeType = []
const imageList   = ["img/bg-img/bg5.jpg", "img/tiramisu02.jpg"];



// Parse CSV
let parsedRecipes = Papa.parse("Recettes.csv", {
    download: true,
    header: true, // first row as header
    skipEmptyLines: true
});
console.log("parsedRecipes.data:")
console.log(parsedRecipes.data)
console.log("parsedRecipes.errors:")
console.log(parsedRecipes.errors)
console.log("parsedRecipes.meta:")
console.log(parsedRecipes.meta)

// Function calls
createRecipeSlider(imageList);
addRecipeTitle(recipeTitle);
addRecipeChef(recipeCook)
