var folder = "img/";
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif|JPG)$/) ) { 
                let mynd = `
                <div class="col col-3 col-md-5 col-sm-10 offset-col-md-1 offset-col-sm-1">
                    <section class="flower">
                    <a href="${folder + val}" data-lightbox="mygallery" data-title="blóm">
                        <div class="image"><img src="${folder + val}" alt=""></div
                        ></a>
                    </section>
                </div>
                `
                $(galleri).append(mynd);
                console.log("success");
            } 
        });
    }
});
