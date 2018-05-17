// Populate the index.html with data from http://demo3657198.mockable.io/getMovieList

var PopulateList = (function() {
    return {
        init: function() {
            var mainDiv = $('#movie-list');

            $.ajax({
                type: "GET",
                url: "http://demo3657198.mockable.io/getMovieList",
                dataType: "json",
                success: function(data) {
                    console.log('Data Retreival Success', data);
                },
                failure: function() {
                    alert("There is some problem fetching the data");
                }
            }).then(function(data) {
                $.each(data.seenmovielist, function(key, movieItem){
                    console.log(key, " : ", movieItem);

                    movieItemDiv = document.createElement("div");
                    movieTitle = document.createElement("div");
                    movieRating = document.createElement("div");

                    movieItemDiv.classList.add('movie-item');

                    movieTitle.innerHTML = movieItem.title;
                    movieRating.innerHTML = "Rating : " + movieItem.rating + "/10";

                    movieItemDiv.append(movieTitle, movieRating);
                    mainDiv.append(movieItemDiv);
                });
            })
        }
    }
})();

PopulateList.init();