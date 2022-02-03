import './App.scss'
import Content from "./components/Content"
import LeftSidebar from "./components/LeftSidebar"
import Navigation from "./components/Navigation"
import NavMenu from './components/NavMenu'
import RightSidebar from "./components/RightSidebar"

const App = () => {
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
    </>
  )
}

export default App