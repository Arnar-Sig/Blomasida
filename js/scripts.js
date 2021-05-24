//Loads all images after page load
var folder = "img/";
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif|JPG)$/) ) { 
                let mynd = `
                <div class="col col-3">
                    <section class="flower">
                        <a href="${folder + val}" data-lightbox="mygallery" data-title="blóm">
                            <div class="image"><img src="${folder + val}" alt="">
                            <span class="tooltiptext">Tooltip text</span>
                            
                            </div>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque incidunt 
                        blanditiis accusantium qui recusandae nulla cumque temporibus dolores provident 
                        impedit exercitationem voluptatem numquam, delectus illum, at corporis dignissimos natus.</p>
                    </section>
                </div>
                `
                $(galleri).append(mynd);
                console.log("success");
            } 
        });
    }
});

