import { Bookmark } from 'lucide-react'

const Card = (Props) => {
  return (
    <div className="card">
      <div>
        <div className="top">
        <img src={Props.logo} alt="" />
        <button>Save <Bookmark size={16} /> </button>
      </div>
      <div className="center">
        <h3> {Props.company} <span>{Props.posted}</span></h3>
        <h2>{Props.position}</h2>
        <div className="tag">
          <h4>{Props.tag1}</h4>
          <h4>{Props.tag2}</h4>
        </div>
      </div>
      </div>
      <div className="buttom">
        <div>
          <h3>{Props.salary}</h3>
          <p>{Props.location} </p>
        </div>
         <button>Apply Now </button>
      </div>
    </div>
  )
}

export default Card
