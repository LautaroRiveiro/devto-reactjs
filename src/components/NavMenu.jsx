import { useState } from 'react'
import { FaFacebookSquare, FaHome, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

const NavMenu = () => {

  const [showMore, setShowMore] = useState(false)
  const toggle = (e) => {
    e.preventDefault()
    setShowMore(!showMore)
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">
              <i><FaHome /></i>
              Inicio
            </a>
          </li>
          <li>
            <a href="/">
              <i><FaHome /></i>
              Inicio
            </a>
          </li>
          <li>
            <a href="/">
              <i><FaHome /></i>
              Inicio
            </a>
          </li>

          {!showMore && (
            <li className="more">
              <a href="" onClick={toggle}>
                Mostrar más
              </a>
            </li>
          )}

          {showMore && (
            <>
              <li>
                <a href="/">
                  <i><FaHome /></i>
                  Inicio
                </a>
              </li>
              <li>
                <a href="/">
                  <i><FaHome /></i>
                  Inicio
                </a>
              </li>
              <li className="more">
                <a href="" onClick={toggle}>
                  Mostrar menos
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>

      {showMore && (
        <div className="left-sidebar-social">
          <a href="/instragram"><i><FaInstagramSquare /></i></a>
          <a href="/facebook"><i><FaFacebookSquare /></i></a>
          <a href="/twitter"><i><FaTwitterSquare /></i></a>
        </div>
      )}
    </>
  )
}
export default NavMenu