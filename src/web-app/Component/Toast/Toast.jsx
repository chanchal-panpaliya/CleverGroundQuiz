//react
import { useContext ,useEffect } from 'react';
//css
import "./Toast.css";
//context
import QuizContext from '../../Context/QuizContext';

const Toast = (props) =>{
    const {toastList,deleteToast} = useContext(QuizContext)

    useEffect(() => {
      const interval = setInterval(() => {
        if(toastList.length) {
          deleteToast(toastList[0].id);
        }
      }, 5000);
  
      return () => {
        clearInterval(interval);
      }
    }, [toastList, deleteToast]);

    return(
      <div className="toast-container">
      {
        props.data.map((toast, i) => (
          <div
            key={i}
            className="toast-notification"
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div>
              <p className="toast-description">{toast.description}</p>
            </div>
          </div>
        ))
      }
    </div>
    )
}

export {Toast}