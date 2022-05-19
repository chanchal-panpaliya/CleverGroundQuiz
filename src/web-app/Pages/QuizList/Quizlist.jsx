import { useContext ,useEffect , useState} from "react"
import QuizContext from "web-app/Context/QuizContext"
import Header from "web-app/Component/Header/Header"
import Footer from "web-app/Component/Footer/Footer"
import { useTheme } from "../../Context/theme-context";
import './Quizlist.css';
import { Link } from "react-router-dom";
import Filter from "../../Component/Filter/Filter";
import {get_Category_Type,get_SORT_DATA,get_search} from "../../Component/Filter/FilterUtility";


const Quizlist =()=>{
   let {MC_type,quizlist,GetSingleQuizId,filter,filter_dispatch,getCategoryType} = useContext(QuizContext)
   const { darkTheme } = useTheme();
   const [side_toggle,setside_toggle] = useState(false)
   //func
   const sidebarOpen=()=>{
    setside_toggle(true)
   }
   const sidebarClose=()=>{
    setside_toggle(false)
   }
   //menu select filter
   let category = localStorage.getItem("MENU_CATEORY_TYPE")
   let unique_list = quizlist.length>0 && [...new Set(quizlist.map(q => q.CategoryName))];
   //filter
   const category_Type = get_Category_Type(quizlist,filter.categoryType);
   const search_data = get_search(category_Type,filter.search)
   const sort_Data = get_SORT_DATA(search_data,filter.sort)
   return(
       <div>
            <Header layout={"mobile"} sidebarOpen={()=>setside_toggle(!side_toggle)}/>
            <div className="menu-container-grid" style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}}>
              <div className={side_toggle?"sidebar-responsive":"sidebar"} style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}}>
                <div className={side_toggle?"sidebar-header flex-justify-content-flex-end":"sidebar-header"}> 
                  {side_toggle ? <i className="fa fa-times" onClick={()=>sidebarClose()}> </i> : null }
                </div>
                <div className="sidebar-menulist">
                  <div className="sidebar__menu">
                  <h2 className="quiz-text"> {category} </h2> 
                 <ul className="quiz-option main">
                   {
                      unique_list.length>0 ?
                      unique_list.map((item,index)=>{
                         return( 
                            <Link to={"/quizlist"} onClick={()=>{getCategoryType(item);filter_dispatch({type:"CATEGORY_TYPE",payload:"All"}) } }>
                                  <li className="badge" key={index} style={{backgroundColor:category===item?"green":""}}> {item} </li>
                            </Link>
                         )
                      })
                      :
                      <div> no quiz list found </div>
                   }
                </ul>
                         <Filter data={sort_Data} category={category} originaldata={quizlist}/>
                  </div>
                </div>
              </div>
              {/* main */}
              <main id="main">
              <div>
                 <div className="search-text-box-quiz">
                     <input className="search-text-quiz" type="search" value={filter.search} placeholder="search by title..."
                     onChange={(e)=>{filter_dispatch({type:"SEARCH_BY_TITLE",payload:e.target.value})}} />
                 </div>
                 
                    {
                        sort_Data.length>0 ?
                        <ul className="notification">
                          { sort_Data.map((item,index)=>{
                             return item.CategoryName === category ?
                               (
                                 <Link to={`/quizlist/${item._id}/rule`} onClick={()=>{ GetSingleQuizId(item._id); side_toggle && sidebarClose() }}> 
                                    <li className="notification-card-v1 border-weight-left-secondarycolor" style={{color:darkTheme?"black":"grey"}}> 
                                          <div className="Letter-avatar border-radius-round icon-secondary-background-color">
                                             <span className="Letter-avatar-label"> 
                                             <i className="material-icons avatar-icon-color-white">code</i> 
                                             </span>
                                          </div>
                                          <div className="flex-2 flex-align-item-center typography-padding-top-right-bottom-left typography-p-small">
                                                <div className="typography-h4 typography-fontweight-bold"> {item.CategoryType} </div>
                                                <div className="typography-grey-text-extrasmall"> {item.Desc} </div>
                                          </div>                                  
                                    </li>
                                    </Link> 
                               ) :  null
                           }) }
                           </ul> :
                        <div> no data found </div>
                    }
                 </div>    
              </main>
           </div> 
         <Footer/>
       </div>
   )
}

export default Quizlist