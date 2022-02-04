import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import ListItem from "./ListItem"

const Content = () => {

  const getAdverts = () => {
    return fetch('https://dev.to/api/articles').then(response => response.json())
  }
  const { data: adverts, isFetching } = useQuery('adverts', getAdverts)

  return (
    <div className="content">
      <header>
        <h1>Se encontraron 4 resultados</h1>
        <nav>
          <button>Últimos</button>
          <button>Tendencias</button>
          <button>Promocionales</button>
        </nav>
        {/* TODO: Mover al dropdown */}
        <select className="content-dropdown">
          <option value="last">Últimos</option>
          <option value="trends">Tendencias</option>
          <option value="promos">Promocionales</option>
        </select>
      </header>
      <main>
        {isFetching ? "Cargando..."
          : adverts && adverts.map((advert) => (
            <ListItem key={advert.id} data={advert} />
          ))}
      </main>
    </div>
  )
}
export default Content