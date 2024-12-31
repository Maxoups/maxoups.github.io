//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="./img/logo.png" alt="" /></a> 

        <div id="nav" style="display: flex;flex-wrap: wrap;gap: 3%; justify-content: center;">
            <a href="index.html">HOME</a> |
            <a href="archive.html">ARCHIVE</a> |
            <a href="about.html">ABOUT</a> | 
            <a href="../index.html">MY-WEBSITE</a>
        </div>
    </header>
`;

//<a href="characters.html">SYNOPSIS</a> | 