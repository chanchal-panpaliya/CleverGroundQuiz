//react
import { useContext } from 'react';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'; 
//component
import Home from "./web-app/Pages/home/home"
import Login from "./web-app/Pages/auth/login";
import Register from './web-app/Pages/auth/register';
import ForgotPassword from './web-app/Pages/auth/forgotpassword';
import {Toast} from "./web-app/Component/Toast/Toast";
import PageNotFound from "./web-app/Pages/404error/pagenotfound";

//css
import "./App.css";
//constext
import QuizContext from './web-app/Context/QuizContext';
import {useAuth} from './web-app/Context/login/AuthContext';
import Quiz from './web-app/Pages/quiz/Quiz';
import QuizList from './web-app/Pages/QuizList/Quizlist';
import Rules from './web-app/Pages/rules/Rules';
import Result from './web-app/Pages/Result/Result';
import Leaderboard from './web-app/Pages/LeaderBord/Leaderboard';
import { useTheme } from "./web-app/Context/theme-context";
import Profile from './web-app/Pages/Profile/Profile';

function App() {
  const { darkTheme } = useTheme();
  let {token} = useAuth()
  const {toastList} = useContext(QuizContext);

  return (
    <div className="App">
      <Router>
         <Routes>
              <Route  path="/" element={<Home/>}/>
              <Route  path="/login" element={<Login/>} />
              <Route  path="/register" element={<Register/>} />
              <Route  path="/forgotpassword" element={<ForgotPassword/>} />
              <Route path="/leaderboard"  element={<Leaderboard/>}/>

                {
                  token ? <>
                  <Route  path="/quiz/:id" element={<Quiz/>}/>
                  <Route  path="/result/:id" element={<Result/>}/>
                  <Route  path="/quizlist/:id/rule" element={<Rules/>}/>
                  <Route  path="/userprofile" element={<Profile/>}/>
                  <Route  path="/quizlist" element={<QuizList/>}/>
                  </> :
                  <>
                    <Route  path="/quiz/:id" element={<Login/>}/>
                    <Route  path="/result/:id" element={<Login/>}/>
                    <Route  path="/quizlist/:id/rule" element={<Login/>}/>
                    <Route  path="/quizlist" element={<Login/>}/>
                  </>
                }
              
              <Route  path="*" element={<PageNotFound/>}/>

         </Routes>
        </Router>                                   
        <Toast data={toastList}/>
    </div>
  );
}

export default App;
