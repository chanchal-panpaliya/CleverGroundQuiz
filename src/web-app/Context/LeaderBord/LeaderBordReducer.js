const LeaderBordReducer=(state,action)=>{
    switch(action.type){  
         case "ADD_DATA_LEADERBORD":{
            return {...state,leaderlist:[...state.leaderlist , action.payload ]}
         }
        default :
        return state
    }
}

const ResultReducer=(state,action)=>{
    switch(action.type){  
         case "RESULT":{
            return {...state,quizresult:action.payload}
         }
        default :
        return state
    }
}

export {LeaderBordReducer,ResultReducer};