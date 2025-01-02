
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
        "70%", "115%"),
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
        let anim_delay = ((Math.random() * 20 ) * -1);
        return `<div class="workBubble" 
            style="background-image:`+ bubbleData.image +`;position: relative; height: 200px; width: 300px;
            top: `+ bubbleData.posY +`; left: `+ bubbleData.posX +`; border-radius: 25px; border: 5px solid #000;
            background-size: 375px; background-repeat: no-repeat; background-position: right;
            animation: idle_bob 4s infinite ease-in-out; animation-delay: `+ anim_delay +`s;">
            <span class="dot" style="position:relative; top:-15px"></span>
            <span class="dot" style="position:absolute; bottom:-15px"></span>
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