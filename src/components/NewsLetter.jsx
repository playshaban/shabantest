


const NewsLetter  = ()=>
{
    return (<div className="NewsLetter">
    <div className="Left">
    <p className="Icon"><i class="fas fa-envelope"></i></p>
    <p><strong>Singnup For Newsletter</strong><br></br>We'll never share your email with a third party.</p>
    </div>
    <div className="Right">
      <div className="Input">
        <input placeholder="Your Email Adress"></input>
        <button>Subscribe</button>
      </div>
      <p className="Icon"> <i class="fab fa-linkedin"></i> </p>
      LinkedIN
    </div>
  </div>)
}

export default NewsLetter;