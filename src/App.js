import { Route } from "react-router-dom";
import DefaultHOC from "./HOC/default_hoc";

//component
import Temp from "./Components/Temp";
function App() {
  return (
    
  
      <Route>
    <DefaultHOC path ="/" exact component={Temp}/>
    </Route>
   
  );
}

export default App;
