import './Quiz.css';
import { useState , useEffect ,useContext} from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import QuizContext from 'web-app/Context/QuizContext';
import CountDownTimer from 'web-app/Component/CountDownTimer/CountDownTimer';
import { useAuth } from 'web-app/Context/login/AuthContext';
import { QUIT_Modal } from 'web-app/Component/Modal/Modal';

const Quiz =()=>{
    
   let {user , token} = useAuth();
   let navigator = useNavigate();
   let {quizlist,GetSingleQuizId,AddLeaderList,GetQuizResult,toastdispatch} = useContext(QuizContext)
   const {id} = useParams();
   //state
   const [activeStep,setactiveStep]=useState(0)
   const [Quiz_Set,setQuiz_Set]=useState([])
   const [booleanonsubmit,setbooleanonsubmit]=useState(false)
   const [Total,setTotal]=useState(0)
   const [showtimer,setshowtimer]=useState(false)
   const [isquit,setquit]=useState(false)


   useEffect(()=>{
        let list = quizlist.filter((item)=>item._id == id)    
        setQuiz_Set(list[0].Quiz_Set)
        setshowtimer(true)
   },[])
 
     const handleNext=()=>{
        setactiveStep(activeStep + 1)
     }
 
     const handleBack=()=>{
        setactiveStep(activeStep - 1)
     }
 
 
     const onInputChange = (e) => {
             const nexState = Quiz_Set.map(card => {
             if (card.queno !== e.target.name) return card;
                return {
                    ...card,
                    options: card.options.map(opt => {
                    const checked = opt.que_options === e.target.value;
                    return {
                        ...opt,
                        selected: checked
                    }
                    })
                }
             });
          setQuiz_Set(nexState)
          let count = 0;
          let notattempcount = 0;
                  nexState.map((item,key)=>{
                     item.options.map((anslist,key)=>{
                        if(anslist.selected === true){
                            if(anslist.que_options === item.ans){
                                count = count + 1;
                            }
                        }else{
                         notattempcount = notattempcount + 1
                        }
                     })
                   })

            setTotal(count)
     }
 
    const onsubmit = () =>{
          let list = Quiz_Set ;
          let count = 0;
          let notattempcount = 0;
                 list.map((item,key)=>{
                     item.options.map((anslist,key)=>{
                        if(anslist.selected === true){
                            if(anslist.que_options === item.ans){
                                count = count + 1;
                            }
                            notattempcount = notattempcount + 1
                        }
                     })
                   })

        if(notattempcount === Quiz_Set.length){
            toastdispatch({type:'SUCCESS',payload:"Quiz Submitted SuccessFull"})
            setbooleanonsubmit(true)
            setTotal(count)
            localStorage.removeItem("minutes")
            localStorage.removeItem("seconds")  
        }else{
            setbooleanonsubmit(false)
            setTotal(false)
            toastdispatch({type:'DANGER',payload:"Please attempt all questions"})
        }
     }

   const handleResult=()=>{
      let list = quizlist.filter((item)=>item._id == id) 
      let data ={
            userName : user.firstName || user.firstname,
            _id:id,
            score:Total,
            type: list[0].CategoryName,
            topic:list[0].CategoryType,
      }

      let result = {
           original : list[0].Quiz_Set,
           ans : Quiz_Set,
           score :Total,
           type: list[0].CategoryName,
           topic:list[0].CategoryType,
      }
       GetQuizResult(result)
       AddLeaderList(data)
       localStorage.removeItem("minutes")
       localStorage.removeItem("seconds")
       navigator(`/result/${id}`)
   } 
 
 return(
  <div className="Quiz_render_container">
     { booleanonsubmit || !showtimer ? 
             <>
                <div className="Quiz-DisplayResult"> 
                        <h3> The score is  {Total}  Out Of 8 </h3>
                        <button className='button' onClick={handleResult}> Check AnsList </button>
                </div>
             </> 
      :
      <div className="Quiz_container_display"> 
           {Quiz_Set.map((item,index)=>{
              if( Math.abs(activeStep - index)<=0)
              {
                 return (
                     <div>
                       <div className="Quiz_que">{item.que}</div>
                           <div className="Quiz_options"> Options are : </div>
                             {item.options.map((ans,index_ans)=>{
                                 index_ans = index_ans + 1
                                 return (
                                     <div key={index_ans} className="Quiz_multiple_options">
                                          <input
                                             key={index_ans}
                                             type="radio"
                                             name={item.queno}
                                             value={ans.que_options}
                                             checked={!!ans.selected}
                                             onChange={(e)=>onInputChange(e)}
                                         />
                                         {index_ans}] 
                                          {ans.que_options}
                                     </div>
                                     )
                             })}
                     </div>
                 )
              }else{
                  return null
              }
           })}
        <div className="Quiz-MobileStepper">
            <CountDownTimer timerdeadeline={()=>setshowtimer(false)}/>
                <div className='Quiz-Stepper-button'>
                    <button className='Quiz-button'  onClick={handleBack}  disabled={activeStep === 0}>
                        Back
                    </button>
                    
                    <button className='button' onClick={()=>setquit(!isquit)}>
                        QUIT
                    </button>

                    {activeStep === 7 ? 
                    <button className='Quiz-button'  onClick={onsubmit}>
                            Submit
                    </button>
                    :
                    <button className='Quiz-button'  onClick={handleNext}  disabled={activeStep === Quiz_Set.length}>
                            Next
                    </button>
                    }
              </div>
         </div>
      </div>
     }

     {
         isquit ? <QUIT_Modal  modalClose={()=>setquit(false)}/> : null
     }
     
   </div>
    )
   }
 
 
 export default Quiz;