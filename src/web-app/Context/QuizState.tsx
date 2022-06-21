import { useReducer ,useEffect } from "react";
import QuizContext from "./QuizContext";

import ToastReducer from "./Toast/ToastReducer";
import QuizReducer from "./QuizReducer";
//service

//auth context
import { useAuth } from "./login/AuthContext";
//constant
import QuizStack from "../Constant/QuizList";
import { MenuCategoryType ,SingleQuizId } from "./Menu/Menu";
import {LeaderBordReducer,ResultReducer} from "./LeaderBord/LeaderBordReducer";
import {Leaderboardlist} from "../Constant/LeaderList";
import FilterReducer from "./Filter/FilterReducer";

export type childrenType = React.ReactNode;

type QuizContextProviderProps = {
    children:childrenType;
};


const QuizState =({ children }: QuizContextProviderProps)=>{
    let{token}=useAuth()

    const QuizItems=
    localStorage.getItem("quizlist") == null || localStorage.getItem("quizlist") == "undefined"
      ? QuizStack.QuizStack
      : JSON.parse(localStorage.getItem("quizlist")|| '{}');

    const LeaderItems=
    localStorage.getItem("leaderlist") == null || localStorage.getItem("leaderlist") == "undefined"
        ? Leaderboardlist
        : JSON.parse(localStorage.getItem("leaderlist")|| '{}');

    const ResultItems=
        localStorage.getItem("resultlist") == null || localStorage.getItem("resultlist") == "undefined"
            ? []
            : JSON.parse(localStorage.getItem("resultlist")|| '{}');

    //toast
    const [toast,toastdispatch] = useReducer(ToastReducer,{toastList:[]})
    //quiz
     const [quiz,quizdispatch]=useReducer(QuizReducer,{quizlist: QuizItems })
    // menu Category Type select
    const [categoryType,categoryTypedispatch]=useReducer(MenuCategoryType,{MC_type:""})
    //
    const [quizid,quizid_dispatch] = useReducer(SingleQuizId,{singleQuizId:""})
    //leader bord
    const [leaderbord,leaderbord_dispatch] = useReducer(LeaderBordReducer,{leaderlist:LeaderItems})
    //
    const [result,resultdispatch] = useReducer(ResultReducer,{quizresult:ResultItems})
    //
    const [filter,filter_dispatch]=useReducer(FilterReducer,{categoryType:"All",sort:"",search:""})
    
    useEffect(() => {

          localStorage.setItem("quizlist", JSON.stringify(quiz.quizlist));
          localStorage.setItem("leaderlist", JSON.stringify(leaderbord.leaderlist));
          localStorage.setItem("resultlist", JSON.stringify(result.quizresult));

        },[quiz.quizlist,result.quizresult]);

    //toast
   const deleteToast = (id:number) =>{
        toastdispatch({type:'REMOVE_TOAST',payload:id})  
    }

    const getCategoryType=(name:string)=>{
        categoryTypedispatch({type:"MENU_CATEORY_TYPE",payload:name}) 
    }

    const GetSingleQuizId=(id:string)=>{
        quizid_dispatch({type:"SELECTED_QUIZ_DATA_ID",payload:id})
    }

    const AddLeaderList=(item:any)=>{
        leaderbord_dispatch({type:"ADD_DATA_LEADERBORD",payload:item})  
    }

    const GetQuizResult=(item:any)=>{
        resultdispatch({type:"RESULT",payload:item})
    }
     
    return(
        <QuizContext.Provider value={{
                toastList : toast.toastList,
                quizlist : quiz.quizlist,
                MC_type : categoryType.MC_type,
                singleQuizId : quizid.singleQuizId ,
                leaderlist:leaderbord.leaderlist,
                quizresult:result.quizresult,
                filter,filter_dispatch,
                toast,toastdispatch,
                deleteToast,
                getCategoryType,
                GetSingleQuizId,
                AddLeaderList,
                GetQuizResult
            }}>
            { children }
        </QuizContext.Provider>
    )
}

export default QuizState;