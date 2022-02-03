import { useState } from 'react'
import { FaGuitar, FaRegBell } from 'react-icons/fa'

const Navigation = () => {

  // TODO: Remove
  const isLogged = true;

  const [showMenu, setShowMenu] = useState(false)
  const toggle = () => setShowMenu(!showMenu)

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          <FaGuitar size="2rem" />
          <span>Searchband</span>
        </a>

        <div className="header-right">
          {isLogged
            ? <>
              <button>Publicá gratis</button>
              <i>
                <FaRegBell />
              </i>
              <span onClick={toggle} className="header-user">
                <img src="https://picsum.photos/200" alt="profile" />
              </span>
            </>
            : <>
              <button>Publicá gratis</button>
              <a href="/register">Ingresar</a>
            </>
          }
        </div>
      </div>

      {showMenu &&
        <div className="header-dropdown-menu">
          <ul>
            <li onClick={toggle}>
              <a href="/profile">Mi perfil</a>
            </li>
            <li onClick={toggle}>
              <a href="/create">Publicar anuncio</a>
            </li>
            <li onClick={toggle}>
              <a href="/applies">Mis postulaciones</a>
            </li>
            <li onClick={toggle}>
              <a href="/logout">Salir</a>
            </li>
          </ul>
        </div>
      }
    </header>
  )
}
export default Navigation