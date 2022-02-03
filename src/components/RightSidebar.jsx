import Preview from "./Preview";

const RightSidebar = () => {

  // TODO: Remove
  const current = null;

  return (
    <aside className="right-sidebar">
      {current ? (
        <Preview />
      ) : (
        <>
          <div className="card right-sidebar-info-1">
            <p>
              <img src="https://picsum.photos/300/300" alt="info-1 cover" />
            </p>
            <h2>
              <a href="/">Hack the planet</a>
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum nihil obcaecati, odit mollitia corrupti rem. Iste, aspernatur atque amet accusantium eos, ullam minima inventore suscipit, aperiam cumque necessitatibus et.
              <span><a href="/"> Join the navi</a></span>
            </p>
          </div>

          <div className="card right-sidebar-info-2">
            <header>
              <h3>Title</h3>
              <a href="/">See all</a>
            </header>
            <ul>
              {[1, 2, 3].map((i) => (
                <li key={i}>
                  <a href="/">Text</a>
                  {i % 2 === 1
                    ? <span>new</span>
                    : <small>1 comment</small>
                  }
                </li>
              ))
              }
            </ul>
          </div>
        </>
      )}
    </aside>
  )
}
export default RightSidebar