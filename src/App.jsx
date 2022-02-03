import { useState } from 'react'
import './App.scss'
import Content from "./components/Content"
import Drawer from './components/Drawer'
import LeftSidebar from "./components/LeftSidebar"
import Navigation from "./components/Navigation"
import NavMenu from './components/NavMenu'
import RightSidebar from "./components/RightSidebar"

const App = () => {

  const [showDrawer, setShowDrawer] = useState(false)
  const toggle = () => {
    setShowDrawer(!showDrawer)
  }

  return (
    <>
      <Navigation />
      <main className="main-container">
        <LeftSidebar>
          <NavMenu />
        </LeftSidebar>
        <Content />
        <RightSidebar />
      </main>
      {showDrawer && (
        <Drawer close={toggle}>
          <NavMenu />
        </Drawer>
      )}
    </>
  )
}

export default App