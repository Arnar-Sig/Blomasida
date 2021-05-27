//Loads all images after page load
let folder = "img/";
let imagesArray = []; 
/*
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif|JPG)$/) ) { 
            } 
        });
    }
});
*/

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif|JPG)$/) ) { 
                imagesArray.push(folder+val);
                let mynd = `
                <div class="col col-3">
                    <section class="flower">
                        <a href="${folder + val}" data-lightbox="mygallery" data-title="blóm">
                            <div class="image"><img src="${folder + val}" id="${folder + val}" alt="">
                            <span class="tooltiptext">Tooltip text.</span>
                            </div>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque incidunt 
                        blanditiis accusantium qui recusandae nulla cumque temporibus dolores provident 
                        impedit exercitationem voluptatem numquam, delectus illum, at corporis dignissimos natus.</p>
                    </section>
                </div>
                `
                $(galleri).append(mynd);

                /*
                let tempMynd = document.getElementById(folder+val);
                let comment = getExif(tempMynd);
                console.log(tempMynd);
                console.log(comment);
                */
            } 
        });
    }
});

/*
//Get EXIF-data
"use strict";
function getExif(picture) {
    EXIF.getData(picture, function(){
        let imgComment = EXIF.getTag(this, "Make");
        console.log("exif.gettag: " + imgComment);


        let test = JSON.stringify(imgComment);
        console.log("stringify prufa: " + test);
    });
}
*/


/* let xhr = new XMLHttpRequest();
xhr.open('GET', 'img/', true);
request.responseType = 'blob';
xhr.onload = function(){
    console.log('loaded!');
}
xhr.send();

 */

/* $.get('./', function(myndirJSON){
    let listiAfMyndum = JSON.parse(myndirJSON);
    console.log(listiAfMyndum);
});
 */
console.log(imagesArray);