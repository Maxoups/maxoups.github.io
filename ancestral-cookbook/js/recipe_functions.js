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

  console.log("Created slider with images:", imgTags);

  // Now initialize Owl Carousel (must be after DOM insertion)
  $('.receipe-slider').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    dots: true,
    navText: ['◀', '▶']
  });
}


function addRecipeTitle(text) {
  document.getElementById("recipe-title").innerText = text;
}

function addRecipeChef(text) {
    document.getElementById("recipe-chef").innerText = text
}

function addRecipeTime(text) {
    document.getElementById("recipe-time").innerText = text
}

function addRecipeType(text) {
    document.getElementById("recipe-type").innerHTML = text
}

function addRecipeTags(tags) {
    document.getElementById("recipe-tags").innerText = tags.join(", ");
}

function addIngredients(recipeIngredients) {
    const ingredientsList = document.getElementById("recipe-ingredients");
    ingredientsList.innerHTML = ""; // Clear existing ingredients
    
    let ingredientsHTML = "";

        // Build checkboxes and categories dynamically
        recipeIngredients.forEach((item, index) => {
                if (item.trim().startsWith('#')) {
                        // Ingredient category
                        ingredientsHTML += `<h3 class="title-category">${item.replace(/^#\s*/, '')}</h3>`;
                } else {
                        ingredientsHTML += `
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck${index + 1}">
                                <label class="custom-control-label" for="customCheck${index + 1}">${item}</label>
                            </div>
                        `;
                }
        });
        ingredientsList.innerHTML = ingredientsHTML;
}

function addRecipeComments(text) {
    document.getElementById("recipe-comments").innerHTML =
        '<span class="comment-quote" style="margin-right: 16px;">“</span>' + text + '<span class="comment-quote">”</span>';
}

function addRecipeSteps(steps) {
    const stepsList = document.getElementById("recipe-steps");
    stepsList.innerHTML = ""; // Clear existing steps

    let stepsHTML = "";

    // Build steps and categories dynamically
    let stepNumber = 1;
    steps.forEach((step) => {
        if (step.trim().startsWith('#')) {
            // Step category
            stepsHTML += `<h3 class="title-category">${step.replace(/^#\s*/, '')}</h3>`;
        } else {
            stepsHTML += `
                <div class="single-preparation-step d-flex">
                    <h4 class="step-number">${stepNumber}.</h4>
                    <p class="step-text">${step}</p>
                </div>
            `;
            stepNumber++;
        }
    });
    stepsList.innerHTML = stepsHTML;
}

function getRandomRecipes(count) {
  let recipeArray = [];

  // Convert dictionary to array if needed
  let recipes = Array.isArray(recipesData)
    ? recipesData
    : Object.values(recipesData);

  // Shuffle array (Fisher–Yates)
  for (let i = recipes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [recipes[i], recipes[j]] = [recipes[j], recipes[i]];
  }

  // Take `count` recipes
  recipes.slice(0, count).forEach(item => {
    if (item.Titre && item.ID) {
      recipeArray.push({
        Titre: item.Titre,
        ID: item.ID
      });
    }
  });

  return recipeArray;
}


function writeRecipeBoxes() {
    let recipeNames = getRandomRecipes(12);
    console.log("recipeNames = " + recipeNames);
    const recipeBox = document.getElementById("recipes-box");
    let recipesHTML = "";
    for (let recipe of recipeNames) {
        recipesHTML += `
            <a href="recipe.html?name=${encodeURIComponent(recipe.ID)}" 
               class="btn delicious-btn btn-dish">
               ${recipe.Titre}
            </a>`;
    }
    recipeBox.innerHTML = recipesHTML;
}

function goToRandomRecipe(event) {
    event.preventDefault(); // prevent the default <a> navigation
    let recipesArray = Array.isArray(recipesData)
        ? recipesData
        : Object.values(recipesData);

    if (recipesArray.length === 0) return;
    const randomRecipe = recipesArray[Math.floor(Math.random() * recipesArray.length)];
    if (randomRecipe.ID) {
        window.location.href = `recipe.html?name=${encodeURIComponent(randomRecipe.ID)}`;
    }
}


/*
    <div id="preloader">
        <i class="circle-preloader"></i>
        <img src="img/core-img/salad.png" alt="">
    </div>
*/

