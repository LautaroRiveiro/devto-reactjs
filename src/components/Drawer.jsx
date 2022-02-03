import { GrFormClose } from "react-icons/gr"

const Drawer = ({close, children}) => {

  const stopPropagation = (e)=>{
    e.stopPropagation()
  }

  return (
    <div className="drawer" onClick={close}>
      <div className="drawer-container" onClick={stopPropagation}>
        <div className="drawer-content">
          <span className="drawer-close" onClick={close}>
            <i>
              <GrFormClose />
            </i>
          </span>
          {children}
        </div>
      </div>
    </div>
  )
}
export default Drawer