import { createContext } from "react";

type QuizContextType = {
    toastList : any;
    quizlist : any;
    MC_type : any;
    singleQuizId : any;
    leaderlist:any;
    quizresult:any;
    filter:any;
    toast:any;
    filter_dispatch:(id: any) => any; 
    toastdispatch:(value: any) => any; 
    deleteToast:(value: any) => any; 
    getCategoryType :(value: any) => any; 
    GetSingleQuizId : (value: any) => any; 
    AddLeaderList : (value: any) => any;
    GetQuizResult:(value: any) => any;
};


const QuizContext = createContext({} as QuizContextType);

export default QuizContext;