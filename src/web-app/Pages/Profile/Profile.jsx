import Footer from 'web-app/Component/Footer/Footer';
import Header from 'web-app/Component/Header/Header';
import './Profile.css';
import profile from '../../img/profile.png';
//context
import { useTheme } from "../../Context/theme-context";
import { useAuth } from 'web-app/Context/login/AuthContext';
const Profile = () =>{
    const { darkTheme } = useTheme();
    let {user,token} = useAuth();

 
    if(token){
   return(
        <div>
            <Header/>
                <div className='page-container typology-padding-top' style={{backgroundColor:darkTheme?"black":"white",color:darkTheme?"white":"black"}}>
                    <div className='page-data-display typology-padding-top'>
                        <header className='like-page-header' style={{backgroundColor:darkTheme?"grey":"",color:darkTheme?"":"black"}}>
                          
                                 <img className='like-page-round-circle' src={profile} />
                           
                        </header>
                        <section className='like-page-body'>
                        <div className="table">
                                <div className='row-table'>
                                    <div className='column-table'> <b> FirstName </b> </div>
                                    <div className='column-table'> {user.firstName || user.firstname}</div>
                                </div>
                                <div className='row-table'>
                                    <div className='column-table'> <b> LastName </b> </div>
                                    <div className='column-table'> {user.lastName || user.lastname}</div>
                                </div>  
                                <div className='row-table'>
                                    <div className='column-table'> <b> Email-id </b> </div>
                                    <div className='column-table'> {user.username || user.email}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                    </div> 
                {/* </section> */}
            <Footer/>
       </div>
   )
    }else{
        return (<div> user not login </div>)
    }
}

export default Profile