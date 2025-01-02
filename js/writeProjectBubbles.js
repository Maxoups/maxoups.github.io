
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
        "Organ-on-a-chip Research", "url('images/projects/okayama_research.jpg')", 
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
        ${projectBubble(projects["lab"], true, true)}
        ${projectBubble(projects["lab2"], true, false)}
        ${projectBubble(projects["project2"], false, false)}
        </div>
        `;})
    

    function connectBubbles(bubble1, bubble2) {

    }
    
    function projectBubble(bubbleData, display_top_dot, display_bottom_dot) {
        let anim_delay = ((Math.random() * 20 ) * -1);
        let top_dot_posX = (Math.random() * 60) + 15;
        let bottom_dot_posX = (Math.random() * 60) + 15;
        let top_dot = "";
        if (display_top_dot) {
            top_dot = `<span class="dot" style="position:absolute; top:-20px; left:`+ top_dot_posX +`%"></span>`;
        }
        let bottom_dot = "";
        if (display_bottom_dot) {
            bottom_dot = `<span class="dot" style="position:absolute; bottom:-20px; left:`+ bottom_dot_posX +`%"></span>`;
        }
        return `<div class="workBubble" 
            style="background-image:`+ bubbleData.image +`;
            top: `+ bubbleData.posY +`; left: `+ bubbleData.posX +`;
            animation-delay: `+ anim_delay +`s;">
            `+ top_dot +`
            `+ bottom_dot +`
            <p class="card-description">`+ bubbleData.text +`</p>
            <p style="color: #fff;text-align:center;font-weight: bold; font-size:large; background-color:black; width:100%;
            margin-left:0px; bottom:-10px; position:absolute;">`+ bubbleData.title +`</p>
        </div>`
    }
}

/*
# Cool color:
rgba(200,100,0,.5)


# Draw a line between two points
<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                <line x1="`+ top_dot_posX +`" y1="0" x2="300" y2="200" style="stroke:black;stroke-width:5" />
            </svg> 
*/

/*
return `<a href="`+ bubbleData.link +`" class="workBubble" 
            style="background-image:`+ bubbleData.image +`;min-height: 900px;min-width: 900px;">
            <p class="card-title">`+ bubbleData.title +`</p>
            <p class="card-description">`+ bubbleData.text +`</p>
        </a>`
*/