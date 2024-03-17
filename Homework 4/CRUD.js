const {
    read,
    write
}= require("./ReadWrite");

const getAllMovies = async ()=>{
   return  await read();
}
const getOneMovie = async (id)=>{
    let movies = await read();
    return  movies.find((movie)=> movie.id===id);

}
const deleteMovie = async (id)=>{
    let movies = await read();
    movies = movies.filter((movie)=> movie.id!==id);
    await write(movies);
}

const addNewMovie = async (newCarData)=>{
    let movies = await read();
    movies.push(newCarData);
    await write(movies);
}
const editMovie = async (id , editCarData) =>{
    let movies = await read();
    movies = movies.map(movie=>{
        if (movie.id ===id){
           return{
               ...movie,
               ...editCarData
           };
        }
        return movie;
    }) ;
    await write(movies);
}


module.exports = {
    editMovie,
    addNewMovie,
    deleteMovie,
    getAllMovies,
    getOneMovie,
}
