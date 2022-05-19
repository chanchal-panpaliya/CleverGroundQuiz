import "./SharePage.css"
const SharePage = ({data}) =>{

  return(
        <div className="flex-col row-gap-2rem flex-justify-content-center flex-align-item-center">
            <section>
                <label> Share Quiz Page </label>
            </section>
            <section className="flex-row col-gap-1rem flex-justify-content-center flex-align-item-center">
               
                <i class="fa-solid fa-envelope share-icon"></i>
            
                    <i class="fa-brands fa-twitter-square share-icon"></i>
                
               
                    <i class="fa-brands fa-facebook-square share-icon"></i>
                
              
                    <i class="fa-brands fa-linkedin share-icon"></i>
                
          </section>
      </div>
      
  )
}

export default SharePage;