import './Card.css'

interface CardTypes {
    name : string,
    branch : string
}

function Card({name,branch}:CardTypes) {
  return (
    <div className="card">
    <div className="card-photo"></div>
    <div className="card-title">{name.toUpperCase()} <br/>
        <span>{branch.toUpperCase()}</span>
    </div>
</div>
  )
}

export default Card