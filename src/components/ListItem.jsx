const ListItem = ({ data }) => {
  return (
    <article className="card list-item">
      <header>
        <h3>{data.title}</h3>
      </header>
      <div>{data.user?.name}</div>
      <div>{data.tag_list?.map(tag => <span key={tag}> #{tag} </span>)}</div>
      <footer></footer>
    </article>
  )
}
export default ListItem