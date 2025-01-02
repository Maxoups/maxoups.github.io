
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
    "ooc": new BubbleData(
        "Organ-on-a-chip Research", "url('images/projects/okayama_research.jpg')", 
        "As part of my Master's degree, I worked on a bioengineering research project at the University of Okayama in Japan, under the guidance of Professor K. Takahashi.", 
        "https://ken-takahashi.net/french-sorbonne-university-student-executes-fluid-dynamics-simulation-project-for-organ-chips/", 
        "10%", "5%"),
    "master": new BubbleData(
        "Master in Computer Science", "url('images/projects/remise_masters.jpg')", 
        "In 2024, I graduated from Sorbonne University with a Master's degree in Human-Computer Interaction, Multi-Agent Systems, Artificial Intelligence and Robotics.", 
        "https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-informatique/parcours-ai2d", 
        "40%", "115%"),
    "project2": new BubbleData("Project 2", 
        "url('images/projects/okayama_research.jpg')", 
        "This is a placeholder for project 2", 
        "https://maxoups.github.io/", 
        "5%", "0%"),
}

writeBubbles();


function writeBubbles() {
    let writeNavDiv = document.querySelectorAll(".projectBubbles");
    writeNavDiv.forEach(function(element) {
      element.innerHTML = `<div class="projectBubblesWrapper" style="min-height: 900px;min-width: 100%; ">
        ${projectBubble(projects["ooc"], true, true)}
        ${projectBubble(projects["master"], true, false)}
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
        return `
        <a href="`+ bubbleData.link +`" target="_blank" style="text-decoration:none; max-height: 200px; max-width: 300px;">
            <div class="workBubble" 
                style="background-image:`+ bubbleData.image +`;
                top: `+ bubbleData.posY +`; margin-left: `+ bubbleData.posX +`;
                animation-delay: `+ anim_delay +`s;">
                `+ top_dot +`
                `+ bottom_dot +`
                <p class="card-description" style="font-size:15px;text-align:center;">`+ bubbleData.text +`</p>
                <p style="color: #fff;text-align:center;font-weight: bold; font-size:large; background-color:black; width:100%;
                margin-left:0px; bottom:-10px; position:absolute;">`+ bubbleData.title +`</p>
            </div>
        </a>`
    }
}

/*
# Read more line:
    <p class="card-description" style="font-size:14px;font-style:italic;text-align:right;margin-top:-15px">Read more...</p>


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