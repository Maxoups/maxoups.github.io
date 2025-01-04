

class BubbleData {
    constructor(title, image, text, link) {
        this.title = title; 
        this.image = image;
        this.text = text;
        this.link = link;
    }
}

// let hover_intervals = {};
let projects = {
    "ooc": new BubbleData(
        "Organ-on-a-chip Research", "url('images/projects/okayama_research.jpg')", 
        "As part of my Master's degree, I worked on a bioengineering research project at the University of Okayama in Japan, under the guidance of Professor K. Takahashi.", 
        "https://ken-takahashi.net/french-sorbonne-university-student-executes-fluid-dynamics-simulation-project-for-organ-chips/"),
    "master": new BubbleData("Master in Computer Science",
        "url('images/projects/remise_masters.jpg')", 
        "In 2024, I graduated from Sorbonne University with a Master's degree in Human-Computer Interaction, Multi-Agent Systems, Artificial Intelligence and Robotics.", 
        "https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-informatique/parcours-ai2d"),
    "licence": new BubbleData("Double Degree in Modern Literature & Computer Science", 
        "url('images/projects/licence.jpg')", 
        "In 2022, I graduated from Sorbonne Université with a Double Bachelor's degree in Modern Literature and Computer Science. It's a fun combo.", 
        "https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/licences/licence-carte/double-cursus-licences-schumaines/infolettres"),
    "dungeon_crew": new BubbleData("Dungeon Crew Webcomic", 
        "url('images/projects/dungeon_crew.jpg')", 
        "I am the author of the pixel art webcomic Dungeon Crew, a fantasy adventure about a group of bad guys managing a dungeon.", 
        "https://maxoups.github.io/dungeon-crew/index.html?pg=1"),
    "allianz_vr": new BubbleData("Olympic Games VR Experience", 
        "url('images/projects/allianz_vr.jpg')", 
        "I have worked as a Gameplay Developer at Virtual Room, for a freeroaming multiplayer VR experience at the 2024 Paris Olympics Games, commissioned by Allianz.", 
        "https://www.allianz.com/en/mediacenter/news/media-releases/240729-allianz-offers-unique-experiences-for-club-france-visitors.html"),
    "pogobots": new BubbleData("Swarm Robotics Research & Development", 
        "url('images/projects/pogobots.jpg')", 
        "As part of my studies, I have done behavioral programming and data analysis on the Pogobot, a robot designed at ISIR Laboratory for swarm robotics experiments.", 
        "https://pogobot.github.io/"),
    "covr": new BubbleData("Research on Augmented VR", 
        "url('images/projects/covr.jpg')", 
        "As part of my Master's degree, I worked on CoVR, an augmented VR platform with haptic feedback, developed at ISIR Laboratory. I tested the different systems and developed games for the platform.", 
        "https://www.isir.upmc.fr/projects/covr-haptic-platform-for-virtual-reality/?lang=en"),
    "gamejams": new BubbleData("Game Jams Projects", 
        "url('images/projects/gamejams.jpg')", 
        "I have, sometimes over my own good, participated in many, many game jams.<br><br>You can check out the results here!", 
        "https://itch.io/c/3660379/game-jams-collaborative-projects"),
    "website": new BubbleData("The website you're currently on!", 
        "url('images/projects/website.jpg')", 
        "This website took some time to make. That's because it holds a few secrets! Do you know what an ARG game is?<br>I do.", 
        "arg_game/index.html"),
    "echoes": new BubbleData("Echoes", 
        "url('images/projects/echoes2.jpg')", 
        "Between 2020 and 2022, I developed Echoes, an indie stealth puzzle game in which you play alongside your past selves to pull off impossible heists. It's pretty fun, you should give it a try!", 
        "https://feuillemorteentertainment.itch.io/echoes-complete-edition"),
    "electronics": new BubbleData("Electronics Projects", 
        "url('images/projects/electronics.jpg')", 
        "I have a few electronics projects I'm proud of, with a few more on the way. I'll show them here soon!", 
        ""),
    "decorporate": new BubbleData("Decorporate", 
        "url('images/projects/website.jpg')", 
        "This website took some time to m", 
        "arg_game/index.html"),

    // TO ADD:
    // - Add woodworking stuff
    // - Add Tabletop RPG stuff
    // - Add Decorporate when it's done
    // - Add Fish'n'Peas when it's done
    // - Cat?
}

writeBubbles();

