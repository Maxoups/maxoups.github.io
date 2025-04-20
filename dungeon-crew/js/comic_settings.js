//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 17 +1; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "dungeon_crew-"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last", "About", "Archive"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg-1;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/


/* 
EXAMPLE WITH AUTHOR NOTES:

{
        pgNum: 2,
        title: "Business Opportunity",
        date: writeDate(2024, 12, 21),
        altText: "Here's some more alt text!",
        imageFiles: 1,
        authorNotes: `
            <p>You can have different author notes for every page.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, orci sit amet dignissim eleifend, magna felis malesuada nunc, ut sagittis purus mi ac urna. Fusce ligula urna, varius vel sapien sit amet, vulputate tempor felis. In hac habitasse platea dictumst. Aliquam laoreet volutpat interdum. Vestibulum non libero sit amet leo accumsan porttitor. Vivamus nec porttitor neque. Sed eget mauris quam.</p>
            `,
    },

    // this is what the author notes section looks like in the html (I removed it):
    <div id="authorNotes">
    <h2>Author Notes</h2>
    <!-- write the author notes for the current page-->
    <div class="writeAuthorNotes"></div>
    </div>
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "Princess Problems", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2024, 12, 31), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: ``,
    },
    {
        pgNum: 2,
        title: "Business Opportunity",
        date: writeDate(2025, 1, 5),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 3,
        title: "Wrong target",
        date: writeDate(2025, 1, 12),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 4,
        title: "Distressed Damsel",
        date: writeDate(2025, 1, 19),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 5,
        title: "Well-kept secret",
        date: writeDate(2025, 1, 26),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 6,
        title: "Daring escape",
        date: writeDate(2025, 2, 2),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 7,
        title: "Dungeon Academics 1/2",
        date: writeDate(2025, 2, 9),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 8,
        title: "Dungeon Academics 2/2",
        date: writeDate(2025, 2, 16),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 9,
        title: "Compliments to the chef",
        date: writeDate(2025, 2, 23),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 10,
        title: "Night shift",
        date: writeDate(2025, 3, 2),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 11,
        title: "Sneaking out",
        date: writeDate(2025, 3, 9),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 12,
        title: "Date Night",
        date: writeDate(2025, 3, 16),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 13,
        title: '"I look for traps!"',
        date: writeDate(2025, 3, 23),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 14,
        title: "Monster mash",
        date: writeDate(2025, 3, 30),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 15,
        title: "Dramatic entrance",
        date: writeDate(2025, 4, 6),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 16,
        title: "Pspspspsp",
        date: writeDate(2025, 4, 13),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: 17,
        title: "King's Quest 1/2",
        date: writeDate(2025, 4, 20),
        altText: "",
        imageFiles: 1,
        authorNotes: ``,
    },
    {
        pgNum: maxpg,
        title: "[WORK IN PROGRESS]",
        date: writeDate(2025, 4, 27),
        altText: "Coming soon!",
        imageFiles: 1,
        authorNotes: ``,
    },
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    /*.toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date;
    */

    let res = date.toLocaleString('en-US', { month: 'long'}) + " " + date.getDate().toString().padStart(2, "0") + ", " + date.getFullYear();
    return String(res).charAt(0).toUpperCase() + String(res).slice(1);
}
