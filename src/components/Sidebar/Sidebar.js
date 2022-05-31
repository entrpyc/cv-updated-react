import './Sidebar.scss';

const info = {
  picture: 'http://www.designstub.com/demos/onepageresume/assets/images/my-pic.jpg',
  name: 'Asen Angelov',
  position: 'Software Engineer',
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="picture">
        <img src={info.picture} alt={info.name} />
      </div>
      <div className="info">
        <h1>{info.name}</h1>
        <p>{info.position}</p>
      </div>
      <div className="social"></div>
      <div className="navigation">

      </div>
    </div>
  )
}

export default Sidebar