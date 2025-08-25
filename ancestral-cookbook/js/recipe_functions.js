

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


//#####################################################################//
// Recipe variables
const recipeTitle = "Vegetarian butter salad"
const imageList = ["img/bg-img/bg5.jpg"];

// Function calls
createRecipeSlider(imageList);
addRecipeTitle(recipeTitle);
