import { useState , useEffect , useContext} from "react";
import QuizContext from "web-app/Context/QuizContext";


const CountDownTimer=({timerdeadeline})=>{
  let {toastdispatch} = useContext(QuizContext)

  const min=
  localStorage.getItem("minutes") == null || localStorage.getItem("minutes") == "undefined"
    ? 1
    : JSON.parse(localStorage.getItem("minutes"))

    const sec=
    localStorage.getItem("seconds") == null || localStorage.getItem("seconds") == "undefined"
      ? 0
      : JSON.parse(localStorage.getItem("seconds"))  

  
  const [seconds, setSeconds] = useState(sec)
  const [minutes, setMinutes] = useState(min)   
   


  const updateTime=()=>{
    if (minutes == 0 && seconds == 0) {
      timerdeadeline(false);
      setSeconds(0);
      setMinutes(0);
      toastdispatch({type:'INFO',payload:"Time-up , Quiz Submitted"})
    }
    else {
      if (seconds == 0) {
        setMinutes(minutes => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds => seconds - 1);
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
    <i class="fa-solid fa-clock --primary-color"></i> <b>{minutes}:{seconds}</b>
  </p>);
}

export default CountDownTimer;