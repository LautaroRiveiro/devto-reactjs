import './App.scss'
import Content from "./components/Content"
import LeftSidebar from "./components/LeftSidebar"
import Navigation from "./components/Navigation"
import RightSidebar from "./components/RightSidebar"

const App = () => {
  return (
    <>
      <Navigation />
      <div className="app-container">
        <LeftSidebar/>
        <Content />
        <RightSidebar />
      </div>
    </>
  )
}

export default App