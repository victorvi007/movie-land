import {useState,useEffect} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import searchSvg from './search.svg';
// f86f8a1c
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f86f8a1c'
const App = () =>{

    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(' ');
    
const searchMovies = async (title)=>{
        const response = fetch(`${API_URL}&s=${title}`);
        const  data = await (await response).json();
        setMovies(data.Search);
}
    useEffect(()=>{
        searchMovies('');
    },[])
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input type="search" placeholder="Search for movies" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                <img src={searchSvg} alt="search" onClick={()=> searchMovies(searchTerm)}/>
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                    {
                        movies.map((movie)=>
                        // console.log(movie)
                            <MovieCard movie={movie}/>
                            
                        )
                    }
                   
                </div>
                ) : (
                    <div className="empty">
                      <h2>No Movies Found</h2>
                        </div>
                )
            }
           

        
            </div>
    );
}

export default App;