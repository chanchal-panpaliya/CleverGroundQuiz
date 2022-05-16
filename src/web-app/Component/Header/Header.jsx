//react
import { Link } from 'react-router-dom';
import { useEffect,useContext} from 'react';
//css
import './Header.css';
// import "../../page/menu/menu.css";
//context
import { useTheme } from '../../Context/theme-context';
import { useAuth } from 'web-app/Context/login/AuthContext';
import QuizContext from 'web-app/Context/QuizContext';

const Header = (props) =>{
    const {token , user } = useAuth()
    const { darkTheme , setDarkTheme} = useTheme();
    let{toastdispatch} = useContext(QuizContext);

    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
        localStorage.getItem("token");
      }, [token,darkTheme]);

    const onThemeTogglerClick = () =>{
        setDarkTheme(!darkTheme)
    }

    const logout=()=>{
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            localStorage.removeItem("minutes")
            localStorage.removeItem("seconds")
            window.location.reload()
            toastdispatch({type:'SUCCESS',payload:"LOGOUT SUCCESSFULL"})
    }

    return(
        <div>
            <div className='header-container'>
                <div className='header-container-flex'>
                    <div className='header-left-end'></div>
                    <div className='header-logo'>
                    {
                        props.layout==="mobile"?
                        <>
                        <div className="sidebar-icon" onClick={props.sidebarOpen}> 
                            <i className="fa fa-bars" style={{color:"white"}}> </i>
                        </div>
                        </>:
                        null
                    }
                    <div>
                        <Link to="/" > 
                            <img style={{width:"30vh"}} src="https://secureservercdn.net/160.153.137.218/jg2.c08.myftpupload.com/wp-content/uploads/2021/11/logo-2.svg"/>
                        </Link>
                    </div>
                </div>
                {/* /theme button/ */}
                <div className='header-right-container'>
                    <span onClick={onThemeTogglerClick} className="themeicon-onhover"> 
                    {darkTheme?
                        <i class="fa fa-moon-o"></i>:
                        <i class="fa-solid fa-sun"></i>
                    } 
                    </span> 
                    <span>
                        <Link to={"/leaderboard"}>
                            <button className="button button-secondary button-outline-tertiary button-onhover-fillbackground-danger">
                                <span className='flex-row flex-justify-content-center flex-align-item-center col-gap-1rem'>
                                   <i class="fa-solid fa-chess-king"></i>
                                   <label> Leader Bord </label>
                                </span>   
                            </button>
                        </Link>
                    </span>
                    <span>
                    {
                        localStorage.getItem("token")!=null ?
                           <Link to={'/userprofile'}> 
                                <button className="button button-secondary button-outline-tertiary button-onhover-fillbackground-danger">
                                <i class="fa-solid fa-user"></i>
                                </button> 
                            </Link>:
                            null
                    }
                    </span>
                    <span>
                    {
                        localStorage.getItem("token")!=null ?
                        <button className="button button-secondary button-outline-tertiary button-onhover-fillbackground-danger" onClick={logout}>
                            Logout
                        </button> :
                        <Link to="/login">
                            <button className="button button-warning button-outline-tertiary button-onhover-fillbackground-danger">
                                Login
                            </button>
                        </Link>
                    }
                    </span>
                    <span>
                    {/* {
                       JSON.parse(localStorage.getItem("user"))!=null ?
                         <label className='white'> Hi {user.firstName || user.firstname} </label> :
                         null
                    } */}
                    </span>
                </div>
               
              
                <div className='header-right-end'>
                
                </div>
            </div>   
           </div>
        </div>
    )
}

export default Header;