
class BubbleData {
    constructor(title, image, text, link, anchorTop, anchorBottom) {
        this.title = title; 
        this.image = image;
        this.text = text;
        this.link = link;
        this.anchorTop = anchorTop;
        this.anchorBottom = anchorBottom;
    }
}


writeBubbles();


function writeBubbles() {
    let writeNavDiv = document.querySelectorAll(".projectBubbles");
    writeNavDiv.forEach(function(element) {
      element.innerHTML = `<div class="projectBubblesWrapper">
        ${projectBubble()}
        </div>
        `;})
    

    function connectBubbles(bubble1, bubble2) {

    }
    
    function projectBubble(bubbleData) {
        return `<a href="`+ bubbleData.link +`" class="workBubble" 
            style="background-image:`+ bubbleData.image +`;">
            <p class="card-title">`+ bubbleData.title +`</p>
            <p class="card-description">`+ bubbleData.text +`</p>
        </a>`
    }
}