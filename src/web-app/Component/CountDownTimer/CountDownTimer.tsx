import { useState , useEffect , useContext} from "react";
import QuizContext from "../../Context/QuizContext";


const CountDownTimer=(props:any)=>{
  let {toastdispatch} = useContext(QuizContext)

  const min:any=
  localStorage.getItem("minutes") == null || localStorage.getItem("minutes") == "undefined"
    ? 5
    : JSON.parse(localStorage.getItem("minutes") || '{}' );

    const sec:any=
    localStorage.getItem("seconds") == null || localStorage.getItem("seconds") == "undefined"
      ? 0
      : JSON.parse(localStorage.getItem("seconds")|| '{}' );

  
  const [seconds, setSeconds] = useState(sec)
  const [minutes, setMinutes] = useState(min)   
   


  const updateTime=()=>{
    if (minutes == 0 && seconds == 0) {
      props.timerdeadeline(false);
      setSeconds(0);
      setMinutes(0);
      toastdispatch({type:'INFO',payload:"Time-up , Quiz Submitted"})
    }
    else {
      if (seconds == 0) {
        setMinutes((minutes:any) => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds((seconds:any) => seconds - 1);
      }
    }
  }



  useEffect(() => {
    const token = setTimeout(()=>{
         updateTime()
         localStorage.setItem("seconds",seconds)
         localStorage.setItem("minutes",minutes)
    }, 1000)
      return ()=>{ clearTimeout(token);}

  },[seconds,minutes])


  return (<p>
    <i className="fa-solid fa-clock --primary-color"></i> <b>{minutes}:{seconds}</b>
  </p>);
}

export default CountDownTimer;