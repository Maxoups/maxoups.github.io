

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

console.log("Hello world!")
const CsvFile = "https://maxoups.github.io/ancestral-cookbook/Recettes.csv"

// Parse CSV and fill page
Papa.parse(CsvFile, {
    download: true,   // load the file via HTTP
    header: true,     // first row is header
    skipEmptyLines: true,
    complete: function(results) {
        console.log("CSV Parsed:")
        
        // Assume we take the first row (first recipe)
        const data = results.data[0];

        console.log("results.data[0]:")
        console.log(data)

        // Map CSV fields to variables
        const recipeTitle = data.title;
        const recipeCook = data.cook;
        const recipeType = data.type;
        const recipeTags = data.tags ? data.tags.split(";") : [];
        const recipeComments = data.comments;
        const recipeTime = data.time;
        const recipeIngredients = data.ingredients ? data.ingredients.split(";") : [];
        const recipeText = data.text ? data.text.split(";") : [];
        const recipeImages = data.images ? data.images.split(";") : [];

        // Create HTML div for this recipe

        createRecipeSlider(recipeImages);
        addRecipeTitle(recipeTitle);
        addRecipeChef(recipeCook)
    },
    error: function(err) {
        console.error("Error parsing CSV:", err);
    }
});


/*
// Parse CSV
let parsedRecipes = Papa.parse("Recettes.csv", {
    download: true,
    header: true, // first row as header
    skipEmptyLines: true
});
console.log("parsedRecipes:")
console.log(parsedRecipes)
*/
// Function calls

