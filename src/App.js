import { Route } from "react-router-dom";
import DefaultHOC from "./HOC/default_hoc";

//Pages
import HomePage from "./Pages/Home_page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    
  
    <Route>
    <DefaultHOC path ="/" exact component={HomePage}/>
    </Route>
   
  );
}

export default App;
