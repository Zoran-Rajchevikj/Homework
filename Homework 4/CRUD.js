const {
    read,
    write
}= require("./zad1");

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
    let movies = await read();//let students = await read();
    movies.push(newCarData);//  students.push(newStudentData);
    await write(movies);// await write(students);
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