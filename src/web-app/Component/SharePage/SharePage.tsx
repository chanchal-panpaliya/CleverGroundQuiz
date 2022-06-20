import "./SharePage.css"
const SharePage = (data:any) =>{
 
  return(
        <div className="flex-col row-gap-2rem flex-justify-content-center flex-align-item-center">
            <section>
                <label> Share Quiz Page </label>
            </section>
            <section className="flex-row col-gap-1rem flex-justify-content-center flex-align-item-center">
                <a className="share-btn share-btn-email" href={`mailto:?subject=cleverGround quiz page&body=${window.location.href}`} title="Share via Email">
                <i className="fa-solid fa-envelope share-icon"></i>
                </a>
                <a className="share-btn share-btn-branded share-btn-twitter"
                href={`https://twitter.com/share?url=${window.location.href}&text= cleverGround quiz page&via=${'cleverGroundQuiz.com'}`}
                title="Share on Twitter">
                    <i className="fa-brands fa-twitter-square share-icon"></i>
                </a>
                <a className="share-btn share-btn-branded share-btn-facebook"
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                title="Share on Facebook">
                    <i className="fa-brands fa-facebook-square share-icon"></i>
                </a>
                <a className="share-btn share-btn-branded share-btn-linkedin"
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                title="Share on LinkedIn">
                    <i className="fa-brands fa-linkedin share-icon"></i>
                </a>
          </section>
      </div>
      
  )
}

export default SharePage;