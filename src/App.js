import Layout from "./components/layout/layout";
import {Route, Routes} from "react-router";
import Home from "./pages/Home/home";
import Popular from "./pages/popular/popular";
import TopRated from "./pages/topRated/topRated";
import UpComing from "./pages/upComing/upComing";
import Details from "./pages/details/details";
import Actors from "./pages/actors/actors";
import Person from "./pages/person/person";
import Now_playing from "./pages/now_paying/now_playing";
import NowPlaying from "./pages/now_paying/now_playing";

function App() {
  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/now-playing" element={<NowPlaying/>}/>

          <Route path="/top-rated" element={<TopRated/>}/>
          <Route path="/up-coming" element={<UpComing/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/actors/:id" element={<Actors/>}/>
          <Route path="/person/:id" element={<Person/>}/>
        </Routes>
      </Layout>

    </>
  );
}

export default App;
