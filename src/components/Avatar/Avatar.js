import './Avatar.scss';

function Avatar({ picture, name }) {
  return (
    <div className="picture">
      <div className="img-container">
        <img src={picture} alt={name} />
      </div>
    </div>
  )
}

export default Avatar