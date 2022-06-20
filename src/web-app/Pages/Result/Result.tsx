import './Result.css';
import QuizContext from '../../Context/QuizContext';
import { useContext,useEffect,useState} from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import { useTheme } from "../../Context/theme-context";
import { Modal } from '../../Component/Modal/Modal';

const Result =()=>{
    const { darkTheme } = useTheme();
    const {id} = useParams();
    let {leaderlist,quizresult,GetSingleQuizId} = useContext(QuizContext)
    const [ismodal,ismodalset]=useState(false)
    const [isexplain,Setexplain]=useState("")
 return(
     <div>
         <Header/>
         <section className="home-section" style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}}>
             <div className='padding-top-5rem'>
                <h3> Result : {quizresult.score} / 8 ({quizresult.type} - {quizresult.topic}) </h3>
             </div>
            <ul className='flex-col row-gap-2rem typology-padding-top' style={{width:'50vw'}}> 
            {
                quizresult.ans.map((item:any,index:any)=>{
                    return (
                        <li key={index}>
                            {item.que} 
                            <ul className='flex-col row-gap-1rem typography-padding-top-right' style={{listStyleType:'decimal'}}> 
                                {item.options.map((op:any,op_index:any)=>{
                                    return op.selected ? 
                                    <li key={op_index} > 
                                        {op.que_options}
                                          { op.que_options === item.ans ?
                                           <i className="fa-solid fa-circle-check" style={{color:op.que_options === item.ans ? "green" : ""}}></i> :
                                           <i className="fa-solid fa-circle-xmark" style={{color:op.que_options !== item.ans ? "red" : ""}}></i>
                                          }
                                     </li>
                                           : 
                                     <li key={op_index}> {op.que_options} </li>
                                        
                                   }) }
                            </ul>
                              <b>
                                  <label> ANS : </label>
                                  <label> {item.ans} </label>
                              </b>
                              <button onClick={()=>{ismodalset(!ismodal);Setexplain(item.explanation)}}> explanation </button>
                        </li>
                    )
                })
            }
            </ul>
            <div className='flex-row col-gap-2rem flex-justify-content-center typography-padding-top-bottom'>
                <Link to={`/quizlist/${id}/rule`} onClick={()=>GetSingleQuizId(id)}>
                    <button className='button'> Try again </button>
                </Link>
                <Link to={`/quizlist`}>
                    <button className='button'> back to quizlist </button>
                </Link>
            </div>
            </section>
            {
                ismodal ? <Modal data={isexplain} modalClose={()=>ismodalset(false)}/> : null
            }
         <Footer/>
     </div>
 )
}
export default Result;