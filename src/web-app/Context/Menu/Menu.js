const MenuCategoryType=(state,action)=>{
    switch(action.type){  
         case "MENU_CATEORY_TYPE" : {
            localStorage.setItem("MENU_CATEORY_TYPE",action.payload) 
             return {...state,MC_type:action.payload}
         }
        default :
        return state
    }
}

const SingleQuizId=(state,action)=>{
    switch(action.type){  
        case "SELECTED_QUIZ_DATA_ID" : {
           localStorage.setItem("SELECTED_QUIZ_DATA_ID",action.payload) 
            return {...state,singleQuiz_Id:action.payload}
        }
       default :
       return state
   }
}

export  {MenuCategoryType,SingleQuizId};