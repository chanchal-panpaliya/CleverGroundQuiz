
const LeaderState:any = { leaderlist: [] };

type LeaderTYPE =
  | { type: "ADD_DATA_LEADERBORD"; payload:any}; 

  
const LeaderBordReducer=(state: typeof LeaderState, action: LeaderTYPE)=>{

    switch(action.type){  
         case "ADD_DATA_LEADERBORD":{
            return {...state,leaderlist:[...state.leaderlist , action.payload ]}
         }
        default :
        return state
    }
}

const ResutState = { quizresult: "" };

type ResutTYPE =
  | { type: "RESULT"; payload: any };

const ResultReducer=(state: typeof ResutState, action: ResutTYPE)=>{
    switch(action.type){  
         case "RESULT":{
            return {...state,quizresult:action.payload}
         }
        default :
        return state
    }
}

export {LeaderBordReducer,ResultReducer};