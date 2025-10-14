let trendingSection = document.querySelector(".trending section");
let trendingMoviesDayBtn=document.querySelector("#trendingMoviesDay")
let trendingMoviesWeekBtn=document.querySelector("#trendingMoviesWeek")
let popularMoviesBtn=document.querySelector("#popularMovies")
let popularTvshowsBtn=document.querySelector("#popularTvshows")
let topRatedMoviesBtn=document.querySelector("#topRatedMovies")
let topRatedTvshowsBtn=document.querySelector("#topRatedTvshows")

let options = {
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDI4OGM5YmU1YjA5NjU0MjQ3M2M3NGFiYTI4NzkzZCIsIm5iZiI6MTc2MDMzNTkzMi41NjQ5OTk4LCJzdWIiOiI2OGVjOTgzYzI2YmI3ZTAyZmUwZDc5ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LgQNxOSqyy5pJRbv-kJUhJw_uvQyrg12mNjJBw1YW7U",
    },
};

const apiEndPoint = {
    trendingMovieByDay: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
     trendingMovieByWeek:"https://api.themoviedb.org/3/trending/all/week?language=en-US",
    popularMovies: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    popularTvShow:"https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    topRatedMovies: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    topRatedTvShow:"https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
};
let imageBaseUrl = "https://image.tmdb.org/t/p/w500";

async function fetchData(url,section) {
    let response = await fetch(url, options);
    let result = await response.json();

    section.innerHTML=""
    displayData(result.results,section);
}

function displayData(arr,section) {
    arr.forEach(e => {
        let div=document.createElement("div")
        div.classList.add("main")
        let title=document.createElement("h3")
        title.textContent=e.title||e.name
        // let title = e.title;
        // console.log(title);       
        let img=document.createElement("img")
        img.classList.add("image")
        let image=imageBaseUrl + e.poster_path
        img.src=image
         div.append(title,img)
        section.append(div)
            
    });
}

trendingMoviesDayBtn.addEventListener("click", ()=>{
fetchData(apiEndPoint.trendingMovieByDay,trendingSection);
})
trendingMoviesWeekBtn.addEventListener("click", ()=>{
fetchData(apiEndPoint.trendingMovieByWeek,trendingSection);
})

popularMoviesBtn.addEventListener("click",()=>{
    fetchData(apiEndPoint.popularMovies,trendingSection);
})

popularTvshowsBtn.addEventListener("click",()=>{
    fetchData(apiEndPoint.popularTvShow,trendingSection);
})

topRatedMoviesBtn.addEventListener("click",()=>{
    fetchData(apiEndPoint.topRatedMovies,trendingSection);
})
topRatedTvshowsBtn.addEventListener("clic",()=>{
     fetchData(apiEndPoint.topRatedMovies,trendingSection);
})