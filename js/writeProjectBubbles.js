

writeBubbles();


function writeBubbles() {
    let writeNavDiv = document.querySelectorAll(".projectBubbles");
    writeNavDiv.forEach(function(element) {
      element.innerHTML = `<div class="projectBubblesWrapper">
        ${projectBubble()}
        </div>
        `;})
    
    function projectBubble() {
        return `<a/>` + `` + `</a>`;
    }

}