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
