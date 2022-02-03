import './App.scss'
import Navigation from "./components/Navigation"
import Content from "./components/Content"
import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"

const App = () => {
  return (
    <>
      <Navigation />
      <main className="main-container">
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </main>
    </>
  )
}

export default App