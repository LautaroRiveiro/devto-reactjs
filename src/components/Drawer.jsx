import { GrFormClose } from "react-icons/gr"

const Drawer = ({title, close, children}) => {

  const stopPropagation = (e)=>{
    e.stopPropagation()
  }

  return (
    <div className="drawer" onClick={close}>
      <div className="drawer-container" onClick={stopPropagation}>
        <div className="drawer-content">
          <header className="drawer-header">
            <h2>{title}</h2>
            <button className="drawer-close" onClick={close}>
              <GrFormClose />
            </button>
          </header>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Drawer