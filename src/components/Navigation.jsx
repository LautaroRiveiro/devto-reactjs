import { FaGuitar, FaRegBell } from 'react-icons/fa'

const Navigation = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          <FaGuitar size="2rem" />
          Searchband
        </a>

        <div className="header-right">
          <a href="/register">Publicá gratis</a>
          <button>Ingresar</button>
          <i>
            <FaRegBell />
          </i>
          <span className="header-user">
            <img src="https://picsum.photos/200" alt="profile" />
          </span>
        </div>
      </div>
    </header>
  )
}
export default Navigation