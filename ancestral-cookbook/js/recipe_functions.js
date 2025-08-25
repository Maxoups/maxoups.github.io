

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

function addIngredients(recipeIngredients) {
    const ingredientsList = document.getElementById("recipe-ingredients");
    ingredientsList.innerHTML = ""; // Clear existing ingredients
    
    let ingredientsHTML = "";

    // Build checkboxes dynamically
    recipeIngredients.forEach((item, index) => {
    ingredientsHTML += `
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck${index + 1}">
        <label class="custom-control-label" for="customCheck${index + 1}">${item}</label>
      </div>
    `;
  });

  // Insert HTML inside the div
  ingredientsList.innerHTML = ingredientsHTML;
}


//#####################################################################//


function findRecipeByTitle(pageTitle) {
    const data = recipesData.find(row => row.Titre === pageTitle);
    if (!data) {
        console.log("Recipe not found!")
        return;
    }
    return data;
}

function buildPage(data) {
    // Map CSV fields to variables
    const recipeTitle = data.Titre;
    const recipeCook = data.Cuistot;
    const recipeType = data.Type;
    const recipeTags = data.Tags ? data.Tags.split(", ") : [];
    const recipeComments = data.Commentaires;
    const recipeTime = data.Temps;
    const recipeIngredients = data.Ingrédients ? data.Ingrédients.split("\n") : [];
    const recipeText = data.Recette ? data.Recette.split("\n\n") : [];
    const recipeImages = data.Images ? data.Images.split(", ") : [];

    // Create HTML div for this recipe
    createRecipeSlider(recipeImages);
    addRecipeTitle(recipeTitle);
    addRecipeChef(recipeCook);
    addIngredients(recipeIngredients)
}


//#####################################################################//


function writePage() {
    const data = findRecipeByTitle("Tiramisu")
    buildPage(data)
}


let recipesData = null;

function parseRecipesCSV() {
    const CsvFile = "https://maxoups.github.io/ancestral-cookbook/Recettes.csv"
    recipesData = []

    // Parse CSV and fill page
    Papa.parse(CsvFile, {
        download: true,   // load the file via HTTP
        header: true,     // first row is header
        skipEmptyLines: true,
        complete: function(results) {
            recipesData = results.data
            writePage()
        },
        error: function(err) {
            console.error("Error parsing CSV:", err);
        }
    });
}

if (recipesData == null) {
    console.log("Loading recipesData...")
    parseRecipesCSV()
} else {
    console.log("recipesData already loaded!")
    writePage()
}

