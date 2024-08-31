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
import {useTranslation} from "react-i18next";
import i18n from "./i18n/i18n";
import {LANG_EN} from "./api/api";
import movie from "../src/assets/img/movie.png"


function App() {
  const {t} = useTranslation();
  const ru = localStorage.getItem("ru")
  const en = localStorage.getItem("en");
  function language(){
    if (ru) {
      return ru;
    }else if (en) {
      return en;
    }else{
      return LANG_EN
    }
  }


  function changeLng(lng){
    i18n.changeLanguage(lng);
  }

  console.log()
  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element={<div><h2>{t("Welcome")}</h2>

          {/*<div>*/}
          {/*  <button onClick={() => changeLng("en")}>EN</button>*/}
          {/*</div>*/}
          {/*  <div>*/}
          {/*    <button onClick={() => changeLng("ru")}>RU</button>*/}
          {/*  </div>*/}

          </div>
          }/>
          <Route path="/popular" element={<Popular language={language}/>}/>
          <Route path="/now-playing" element={<NowPlaying language={language}/>}/>

          <Route path="/top-rated" element={<TopRated language={language}/>}/>
          <Route path="/up-coming" element={<UpComing language={language}/>}/>
          <Route path="/details/:id" element={<Details language={language}/>}/>
          <Route path="/actors/:id" element={<Actors language={language}/>}/>
          <Route path="/person/:id" element={<Person language={language}/>}/>
          {/*<Route path="/home" element={<Home/>}/>*/}
        </Routes>
      </Layout>

    </>
  );
}

export default App;