function writeHeader() {
    document.getElementById("website-header").innerHTML = `
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
        <div class="delicious-main-menu" style="max-height: 100px; background-color: #3F2E1F;">
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
                                    <li id="btn-accueil"><a class="list-link" href="index.html">Accueil</a></li>
                                    <li id="btn-recherche"><a class="list-link" href="search.html">Rechercher</a></li>
                                    <li id="btn-menu"><a class="list-link" href="menu.html">Menu</a></li>
                                    <li id="btn-recipe"><a id="random-recipe-btn" class="list-link" href="#">Recette</a></li>
                                </ul>

                                <!-- Newsletter Form -->
                                <div class="search-btn">
                                    <i class="fa fa-search" aria-hidden="true">
                                        <a class="list-link" href="search.html"></a>
                                    </i>
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

    // Re-initialize the nav after injection
    if (typeof $.fn.classyNav !== "undefined") {
        $('#deliciousNav').classyNav();
    }
    // Add click event to search-btn to redirect to search.html
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'search.html';
        });
    }
    // Add click event to random recipe button
    const randomBtn = document.getElementById('random-recipe-btn');
    if (randomBtn) {
        randomBtn.addEventListener('click', function(e) {
            e.preventDefault();
            goToRandomRecipe(e);
        });
    }
}

// ex img: img/core-img/hamburger.png
function createMealItem(recipe, img) {
  return `
    <div class="meal-item" onclick="window.open('recipe.html?name=${recipe.ID}', '_blank')">
        <div class="meal-header">
            <img src="${img}" alt="" style="margin-right:0px;scale: 0.6;">
            <h3 class="meal-title">${recipe.Titre}</h3>
        </div>
        <p class="meal-desc">${recipe.Description}</p>
    </div>
  `;
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

function buildRecipePage(data) {
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

    //document.addEventListener("DOMContentLoaded", function() {createRecipeSlider(recipeImages);});
    createRecipeSlider(recipeImages);
    addRecipeTitle(recipeTitle);
    addRecipeChef(recipeCook);
    addIngredients(recipeIngredients);
    addRecipeType(recipeType + "&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;" + recipeTime);
    addRecipeTags(recipeTags);
    addRecipeSteps(recipeText);
    addRecipeComments(recipeComments);
}

function writePage() {
    writeHeader();
    if (currentPage.includes("recipe")) {
        // RECIPE PAGE
        document.getElementById("btn-recipe").classList.add("active");
        if (pageName) {
            const data = findRecipeByTitle(pageName);
            buildRecipePage(data);
        }
    } else if (currentPage.includes("search")) {
        // SEARCH PAGE
        document.getElementById("btn-recherche").classList.add("active");
    } else if (currentPage.includes("menu")) {
        // MENU PAGE
        document.getElementById("btn-menu").classList.add("active");
        renderRandomMenu();
    } else {
        // INDEX PAGE
        document.getElementById("btn-accueil").classList.add("active");
        writeRecipeBoxes();
    }
}

const recipeDataLoaded = new CustomEvent("recipeDataLoaded", {});

function parseRecipesCSV() {
    const CsvFile = "https://maxoups.github.io/ancestral-cookbook/Recettes.csv"
    recipesData = []
    // console.log("Try loading recipesData...");

    // Parse CSV and fill page
    Papa.parse(CsvFile, {
        download: true,   // load the file via HTTP
        header: true,     // first row is header
        skipEmptyLines: true,
        complete: function(results) {
            // console.log("RecipesData loaded successfully!");
            recipesData = results.data;
            console.log(recipesData);
            writePage();
            isRecipesDataLoaded = true;
            document.dispatchEvent(recipeDataLoaded);
        },
        error: function(err) {
            console.error("Error parsing CSV:", err);
        }
    });
}

//#####################################################################//



// Read parameters
const params = new URLSearchParams(window.location.search);
const pageName = params.get("name");
const currentPage = window.location.href;
//const servings = params.get("servings"); // "4"

// Parse recipes CSV
let recipesData;
let isRecipesDataLoaded = false;

if (recipesData == null) {
    console.log("Loading recipesData...")
    parseRecipesCSV()
} else {
    console.log("recipesData already loaded!")
    writePage()
}

/*
Add to your CSS (style.css) if not already present:
.list-link {
    transition: color 0.3s;
}
.list-link:hover, .classynav ul li.active > a.list-link {
    color: #9C926D !important;
}
*/

