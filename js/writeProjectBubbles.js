
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

let projects = [
    new BubbleData("Project 1", "url('images/projects/okayama_research.jpg')", "This is a placeholder for project 1", "project1.html", 0, 0),
    new BubbleData("Project 2", "url('images/projects/okayama_research.jpg')", "This is a placeholder for project 2", "project2.html", 0, 0),
]


writeBubbles();


function writeBubbles() {
    let writeNavDiv = document.querySelectorAll(".projectBubbles");
    writeNavDiv.forEach(function(element) {
      element.innerHTML = `<div class="projectBubblesWrapper" style="min-height: 900px;min-width: 900px; spacing: 10px;">
        ${projectBubble(projects[0])}
        ${projectBubble(projects[0])}
        ${projectBubble(projects[1])}
        </div>
        `;})
    

    function connectBubbles(bubble1, bubble2) {

    }
    
    function projectBubble(bubbleData) {
        return `<div class="workBubble" 
            style="background-image:`+ bubbleData.image +`;">
            <p class="card-title">`+ bubbleData.title +`</p>
            <p class="card-description">`+ bubbleData.text +`</p>
        </a>`
    }
}

/*
return `<a href="`+ bubbleData.link +`" class="workBubble" 
            style="background-image:`+ bubbleData.image +`;min-height: 900px;min-width: 900px;">
            <p class="card-title">`+ bubbleData.title +`</p>
            <p class="card-description">`+ bubbleData.text +`</p>
        </a>`
*/