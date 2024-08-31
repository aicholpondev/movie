import Header from "../header/header";
import Footer from "../footer/footer";
import {useContext} from "react";
import {ThemeContext} from "../../darkMode/darkMode";

export default function Layout({children}){
    const {theme} = useContext(ThemeContext);

    return(
       <div className={`bg-[${theme === "light" ? "white" : "black"}] transition-[.5s] text,title-[${theme === "light" ? "black" : "white"}]`}>
           <Header/>
           <div className="min-h-[90vh]">
               {children}
           </div>
           <Footer/>

       </div>
    )
}

