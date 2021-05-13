import {Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadPhotos} from "../redux/actions";
import Photos from "./Photos";
import Data from "./Data";
import Footer from "./Footer";


function App() {
const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadPhotos())
  }, [])


  return (
      <Route path="/:id?">
    <div className="container">
      <Photos/>
      <Data/>
      <Footer/>
    </div>
      </Route>
  );
}

export default App;
