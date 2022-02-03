import Drawer from './Drawer'
import NavMenu from './NavMenu'
import useToggle from '../hooks/useToggle'
import { FaFilter } from "react-icons/fa"

const LeftSidebar = () => {

  const [showDrawer, toggle] = useToggle()

  return (
    <>
      <aside className="left-sidebar">
        <NavMenu />
      </aside>

      <div className="drawer-opener" onClick={toggle}>
        <button className="btn">
          Filtros
          <i><FaFilter /></i>
        </button>
      </div>

      {showDrawer && (
        <Drawer close={toggle} title="Menu">
          <NavMenu />
        </Drawer>
      )}
    </>
  )
}
export default LeftSidebar