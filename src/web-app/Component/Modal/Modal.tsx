import "./Modal.css";
import { useState ,useContext ,useEffect} from "react";
//context
import { useTheme } from "../../Context/theme-context";
import { useAuth } from "../../Context/login/AuthContext";
import { useNavigate } from "react-router-dom";
import SharePage from "../SharePage/SharePage";
import QuizContext from "../../Context/QuizContext";

//modal edit
export const Modal =(props:any)=>{
    let {token} = useAuth()
    const { darkTheme } = useTheme();
    //function
    return(
        <div className='modal'>
            <div className="modal-container">  
                <div className='modal-right-side'>
                    <div className='modal-right-flex-row'>
                            {props.data}
                    </div>   
                </div> 
                <i className='material-icons modal-close-modal' onClick={props.modalClose}> close </i>
            </div>
            
        </div>
    )
}

//modal  quit
export const QUIT_Modal =(props:any)=>{
    let {token} = useAuth()
    const { darkTheme } = useTheme();
    let navigator = useNavigate();
    let {toastdispatch} = useContext(QuizContext)

    //function
    return(
        <div className='modal'>
            <div className="modal-container">  
                <div className='modal-right-side'>
                    <div className='modal-right-flex-row'>
                        <div className="flex-col row-gap-2rem">
                             <label> Do you want to quit this quiz?  </label>
                             <label> Note: If you quit the quiz, you will not be able to see the final score. </label>
                             <div className="button-quiz-quit">
                                 <button className="button" onClick={()=>{navigator(`/quizlist`);localStorage.removeItem("minutes"); localStorage.removeItem("seconds"); toastdispatch({type:'DANGER',payload:"You Quit"})}}> quit </button>
                                 <button className="button" onClick={props.modalClose}> cancel </button>
                             </div>
                        </div>
                    </div>   
                </div> 
                <i className='material-icons modal-close-modal' onClick={props.modalClose}> close </i>
            </div>
            
        </div>
    )
}



export const ShareModal =(props:any)=>{
    return(
        <div className='modal'>
        <div className="modal-container">  
            <div className='modal-right-side'>
                <div className='modal-right-flex-row'>
                   <SharePage data={props.data}/>
                </div> 
            </div>
            <i className="fa-solid fa-xmark modal-close-modal" onClick={props.modalClose}></i>
        </div>
    </div> 
    )
}


