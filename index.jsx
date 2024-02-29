import './index.css'

const CardItem = (props)=>{
  const {cardInfo} = props;
  const {job ,description, imgUrl} = cardInfo;

  return(
    <div className="Card-Item">
      <div>
        <h1 className="heading">{job}</h1>
        <p className="paraa">{description}</p>
      </div>
      <img src={imgUrl} alt="img" className="img"/>
    </div>
  )
}

export default CardItem