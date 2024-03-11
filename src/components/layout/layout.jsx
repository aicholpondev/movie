import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({children}){
    return(
       <>
           <Header/>
           <div className="min-h-[90vh]">
               {children}
           </div>
           <Footer/>

       </>
    )
}