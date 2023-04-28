import { Route } from "react-router-dom";
import DefaultHOC from "./HOC/default_hoc";
import MovieHOC from "./HOC/movie.hoc";
//Pages
import HomePage from "./Pages/Home_page";
import MoviePage from "./Pages/movie_page";
import Plays from "./Pages/Plays_page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios
import axios from "axios";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    
  
    <Route>
    <DefaultHOC path ="/" exact component={HomePage}/>
    <MovieHOC path ="/movie/:id" exact component={MoviePage}/>
    <MovieHOC path ="/plays/:id" exact component={Plays}/>
    </Route>
   
  );
}

export default App;
