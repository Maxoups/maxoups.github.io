
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
    "licence": new BubbleData("Double Degree in Modern Literature & Computer Science", 
        "url('images/projects/licence.jpg')", 
        "In 2022, I graduated from Sorbonne Université with a Double Bachelor's degree in Modern Literature and Computer Science. It's a fun combo.", 
        "https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/licences/licence-carte/double-cursus-licences-schumaines/infolettres", 
        "5%", "0%"),
    "dungeon_crew": new BubbleData("Dungeon Crew Webcomic", 
        "url('images/projects/dungeon_crew.jpg')", 
        "I am the author of the pixel art webcomic Dungeon Crew, a fantasy adventure about a group of bad guys managing a dungeon.", 
        "https://maxoups.github.io/dungeon-crew/index.html?pg=1", 
        "5%", "0%"),
    "allianz_vr": new BubbleData("Olympic Games VR Experience", 
        "url('images/projects/allianz_vr.jpg')", 
        "I have worked as a Gameplay Developer at Virtual Room, for a freeroaming multiplayer VR experience at the 2024 Paris Olympics Games, commissioned by Allianz.", 
        "https://www.allianz.com/en/mediacenter/news/media-releases/240729-allianz-offers-unique-experiences-for-club-france-visitors.html", 
        "10%", "500%"),
    "pogobots": new BubbleData("Swarm Robotics Research & Development", 
        "url('images/projects/pogobots.jpg')", 
        "As part of my studies, I have done behavioral programming and data analysis on the Pogobot, a robot designed at ISIR Laboratory for swarm robotics experiments.", 
        "https://pogobot.github.io/", 
        "10%", "500%"),
    "covr": new BubbleData("Research on Augmented VR", 
        "url('images/projects/covr.jpg')", 
        "As part of my Master's degree, I worked on CoVR, an augmented VR platform with haptic feedback, developed at ISIR Laboratory, testing the systems and developing games for it.", 
        "https://www.isir.upmc.fr/projects/covr-haptic-platform-for-virtual-reality/?lang=en", 
        "10%", "500%"),
    "gamejams": new BubbleData("Game Jams Projects", 
        "url('images/projects/gamejams.jpg')", 
        "I have, sometimes over my own good, participated in many, many game jams.<br><br>You can check out the results here!", 
        "https://itch.io/c/3660379/game-jams-collaborative-projects", 
        "10%", "500%"),
    "website": new BubbleData("This Website", 
        "url('images/projects/website.jpg')", 
        "This website took a long time to make. That's because it holds a few secrets. Do you know what ARG Games are? I do.<br>Do you want to play?", 
        "arg_game/index.html", 
        "10%", "500%"),
}

writeBubbles();


function writeBubbles() {
    let writeNavDiv = document.querySelectorAll(".projectBubbles");
    writeNavDiv.forEach(function(element) {
        element.innerHTML = `<div class="projectBubblesWrapper" style="min-height: 900px;min-width: 100%; ">
        ${projectBubble(projects["dungeon_crew"], false, false)}  
        ${projectBubble(projects["ooc"], true, true)}
        ${projectBubble(projects["master"], true, false)}
        ${projectBubble(projects["licence"], true, false)}
        ${projectBubble(projects["allianz_vr"], true, false)}
        ${projectBubble(projects["pogobots"], true, false)}
        ${projectBubble(projects["covr"], true, false)}
        ${projectBubble(projects["gamejams"], false, false)}
        ${projectBubble(projects["website"], false, false)}
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