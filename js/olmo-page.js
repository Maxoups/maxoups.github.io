
findAndWriteCorrectPage();


function findAndWriteCorrectPage(){ 
    let i=1;
    let LAST = 5;
    for (i = 1; i < LAST; i++) {
        let writeNavDiv = document.querySelectorAll(".olmo-page" + i);
        writeNavDiv.forEach(function(element) {
            element.innerHTML = `${writePage(i)}`;})
    }


    // document.querySelector(div).innerHTML = `<div class="olmo-page1">${writePage(1)}</div>`;
    // document.querySelector(div).innerHTML = `<div class="olmo-page2">${writePage(2)}</div>`;
}

function writePage(nbPage){
    switch(nbPage){
        case 1:
            return pageContents(
                "Again. This website has some secrets. Secrets are not meant to be uncovered. You were not supposed to come here. You should go back now.",
                "index.html.html", 
                "Well hi."
            );
        case 2:
            return pageContents(
                "Well you're awfully persistent. I told you to leave.",
                "index.html", 
                "Well hi. Again."
            );
        case 3:
            return pageContents(
                "You have everything you need, now get out.",
                "index.html", 
                "Stop."
            );
    }
}

function pageContents(text, link, title){
    return `<div class="main">
	<div class="container">
		<div style="height:50px"></div>

		<div class="z-text" style="margin-bottom: 20px;">
			<h3 style="margin-top: 125px;">`+ title +`</h3>
			<p>
				`+ text +`
			</p>
			<a class="link-n" style="text-align:center;margin-top:5px; padding-bottom: 45px;" href = "`+ link +`" rel="noopener noreferrer">Go back</a>
		</div>

		<hr class="h-line" style="margin-top: 200px;"/>
		<div style="height:20px;">
			<img class="img-olmo" src="images/olmo-6.png" title="That's the mayor..." style="margin-top: -185px; margin-left: -110px; rotate: 0deg; transform: scale(2.0);">
			<img class="img-olmo" src="images/olmo-cerez.png" title="You... you're not supposed to be here." style="margin-top: -290px; margin-left: 60px; rotate: 0deg;">
			<img class="img-olmo" src="images/olmo-building.png" title="That's just Castano's place." style="margin-top: -463px; margin-left: 65%; rotate: 0deg; transform: scale(2.5);">
		</div>

		<div class="bubbles">
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
			<div class="bubble"></div>
		</div>`;
}