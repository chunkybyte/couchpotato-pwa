var App = (function() {
    return {
        populateList: function() {
            // Populates the DOM with the API data from http://demo3657198.mockable.io/getMovieList
            var mainDiv = $('#movie-list');

            $.ajax({
                type: "GET",
                url: "https://demo3657198.mockable.io/getMovieList",
                dataType: "json",
                success: function(data) {
                    console.log('Data Retreival Success');
                },
                failure: function() {
                    alert("There is some problem fetching the data");
                }
            }).then(function(data) {
                $.each(data.seenmovielist, function(key, movieItem){
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
        },

        installSW: function() {
            if('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                    navigator.serviceWorker.register('./service-worker.js')
                        .then(function (registration) {
                            // Successfull Registration of the SW
                            console.log("Service Worker Registered Successfully. Scope : ", registration.scope);
                        }, function(err) {
                            // Failed to Register SW
                            console.log("Service Worker Failer to Registered : ", err);
                        });
                });
            }
        },

        init: function() {
            this.installSW();
            this.populateList();
            // this.firebaseInit();
        }
    }
})();

App.init();
FirebaseOperations.init();