import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items }) => {
  return (
    <section>
      <h3>list component</h3>
      {items.map((item) => {
        return (
          <article key={item.id}>
            <p>{item.item}</p> <button onClick={() => {}}>Edit</button>
            <button onClick={() => {}}>Delete</button>
          </article>
        );
      })}
      <button>Clear Iterms</button>
    </section>
  );
};

export default List;
