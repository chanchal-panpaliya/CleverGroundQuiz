import Footer from 'web-app/Component/Footer/Footer';
import './Leaderboard.css';
import Header from 'web-app/Component/Header/Header';
import { useTheme } from "../../Context/theme-context";
import QuizContext from 'web-app/Context/QuizContext';
import { useContext ,useEffect ,useState} from 'react';



const Leaderboard=()=>{
    const { darkTheme } = useTheme();
    let {leaderlist} = useContext(QuizContext);
    const [data,setdata] = useState([])

    useEffect(()=>{
       let sort =  leaderlist.sort((a,b)=>{
           return b.score - a.score
       })
       setdata(sort)
    },[])
    
   return(
        <div>
        <Header/>
        <section className="home-section leader-board-height" style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}}>
            <div className='padding-top-5rem'>
                <h3> Leaderboard Top 3 </h3>
             </div>
              <div className="leaderboard-grid">           
             {
                 leaderlist.map((item,index)=>{
                     return(
                        <div  key={index} style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}}
                        className={darkTheme?"auth-container-darkmood" : "card-list auth-container"}> 
                            <div class="top-left-horizontal-shape" style={{borderColor:darkTheme?"rgba(255,255,255,0) white rgba(255,255,255,0) rgba(255,255,255,0)":" "}}> 
                                <div class="bottom-shape-text"> </div> 
                            </div>
                            <div class="top-left-vertical-shape"> 
                                    <div class="top-shape-text"> </div>  
                            </div>
                            <div className="flex-col"> 
                                    <div className="card-header typography-padding-top-right"> 
                                         
                                    </div>
                                    <div className="typography-h4 typography-padding-top-right typography-fontweight-bold"> 
                                            {item.userName} 
                                    </div>
                                    <div className="typography-h4 typography-padding-top-right"> 
                                            Score : {item.score}
                                    </div>
                                    <div className="typography-h4 typography-padding-top-right"> 
                                            Concept : {item.topic}
                                    </div>
                                    <div className="typography-h4 typography-padding-top-right"> 
                                            Category : {item.type}
                                    </div>
                            </div>
                        </div>                                                                                                                                           
                     )
                 }).slice(0, 3)
             }
             </div>
        </section>
        <Footer/>
       </div>
   )
}

export default Leaderboard