import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header";
import Popular from "./components/pages/Popular";
import TopRated from "./components/pages/TopRated";
import FilmPage from "./components/pages/FilmPage";
import Latest from "./components/pages/Latest";
import Actors from "./components/pages/Actors";
import ActorPage from "./components/pages/ActorPage";
import {useState} from "react";






function App() {
    const [mode,setMode] = useState(JSON.parse(localStorage.getItem("mode"))||false)

    const handleMode = ()=>{
        setMode(mode)
        localStorage.setItem("mode",JSON.stringify(!mode))
    }
    return (
        <div className="App" style={{
            background:mode? "darkgray":"white"
        }}>
            <Header/>
            <button className="m-3 btn btn-primary"
            onClick={handleMode}
            >{mode ? "light mode":"dark mode"}</button>
            <Routes>

                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/top-rated"} element={<TopRated/>}/>
                <Route path={"/latest"} element={<Latest/>}/>
                <Route path={"/movies/:movieId"} element={<FilmPage/>}/>
                <Route path={"/movies/actor-details/:actorId"} element={<ActorPage/>}/>

            </Routes>


        </div>
    );
}

export default App;
