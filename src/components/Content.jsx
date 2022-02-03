import { useEffect, useState } from "react"
import ListItem from "./ListItem"

const Content = () => {

  const [adverts, setAdverts] = useState(null)

  useEffect(() => {
    setTimeout(async () =>{
      const res = await fetch('https://dev.to/api/articles')
      const data = await res.json()
      console.log({data})
      setAdverts(data)
    }, 2000)
  }, [])

  return (
    <div className="content">
      <header>
        <h1>Se encontraron 4 resultados</h1>
        <nav>
          <button className="btn">Últimos</button>
          <button className="btn">Tendencias</button>
          <button className="btn">Promocionales</button>
        </nav>
      </header>
      <main>
        {adverts?.map((advert)=>(
          <ListItem key={advert.id} data={advert} />
        ))}
      </main>
    </div>
  )
}
export default Content