//background-color:red;
function writeBubbles() {
    let writeNavDiv = document.querySelectorAll(".projectBubbles");
    writeNavDiv.forEach(function(element) {
        element.innerHTML = `<div class="projectBubblesWrapper" style="width: 100vw; position:relative; left: calc(-50vw + 50%); display:flex; flex-flow: row wrap;
        margin-top:30px; gap:50px;">
        ${projectBubble("dungeon_crew",     {"top_dot": null, "bottom_dot": null,   "style": `margin-left:5%; margin-top:110px;`})}  
        ${projectBubble("allianz_vr",       {"top_dot": null, "bottom_dot": 60,     "style": `margin-left:7%; margin-top:20px;`})}
        ${projectBubble("ooc",              {"top_dot": null,  "bottom_dot": 60,    "style": `margin-left:10%; margin-top:65px;`})}
        ${lineBreak()}
        ${projectBubble("pogobots",         {"top_dot": null, "bottom_dot": 45,     "style": `margin-left:5%; margin-top:60px;`})}
        ${projectBubble("covr",             {"top_dot": 40,  "bottom_dot": 25,      "style": `margin-left:2%; margin-top: 0px;`})}
        ${projectBubble("website",          {"top_dot": null, "bottom_dot": null,   "style": `margin-left:5%; margin-top:70px;`})}
        ${lineBreak()}
        ${projectBubble("electronics",      {"top_dot": 35, "bottom_dot": null,   "style": `margin-left:5%; margin-top:70px;`})}
        ${projectBubble("master",           {"top_dot": 60,  "bottom_dot": 35,      "style": `margin-left:10%; margin-top:30px;`})}
        ${projectBubble("echoes",           {"top_dot": null, "bottom_dot": 75,     "style": `margin-left:5%; margin-top: 0px;`})}
        ${lineBreak()}
        ${projectBubble("licence",          {"top_dot": 35,  "bottom_dot": null,    "style": `margin-left:20%; margin-top:20px;`})}
        ${projectBubble("gamejams",         {"top_dot": 50,  "bottom_dot": null,    "style": `margin-left:20%; margin-top:60px;`})}  
        </div>
        `;})
    
    connectBubbles("licence", "master");
    connectBubbles("master", "pogobots");
    connectBubbles("master", "covr");
    connectBubbles("master", "ooc");
    connectBubbles("covr", "allianz_vr");
    connectBubbles("gamejams", "echoes");
    connectBubbles("electronics", "pogobots");
    
    function lineBreak() {
        return `<div class="v_separator" style="width: 100%; height:0px;" ></div>`
    }

    function connectBubbles(bubble1, bubble2) {
        let line = new LeaderLine(
            LeaderLine.pointAnchor({element: document.getElementById(bubble1+"_top"),    x: 18, y:  30}),
            LeaderLine.pointAnchor({element: document.getElementById(bubble2+"_bottom"), x: 18, y: -30}),
          );
        line.color = '#006a61';
        line.size = 14;
        line.endPlug = 'behind';
        line.startPlug = 'behind';
        line.startSocket = 'bottom';
        line.bottomSocket = 'top';
        line.outline = true;
        line.outlineColor = '#000';
        line.outlineSize = 0.35;

        // FLUID ALIGNEMENT
        // line.path = "fluid";
        // line.startSocketGravity = [0, -275];
        // line.endSocketGravity   = [0,  275];

        // GRID ALIGNEMENT
        line.path = "grid";
        line.startSocketGravity = [0, -100];
        line.endSocketGravity   = [0,  100];
    }
    
    function projectBubble(bubble_id, layout) {
        let display_top_dot = layout["top_dot"];
        let display_bottom_dot = layout["bottom_dot"];
        // hover_intervals[bubble_id] = null;
        let bubbleData = projects[bubble_id];
        let anim_delay = ((Math.random() * 20 ) * -1);
        let top_dot = "";
        if (display_top_dot != null) {
            top_dot = `<span class="dot" id="`+ bubble_id +`_top" style="position:absolute; top:-20px; left:`+ display_top_dot +`%"></span>`; 
            // replace 'display_top_dot' with 45 for middle pos -> better for scaling?
            // I'd like to find a way to keep the dot in the same place during scaling
        }
        let bottom_dot = "";
        if (display_bottom_dot != null) {
            bottom_dot = `<span class="dot" id="`+ bubble_id +`_bottom" style="position:absolute; bottom:-20px; left:`+ display_bottom_dot +`%"></span>`;
            // replace 'display_top_dot' with 45 for middle pos -> better for scaling?
            // I'd like to find a way to keep the dot in the same place during scaling
        }
        return `
        <a href="`+ bubbleData.link +`" target="_blank" style="z-index:10; text-decoration:none; max-height: 200%; max-width: 300px;`+ layout["style"] +`">
            <div class="workBubble" id="`+ bubble_id +`" 
                style="background-image:`+ bubbleData.image +`; ` +` animation-delay: `+ anim_delay +`s;">
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