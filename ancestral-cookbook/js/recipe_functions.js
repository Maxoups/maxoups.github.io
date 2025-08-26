

function createRecipeSlider(images) {
  // Build the inner <img> tags
  const imgTags = images
    .map(src => `<img src="${src}" alt="">`)
    .join("\n    ");

  // Wrap with the container div
  const image_divs = `
<div class="receipe-slider owl-carousel">
    ${imgTags}
</div>`;

  // Inject into the DOM
  document.getElementById("slider-container").innerHTML = image_divs;
}

function addRecipeTitle(text) {
  document.getElementById("recipe-title").innerText = text;
}

function addRecipeChef(text) {
    document.getElementById("recipe-chef").innerText = text
}

function addRecipeTime(text) {
    document.getElementById("recipe-time").innerText = "Préparation : " + text
}

function addRecipeType(text) {
    document.getElementById("recipe-type").innerText = "Catégorie : " + text
}

function addRecipeTags(tags) {
    document.getElementById("recipe-tags").innerText = "Tags : " + tags.join(", ");
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
  ingredientsList.innerHTML = ingredientsHTML;
}

function addRecipeComments(text) {
    document.getElementById("recipe-comments").innerText = text;
}

function addRecipeSteps(steps) {
    const stepsList = document.getElementById("recipe-steps");
    stepsList.innerHTML = ""; // Clear existing steps

    let stepsHTML = "";

    // Build steps dynamically
    steps.forEach((step, index) => {
        stepsHTML += `
            <div class="single-preparation-step d-flex">
                <h4>${index + 1}.</h4>
                <p class="step-text">${step}</p>
            </div>
        `;
    });
    stepsList.innerHTML = stepsHTML;
}



//#####################################################################//


function findRecipeByTitle(pageTitle) {
    const data = recipesData.find(row => row.ID === pageTitle);
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
    const recipeID = data.ID;
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
    addIngredients(recipeIngredients);
    addRecipeTime(recipeTime);
    addRecipeType(recipeType);
    addRecipeTags(recipeTags);
    addRecipeSteps(recipeText);
    addRecipeComments(recipeComments);
}

function writePage() {
    console.log("Building page for:", pageName)
    const data = findRecipeByTitle(pageName)
    buildPage(data)
}

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

//#####################################################################//



// Read parameters
const params = new URLSearchParams(window.location.search);
const pageName = params.get("name");       // "cake"
//const servings = params.get("servings"); // "4"

// Parse recipes CSV
let recipesData;

if (recipesData == null) {
    console.log("Loading recipesData...")
    parseRecipesCSV()
} else {
    console.log("recipesData already loaded!")
    writePage()
}

