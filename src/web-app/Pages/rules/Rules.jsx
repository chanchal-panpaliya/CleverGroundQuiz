import './Rules.css';
import { useContext ,useEffect , useState} from "react"
import QuizContext from "web-app/Context/QuizContext"
import Header from "web-app/Component/Header/Header"
import Footer from "web-app/Component/Footer/Footer"
import { useTheme } from "../../Context/theme-context";
import { Link } from 'react-router-dom';

const Rules =()=>{
  let {singleQuiz_Id,GetSingleQuizId} = useContext(QuizContext)
  const { darkTheme } = useTheme();
  singleQuiz_Id = localStorage.getItem("SELECTED_QUIZ_DATA_ID")
  return(
      <div>
        <Header layout={""} sidebarOpen={""}/>
          <section className="page-section home-section typography-align-center padding-top-10rem" style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}}>
            <div style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}} className={darkTheme?"auth-container-darkmood card-body-padding card-body" : "card-body card-body-padding auth-container"}> 
              <div className="flex-col"> 
                <div class="top-right-vertical-shape" style={{borderColor:darkTheme?"rgba(255,255,255,0) white rgba(255,255,255,0) rgba(255,255,255,0)":" "}}> 
                    <div class="top-right-vertical-shape-text">  
                </div></div>
                <div class="top-right-horizontal-shape"> 
                    <div class="top-right-horizontal-shape-text">  
                </div></div>
                <div className="card-header typography-padding-top-right"> 
                  <div className="icon-secondary-background-color border-radius-round">
                      <i class="fa-solid fa-triangle-exclamation card-icon-size"> </i>
                  </div>  
                </div>
                <div className="typography-h4 typography-padding-top-right typography-fontweight-bold"> 
                          Instructions
                </div>
                <div className="typography-p-small typography-padding-top-right"> 
                        <ul className='flex-col row-gap-1rem' >
                            <li> <i class="fa-solid fa-chevron-right"></i> Each question has 4/3/2 options, select the one correct answer. </li>
                            <li> <i class="fa-solid fa-chevron-right"></i> For one correct answer, you get <b>1 points</b>. </li>
                            <li> <i class="fa-solid fa-chevron-right"></i> No negative marking for incorrect answers. </li>
                            <li> <i class="fa-solid fa-chevron-right"></i> You have <b>5 mins</b> to solve <b>8 qestions</b>. </li>
                            <li> <i class="fa-solid fa-chevron-right"></i> All questions are compulsory. </li>
                            <li> Let's begin!! </li>
                        </ul>
                    </div>
                    <div className='flex-row flex-justify-content-center flex-align-item-center typography-padding-top-right-bottom-left'>
                      <Link to={`/quiz/${singleQuiz_Id}`}>
                        <button className='button button-secondary button-outline-tertiary button-onhover-fillbackground-danger' onClick={()=>GetSingleQuizId(singleQuiz_Id)}> start </button>
                      </Link>
                    </div>
                    </div>
                  </div>                                  
          </section>
        <Footer/>
      </div>
  )
}

export default Rules