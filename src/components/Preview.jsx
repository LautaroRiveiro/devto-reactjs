import { GrFormClose } from "react-icons/gr"

const Preview = () => {

  // TODO: const { currentAdvert, clearCurrentAdvert } = useAdverts()
  const clearCurrentAdvert = () => {
    console.log("close")
  }

  return (
    <article className="card preview">
      <header>
        {/* TODO: limitar a 100 palabras */}
        <h3>Title</h3>
        <button className="preview-close" onClick={clearCurrentAdvert}>
          <GrFormClose />
        </button>
      </header>
      <div className="preview-body">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, officia facere illo non dolore dignissimos laboriosam corrupti quidem incidunt, perspiciatis atque. Nulla quasi recusandae nobis quae, soluta optio at sed?</p>
      </div>
      <footer>
        <button className="btn">Ver completa</button>
        <button className="btn">Postularse</button>
      </footer>
    </article>
  )
}
export default Preview