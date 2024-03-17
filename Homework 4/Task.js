const {
    editMovie,
    addNewMovie,
    deleteMovie,
    getAllMovies,
    getOneMovie,
} = require("./zad2");
let movies;
(async ()=>{
    try {
        await addNewMovie({name:"Fight Club" ,year: 1999 ,rating:8.8,id:0});
        await addNewMovie({name:"The Godfather" ,year: 1972 ,rating:9.2,id:1});
        await addNewMovie({name:"Inception" ,year:2010 ,rating:8.8,id:2});
        await addNewMovie({name:"The Matrix" ,year: 1999 ,rating:8.7,id:3});
        movies = await getAllMovies();
        console.log(movies);
        const movie = await getOneMovie(3);
        console.log(movie);
        await deleteMovie(1);
        movies = await getAllMovies();
        console.log(movies);
        await editMovie(2,{name:"Shutter Island", year:2010});
        movies = await getAllMovies();
        console.log(movies);
    }
    catch (err){

        console.log("ERROR",err);
    }
    finally {

        console.log("code has finished executing");
    }


})();