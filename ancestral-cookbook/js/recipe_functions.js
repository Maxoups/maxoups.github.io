

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
                <h4 class="step-number">${index + 1}.</h4>
                <p class="step-text">${step}</p>
            </div>
        `;
    });
    stepsList.innerHTML = stepsHTML;
}

function writeHeader() {
    document.getElementById("website-header").innerHTML = `<!-- Preloader -->
    <div id="preloader">
        <i class="circle-preloader"></i>
        <img src="img/core-img/salad.png" alt="">
    </div>

    <!-- Search Wrapper -->
    <div class="search-wrapper">
        <!-- Close Btn -->
        <div class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form action="#" method="post">
                        <input type="search" name="search" placeholder="Type any keywords...">
                        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- ##### Header Area Start ##### -->
    <header class="header-area">

        <!-- Navbar Area -->
        <div class="delicious-main-menu" style="max-height: 100px;">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <!-- Menu -->
                    <nav class="classy-navbar justify-content-between" id="deliciousNav">

                        <!-- Logo -->
                        <a class="nav-brand" href="index.html"><img class="img-logo" src="img/core-img/logo.png" alt=""></a>

                        <!-- Navbar Toggler -->
                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <!-- Menu -->
                        <div class="classy-menu">

                            <!-- close btn -->
                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>

                            <!-- Nav Start -->
                            <div class="classynav">
                                <ul>
                                    <li class="active"><a class="list-link" href="index.html">Accueil</a></li>
                                    <li><a class="list-link" href="#">Pages</a>
                                        <ul class="dropdown">
                                            <li><a class="list-item" href="index.html">Générer un menu</a></li>
                                            <li><a class="list-item" href="blog-post.html">Rechercher</a></li>
                                            <li><a class="list-item" href="about.html">À propos</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="list-link" href="#">Menu</a>
                                        <ul class="dropdown">
                                            <li><a class="list-item" href="index.html">Entrées</a></li>
                                            <li><a class="list-item" href="blog-post.html">Plats</a></li>
                                            <li><a class="list-item" href="about.html">Desserts</a></li>
                                            <li><a class="list-item" href="about.html">Boissons</a></li>
                                            <li><a class="list-item" href="about.html">Autres</a></li>
                                        </ul>
                                    </li>
                                    <li><a class="list-link" href="#">Cuistots</a>
                                        <ul class="dropdown">
                                            <li><a class="list-item" href="recipe-post.html">Kaki</a></li>
                                            <li><a class="list-item" href="recipe-post.html">Mélinouche</a></li>
                                        </ul>
                                    </li>
                                    <!-- <li><a href="contact.html">Contact</a></li> -->
                                </ul>

                                <!-- Newsletter Form -->
                                <div class="search-btn">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </div>

                            </div>
                            <!-- Nav End -->
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- ##### Header Area End ##### -->`;
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
    writeHeader();
    if (pageName) {
        const data = findRecipeByTitle(pageName);
        buildPage(data);
    }
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

