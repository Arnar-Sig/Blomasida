
var folder = "img/";
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                let mynd = `
                <div class="col col-3 col-md-5 col-sm-10 offset-col-md-1 offset-col-sm-1">
                    <section class="flower">
                    <a href="img/flower1.jpg" data-lightbox="mygallery" data-title="blóm 1">
                        <div class="image"><img src="img/flower1.jpg" alt=""></div
                        ></a>
                    </section>
                </div>
                `
                $("section div div div").append( "<img src='"+ folder + val +"'>" );
                console.log("success");
            } 
        });
    }
});


/*
              <div class="col col-3 col-md-5 col-sm-10 offset-col-md-1 offset-col-sm-1">
                <section class="flower">
                  <a href="img/flower1.jpg" data-lightbox="mygallery" data-title="blóm 1">
                    <div class="image"><img src="img/flower1.jpg" alt=""></div
                      ></a>
                </section>
              </div>
              */