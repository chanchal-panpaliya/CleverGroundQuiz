import "./auth.css";
import * as React from 'react';
import { useState ,useRef ,useEffect , useContext } from 'react';
import { Link , useNavigate} from "react-router-dom";
import { handleLogin } from "../../Service/utility";
import Header from "../../Component/Header/Header";
import { useTheme } from "../../Context/theme-context";
import QuizContext from "../../Context/QuizContext";


const testCredentials = {
  email: "johndoe@gmail.com",
  password: "johnDoe123",
  rememberMe: true,
  hideshowpassword:true
};

const formInitialState = {
  email:"",
  password: "",
  rememberMe: false,
  hideshowpassword:false
};


const Login =()=>{
  let navigator = useNavigate();
    let {toastdispatch} = useContext(QuizContext);
    const { darkTheme } = useTheme();
    const [formData, setFormData] = useState(formInitialState);
    const { email, password} = formData;
    const [hideshowpassword,sethideshowpassword] = useState(false)
    const [rememberMe,setrememberMe]=useState(false)
    const [error, setError] = useState("");
    

    useEffect(()=>{
      window.scrollTo({ behavior: 'smooth', top: 0 });
  },[])

    const handleInput = (e:any) =>{
    e.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }


   return(
       <div>
           <Header layout={""} sidebarOpen={""}/>
           <div className="flex-row flex-justify-content-center flex-align-item-center box-container" 
                 style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black",}}>
              <div className={darkTheme?"auth-container-darkmood" : "auth-container"}>
                <div className='flex-col'>
                  <h4>  Login </h4>
                  <form onSubmit={(e)=>handleLogin(e,email,password,navigator,setError,toastdispatch)}>
                      <div className="flex-row  col-gap-2rem textField-container">  
                        <input type="email" name="email" value={email} placeholder="johndoe@gmail.com" className= "text-input" 
                            onChange={(e)=>handleInput(e)} style={{color:darkTheme?"white":"black"}} required/>
                        <label className="text-placeholder"> Email Id </label>                                                
                      </div>
                      <div className="flex-row  col-gap-2rem textField-container">  
                        <input type={hideshowpassword?"text":"password"} name="password" value={password} className="text-input"  
                          onChange={(e)=>handleInput(e)} style={{color:darkTheme?"white":"black"}} required/>
                        <input type="checkbox" className="check-show-password" name="hideshowpassword" value={`${hideshowpassword}`} onChange={(e:any)=>sethideshowpassword(!hideshowpassword) }/> 
                        <label className="text-placeholder"> Password </label>                                                
                      </div>
                      <div className="flex-row flex-align-item-center">
                        <input  type='checkbox' name='rememberMe' id='remember-me' value={`${rememberMe}`} onChange={(e:any)=>setrememberMe(!rememberMe)}/>
                        <small> Remember me</small>
                      </div>
                      <div className="flex-row flex-justify-content-center flex-align-item-center">
                          <button style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black",}} onClick={(e) =>{e.preventDefault(); setFormData(testCredentials)}} className="button-auth">  Use test credentials </button>
                      </div>
                      {email && password && (
                        <div className="flex-row flex-justify-content-center flex-align-item-center">
                              <button className="button button-outline-primary button-onhover-fillbackground" >  
                                    Login 
                              </button>
                        </div>
                        )}  
                  </form> 
                  <div className='flex-row justify-content-space-between typology-padding-top'>
                      <Link to="/forgotpassword"> <small> forgot password ? </small>  </Link>
                      <Link to="/register"> <small> Registartion </small> </Link>
                  </div>
                </div>
            </div>
          </div>
       </div>
   )
}

export default Login