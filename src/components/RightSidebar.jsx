import Preview from "./Preview";

const RightSidebar = () => {

  // TODO: Remove
  const current = {};

  return (
    <aside className="right-sidebar">
      {current ? (
        <Preview />
      ): (
        <h1>Info</h1>
        )}
    </aside>
  )
}
export default RightSidebar