//react
import { Link } from "react-router-dom";
import { useContext } from "react";
//css
import '../../../index.css';
import './home.css';
//component
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
//context
import { useTheme } from "../../Context/theme-context";
import QuizContext from "web-app/Context/QuizContext";
import { useEffect } from "react";
import { useAuth } from 'web-app/Context/login/AuthContext';


const Home = () =>{
const { darkTheme } = useTheme();
let {token} = useAuth()
let {quizlist,getCategoryType} = useContext(QuizContext)

let unique_list = quizlist.length>0 && [...new Set(quizlist.map(q => q.CategoryName))];

const randomColor =()=>{
   let letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
  }

return(
   <div>
      <Header layout={""} sidebarOpen={""}/>
       <div className="home-container"> 
            <header className="position-absolute home-header-container"> 
               <div> </div>
            </header>
            <section className="home-section typography-align-center" style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}}>
               <div className="letterspace-Small typography-h4 typography-padding-top-right-bottom-left"> We know Victoria's secret </div>
               <div className="typography-h1 typography-fontweight-black heading-title"> CleverGround Quiz </div>
               <p className="typography-p-small typography-padding-top-right">Unlocking knowledge at the speed of thought.</p>
                <small className="typology-padding-top"> Choose one option from the below list and go forward.</small>
                <ul className="quiz-option">
                   {
                      unique_list.length>0 ?
                      unique_list.map((item,index)=>{
                         return( 
                           token?
                            <Link to={"/quizlist"} onClick={()=>getCategoryType(item)}>
                                  <li className="badge" key={index} style={{backgroundColor:randomColor()}}> {item} </li>
                            </Link>
                            :
                            <Link to={"/login"}>
                                  <li className="badge" key={index} style={{backgroundColor:randomColor()}}> {item} </li>
                            </Link>
                         )
                      })
                      :
                      <div> no quiz found </div>
                   }
                </ul>
            </section> 
            <Footer/> 
      </div>
   </div>
  )
}

export default Home;