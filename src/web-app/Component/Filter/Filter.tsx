import { useEffect,useState,useContext} from 'react';
import './Filter.css';
import QuizContext from '../../Context/QuizContext';
import { useTheme } from '../../Context/theme-context';

const Filter=(props:any)=>{
  let {darkTheme} = useTheme()
  let {filter,filter_dispatch} = useContext(QuizContext);

  const [checklist,setChecklist ] = useState([])
  const [selectedsort,setselectedsort]=useState("")

  useEffect(()=>{  
    let time1 = setTimeout(()=>{
       let updated_category:any = props.originaldata.filter((item:any)=>item.CategoryName === props.category) 
       let unique_list:any = updated_category.length>0 && Array.from(new Set(updated_category.map((q:any) => q.CategoryType)));
       let updated_list:any = unique_list.length>0 && unique_list.filter((item:any)=>item!=="")
         if(unique_list[0]!==""){
          setChecklist(updated_list) 
         }
    },0)
  return ()=> clearTimeout(time1)  
})

const render_sort=()=>{
  return(
    <div> 
      <label> sort by </label>
       <select style={{color:darkTheme?"white":"black",background:darkTheme?"black":"white"}} className='filter-select' value={selectedsort} onChange={(e)=>{setselectedsort(e.target.value); filter_dispatch({type:"SORT",payload:e.target.value})}}>
          <option value="clear"> clear </option>
          <option value="asc-by-title"> asc-by-title </option>
          <option value="dec-by-title"> dec-by-title </option>
       </select>
    </div>
  )
}

const render_categoryType=()=>{
 return (<div className='categorytype-conatiner --background'> 
         <button className={filter.categoryType==="All"?"badge-onselect":"badge-not"}  onClick={()=>{filter_dispatch({type:"CATEGORY_TYPE",payload:"All"})}}> All </button>
          {
            checklist.length>0 && checklist.map((item,index)=>{
               return <>
               <button className={filter.categoryType===item?"badge-onselect":"badge-not"}  key={index} onClick={()=>{filter_dispatch({type:"CATEGORY_TYPE",payload:item})}}> {item} </button>
               </>
            })
          }
 </div>)
}

  return(
      <div className='filter-conatiner --background'>
           {render_sort()} 
           {render_categoryType()}
      </div>
  )
}
export default Filter