const FilterState = { categoryType: "",sort:"",search:"" };

type FilterTYPE =
  | { type: "CATEGORY_TYPE"; payload: string }
  | { type: "SORT"; payload: any }
  | { type: "SEARCH_BY_TITLE"; payload: any } ;
  
const FilterReducer=(state: typeof FilterState, action: FilterTYPE)=>{

    switch(action.type){  
        case "CATEGORY_TYPE" :{
            return{...state,categoryType:action.payload}
        }

        case "SORT":{
            return{...state,sort:action.payload}
        }

        case "SEARCH_BY_TITLE":{
            return{...state,search:action.payload}
        }
        
        default :
        return state
    }
}

export default FilterReducer;