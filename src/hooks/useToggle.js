import { useState } from "react"

const useToggle = (init = false) => {

  const [isActive, setIsActive] = useState(init)
  const toggle = () => {
    setIsActive(!isActive)
  }

  return [isActive, toggle]
}
export default useToggle