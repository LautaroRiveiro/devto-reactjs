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
          <button className="btn">Últimos</button>
          <button className="btn">Tendencias</button>
          <button className="btn">Promocionales</button>
        </nav>
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