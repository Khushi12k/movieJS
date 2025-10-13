let trendingSection = document.querySelector(".trending section");
let popularSection = document.querySelector("popular section");
let topRatedSection = document.querySelector("topRated section");

let options = {
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDI4OGM5YmU1YjA5NjU0MjQ3M2M3NGFiYTI4NzkzZCIsIm5iZiI6MTc2MDMzNTkzMi41NjQ5OTk4LCJzdWIiOiI2OGVjOTgzYzI2YmI3ZTAyZmUwZDc5ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LgQNxOSqyy5pJRbv-kJUhJw_uvQyrg12mNjJBw1YW7U",
    },
};

const apiEndPoint = {
    trendingMovieByDay: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    popularMoviesByDay: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    topRatedMovies: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
};


let imagebaseUrl = "https://image.tmdb.org/t/p/w500" 

async function fetchData(url, options) {
    // let finalData = [];

    for (let x in url) {
        let endpoint = url[x]
        let response = await fetch(endpoint, options);
        let result = await response.json();
        // finalData.push(result);

        for (let i = 0; i < result.results.length; i++) {
          let heading = document.createElement("h3")
          let img = document.createElement("img")
          let posterImage = imagebaseUrl + result.results[i].poster_path
          img.src = posterImage;
          heading.innerHTML = result.results[i].title
          trendingSection.append(heading,img)
        }
    }

    console.log(finalData);

}

fetchData(apiEndPoint, options)
