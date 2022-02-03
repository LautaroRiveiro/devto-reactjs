const ListItem = ({data}) => {
  return (
    <article className="list-item">
      <header>
        <img src={data.social_image} alt="article" />
      </header>
      <div>{data.user?.name}</div>
      <h3>{data.title}</h3>
      <div>{data.tag_list?.map(tag => <span key={tag}> #{tag} </span> )}</div>
      <footer></footer>
    </article>
  )
}
export default ListItem