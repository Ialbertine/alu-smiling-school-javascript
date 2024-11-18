$(document).ready(function () {
  $(".loader").css("display", "none");

  //comments
  $("#carouselExampleControls").click(function (event) {
    console.log("Helloooooooo"); // see if id works
    event.preventDefault();

    $(".loader").css("display", "block");

    //fetching quotes

    $.getJSON("https://smileschool-api.alx-tools.com/quotes", function (data) {
      $(".loader").css("display", "none");
      $("#quote .card-text").html("&raquo; " + data[0].text);
      $("#quotes .font-weight-bold").text(data[0].author);
      $("#quotes .font-italic").text(data[0].job);
    }).fail(function (jqXHR, textStatus, errorThrown) {
      console.log("error:", textStatus, errorThrown);
      $(".loader").css("display", "none");
    });
    
  });

  //for homepage

  function renderCards(data) {
        var innerSlides = $("#popularContainer");
        innerSlides.empty(); // Clear existing content
        
        var itemsPerSlide = 4; // Number of cards per slide
        var numSlides = Math.ceil(data.length / itemsPerSlide); // Calculate total number of slides
        
        for (var i = 0; i < numSlides; i++) {
            var item = $("<div>").addClass("carousel-item");
            if (i === 0) {
                item.addClass("active");
            }

            var container = $("<div>").addClass("container pt-5 pb-5");
            var row = $("<div>").addClass("row row-cols-1 row-cols-md-2 row-cols-lg-4");

            for (var j = i * itemsPerSlide; j < Math.min((i + 1) * itemsPerSlide, data.length); j++) {
                var tutorial = data[j];
                var col = $("<div>").addClass("col mb-4");
                var card = $("<div>").addClass("card border-0");
                var img = $("<img>").addClass("card-img-top").attr("src", tutorial.thumb_url);
                var cardBody = $("<div>").addClass("card-body");
                var title = $("<h5>").addClass("card-title font-weight-bold").text(tutorial.title);
                var description = $("<p>").addClass("card-text").text(tutorial['sub-title']);
                var authorName = $("<a>").addClass("mb-0 pl-2 color-primary font-weight-bold").text(tutorial.author);
                var authorImage = $("<img>").attr("src", tutorial.author_pic_url).attr("alt", "profile").attr("width", "30px").addClass("rounded-circle ml-3");
                var rating = $("<p>").addClass("mb-0");
                for (var k = 0; k < tutorial.star; k++) {
                    rating.append($("<img>").attr("src", "/images/star_on.png").attr("alt", "star on").attr("width", "20px"));
                }
                for (var k = tutorial.star; k < 5; k++) {
                    rating.append($("<img>").attr("src", "/images/star_off.png").attr("alt", "star off").attr("width", "20px"));
                }
                var duration = $("<p>").addClass("mb-0 color-primary").text(tutorial.duration);

                // Append elements to card
                cardBody.append(title, description, authorName, authorImage, rating, duration);
                card.append(img, cardBody);
                col.append(card);
                row.append(col);
            }

            // Append elements to container
            container.append(row);
            item.append(container);
            innerSlides.append(item);
        }
    }

    // Function to fetch data and render cards on carousel click
    $("#carouselControls").click(function (event) {
        event.preventDefault();
        console.log("popular slider clicked and working"); 
        $(".loader").css("display", "block");

        $.getJSON("https://smileschool-api.alx-tools.com/popular-tutorials", function (data) {
            $(".loader").css("display", "none");
            renderCards(data); // Render multiple cards per slide
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log("error:", textStatus, errorThrown);
            $(".loader").css("display", "none");
        });
    });

    //for pricing here

    function renderCards(data) {
      var innerSlides = $("#latestContainer");
      innerSlides.empty(); // Clear existing content
      
      var itemsPerSlide = 4; // Number of cards per slide
      var numSlides = Math.ceil(data.length / itemsPerSlide); // Calculate total number of slides
      
      for (var i = 0; i < numSlides; i++) {
          var item = $("<div>").addClass("carousel-item");
          if (i === 0) {
              item.addClass("active");
          }

          var container = $("<div>").addClass("container pt-5 pb-5");
          var row = $("<div>").addClass("row row-cols-1 row-cols-md-2 row-cols-lg-4");

          for (var j = i * itemsPerSlide; j < Math.min((i + 1) * itemsPerSlide, data.length); j++) {
              var tutorial = data[j];
              var col = $("<div>").addClass("col mb-4");
              var card = $("<div>").addClass("card border-0");
              var img = $("<img>").addClass("card-img-top").attr("src", tutorial.thumb_url);
              var cardBody = $("<div>").addClass("card-body");
              var title = $("<h5>").addClass("card-title font-weight-bold").text(tutorial.title);
              var description = $("<p>").addClass("card-text").text(tutorial['sub-title']);
              var authorName = $("<a>").addClass("mb-0 pl-2 color-primary font-weight-bold").text(tutorial.author);
              var authorImage = $("<img>").attr("src", tutorial.author_pic_url).attr("alt", "profile").attr("width", "30px").addClass("rounded-circle ml-3");
              var rating = $("<p>").addClass("mb-0");
              for (var k = 0; k < tutorial.star; k++) {
                  rating.append($("<img>").attr("src", "/images/star_on.png").attr("alt", "star on").attr("width", "20px"));
              }
              for (var k = tutorial.star; k < 5; k++) {
                  rating.append($("<img>").attr("src", "/images/star_off.png").attr("alt", "star off").attr("width", "20px"));
              }
              var duration = $("<p>").addClass("mb-0 color-primary").text(tutorial.duration);

              // Append elements to card
              cardBody.append(title, description, authorName, authorImage, rating, duration);
              card.append(img, cardBody);
              col.append(card);
              row.append(col);
          }

          // Append elements to container
          container.append(row);
          item.append(container);
          innerSlides.append(item);
      }
  }

  // Function to fetch data and render cards on carousel click
  $(".slidersL").click(function (event) {
      event.preventDefault();
      console.log("latest slider clicked and working"); 
      $(".loader").css("display", "block");

      $.getJSON("https://smileschool-api.alx-tools.com/popular-tutorials", function (data) {
          $(".loader").css("display", "none");
          renderCards(data); // Render multiple cards per slide
      }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log("error:", textStatus, errorThrown);
          $(".loader").css("display", "none");
      });
  });



  //for courses here
  
  console.log("ready!"); // to check load
});
