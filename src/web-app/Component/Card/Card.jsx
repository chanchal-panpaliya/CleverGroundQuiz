//react
import { useContext,useState,useEffect } from 'react';
import moment from 'moment';
import { useTheme } from '../../Context/theme-context';
//css
import './Card.css';
//component
import {Modal} from '../Modal/Modal';
//
import { useAuth } from 'web-app/Context/login/AuthContext';
//service


export const Card = (props) =>{
    let {token} = useAuth();
    const { darkTheme } = useTheme();
    const [showmodal,set_showmodal]=useState(false);
  return(
      <div>
        <div className="card-body" style={{backgroundColor:props.data.color,boxShadow:darkTheme?"1px 1px 10px 1px rgb(237 234 239)":""}} > 
          <div className="flex-col"> 
                <div className='flex-row card-footer-icon'>
                        <div className="card-header typography-padding-5px"> 
                            <i class="material-icons card-icon-size">event_note</i>  
                        </div>
                </div>
                <div className="typography-h4 typography-fontweight-bold typography-padding-5px note-title"> title  </div>
                <div className="typography-padding-5px"> <div className='description'> desc </div> </div>
           </div>
        </div>
        {showmodal? <Modal data={props.data} modalClose={()=>set_showmodal(false)} /> : null}                                                                                                                                                                     
      </div>
  )
}





