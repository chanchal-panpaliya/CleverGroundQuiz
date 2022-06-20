const menuState = { MC_type: "" };

type MenuTYPE =
  | { type: "MENU_CATEORY_TYPE"; payload: any };

  
const MenuCategoryType=(state: typeof menuState, action: MenuTYPE)=>{
    switch(action.type){  
         case "MENU_CATEORY_TYPE" : {
            localStorage.setItem("MENU_CATEORY_TYPE",action.payload) 
             return {...state,MC_type:action.payload}
         }
        default :
        return state
    }
}

const singlequizState = { singleQuizId: "" }; 

type singleQuiz_IdTYPE =
  | { type: "SELECTED_QUIZ_DATA_ID"; payload: any };

const SingleQuizId=(state: typeof singlequizState, action: singleQuiz_IdTYPE)=>{
    switch(action.type){  
        case "SELECTED_QUIZ_DATA_ID" : {
           localStorage.setItem("SELECTED_QUIZ_DATA_ID",action.payload) 
            return {...state,singleQuizId:action.payload}
        }
       default :
       return state
   }
}

export  {MenuCategoryType,SingleQuizId};
