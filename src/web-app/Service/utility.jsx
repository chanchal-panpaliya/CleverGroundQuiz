import axios from "axios";


//registration
export const handleRegistration = async (e,username,password,firstname,lastname,termsAndConditions,navigator,setError,toastdispatch) =>{
    e.preventDefault();
    try {
         await axios.post("/api/auth/signup",{
            username,password,firstname,lastname,termsAndConditions
         }).then((res) => {
            if(res.status === 200 || res.status === 201){
                toastdispatch({type:'SUCCESS',payload:"Registered and LOGIN SUCCESSFULL"})
                localStorage.setItem("token", res.data.encodedToken );
                localStorage.setItem("user", JSON.stringify(res.data.createdUser));
                setError("Registered successfully")
                navigator('/')
                window.location.reload();
            }

         }).catch((error)=>{
                     if(error.response.status === 422){
                        toastdispatch({type:'WARNING',payload:"email id already exist"})
                        setError("email id already exist")
                        let time = setTimeout(()=>{
                            setError("")
                          },1000)
                          return()=>clearTimeout(time)
                     }
         });       
          } catch (error) {
             toastdispatch({type:'DANGER',payload:"Not able to registered !! check"})
              setError("Not able to registered !! check ")
              let time = setTimeout(()=>{
                setError("")
              },1000)
              return()=>clearTimeout(time)
        }
}

//login
export const handleLogin = async (e,emailid,password,navigator,setError,toastdispatch) => {
    e.preventDefault();
    try {
        await axios.post("/api/auth/login",{
            emailid,password 
        }).then((res)=>{
            if(res.status === 200){
                if(res.data){
                    toastdispatch({type:'SUCCESS',payload:"LOGIN SUCCESSFULL"}) 
                    localStorage.setItem("token", res.data.encodedToken );
                    localStorage.setItem("user", JSON.stringify(res.data.foundUser));
                    navigator('/')
                    window.location.reload();
                } 
            }else{
                toastdispatch({type:'DANGER',payload:"login Failed ! please try again"})
                setError("login Failed ! please try again") 
            }
         });
      } catch (error) {
          setError("login Failed ! please try again")
          toastdispatch({type:'DANGER',payload:"LOGIN SUCCESSFULL"})
      }
};

