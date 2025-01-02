
class BubbleData {
    constructor(title, image, text, link, posX, posY) {
        this.title = title; 
        this.image = image;
        this.text = text;
        this.link = link;
        this.posX = posX;
        this.posY = posY;
    }
}

let projects = {
    "lab": new BubbleData(
        "Project 1", "url('images/projects/okayama_research.jpg')", 
        "This is a placeholder for project 1", 
        "project1.html", 
        "10%", "5%"),
    "lab2": new BubbleData(
        "Project 1", "url('images/projects/okayama_research.jpg')", 
        "This is a placeholder for project 1", 
        "project1.html", 
        "20%", "15%"),
    "project2": new BubbleData("Project 2", 
        "url('images/projects/okayama_research.jpg')", 
        "This is a placeholder for project 2", 
        "project2.html", 
        "5%", "0%"),
}

writeBubbles();


function writeBubbles() {
    let writeNavDiv = document.querySelectorAll(".projectBubbles");
    writeNavDiv.forEach(function(element) {
      element.innerHTML = `<div class="projectBubblesWrapper" style="min-height: 900px;min-width: 900px; ">
        ${projectBubble(projects["lab"])}
        ${projectBubble(projects["lab2"])}
        ${projectBubble(projects["project2"])}
        </div>
        `;})
    

    function connectBubbles(bubble1, bubble2) {

    }
    
    function projectBubble(bubbleData) {
        return `<div class="workBubble" 
            style="background-image:`+ bubbleData.image +`;position: relative;
            top: `+ bubbleData.posY +`; left: `+ bubbleData.posX +`; border-radius: 20px;">
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