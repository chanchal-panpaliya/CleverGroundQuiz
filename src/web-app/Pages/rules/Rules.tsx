import './Rules.css';
import { useContext ,useEffect , useState} from "react"
import QuizContext from "../../Context/QuizContext"
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import { useTheme } from "../../Context/theme-context";
import { Link } from 'react-router-dom';
import { ShareModal } from "../../Component/Modal/Modal";

const Rules =()=>{
  let {singleQuizId,GetSingleQuizId} = useContext(QuizContext)
  const { darkTheme } = useTheme();
  const [showmodal,set_showmodal]=useState(false);
  singleQuizId = localStorage.getItem("SELECTED_QUIZ_DATA_ID")
  return(
      <div>
        <Header layout={""} sidebarOpen={""}/>
          <section className="page-section home-section typography-align-center padding-top-10rem" style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}}>
            <div style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}} className={darkTheme?"auth-container-darkmood card-body-padding card-body" : "card-body card-body-padding auth-container"}> 
              <div className="flex-col"> 
                <div className="top-right-vertical-shape" style={{borderColor:darkTheme?"rgba(255,255,255,0) white rgba(255,255,255,0) rgba(255,255,255,0)":" "}}> 
                    <div className="top-right-vertical-shape-text">  
                </div></div>
                <div className="top-right-horizontal-shape"> 
                    <div className="top-right-horizontal-shape-text">  
                </div></div>
                <div className="card-header typography-padding-top-right"> 
                  <div className="icon-secondary-background-color border-radius-round">
                      <i className="fa-solid fa-triangle-exclamation card-icon-size"> </i>
                  </div>  
                </div>
                <label className="typography-h4 typography-padding-top-right typography-fontweight-bold"> 
                              Instructions
                </label>
                <div className="typography-p-small typography-padding-top-right"> 
                        <ul className='flex-col row-gap-1rem' >
                            <li> <i className="fa-solid fa-chevron-right"></i> Each question has 4/3/2 options, select the one correct answer. </li>
                            <li> <i className="fa-solid fa-chevron-right"></i> For one correct answer, you get <b>1 points</b>. </li>
                            <li> <i className="fa-solid fa-chevron-right"></i> No negative marking for incorrect answers. </li>
                            <li> <i className="fa-solid fa-chevron-right"></i> You have <b>5 mins</b> to solve <b>8 qestions</b>. </li>
                            <li> <i className="fa-solid fa-chevron-right"></i> All questions are compulsory. </li>
                            <li className='quiz-card-share'> 
                               <label> Let's begin!! </label> 
                               <i className="fa-solid fa-share" onClick={()=>{set_showmodal(!showmodal)}}></i>
                            </li>
                        </ul>
                    </div> 
                    <div className='flex-row flex-justify-content-center flex-align-item-center typography-padding-top-right-bottom-left'>
                      <Link to={`/quiz/${singleQuizId}`}>
                        <button className='button button-secondary button-outline-tertiary button-onhover-fillbackground-danger' onClick={()=>GetSingleQuizId(singleQuizId)}> start </button>
                      </Link>
                    </div>
                    </div>
                  </div>                                  
          </section>
          {showmodal? <ShareModal data={""} modalClose={()=>set_showmodal(false)} /> : null} 
        <Footer/>
      </div>
  )
}

export default Rules