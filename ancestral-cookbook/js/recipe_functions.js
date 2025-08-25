
function createRecipeSlider(images) {
  // Build the inner <img> tags
  const imgTags = images
    .map(src => `<img src="${src}" alt="">`)
    .join("\n    ");

  // Wrap with the container div
  return `
<div class="receipe-slider owl-carousel">
    ${imgTags}
</div>`;
}



// Inject recipe elementsg
const imageList = ["img/bg-img/bg5.jpg"];

document.getElementById("slider-container").innerHTML = createRecipeSlider(imageList);