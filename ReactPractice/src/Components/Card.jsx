
function Card(props){
    return(
      <>
      
    <div className="container">
      
    
  <div className='cards'>
  <div className='card'>
    <img src={props.imgsrc} alt="myPic" className='card_img'/>
    <div className='card_info'>
      <span className='card_category'>{ props.title}</span>
      <h1 className='card_title'>{props.sname}</h1>
      
      <a href={props.link} target=''>
        <button type="">Watch Now</button>
      </a>
    </div>
  </div>
  </div>
  </div> 
  
  </>
    )
  }
  export default Card;