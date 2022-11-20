import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, onButtonClick }) => {
  return (
    <section>
      <h3>list component</h3>
      {items.map((item) => {
        return (
          <article key={item.id}>
            <p>{item.item}</p>{" "}
            <button
              onClick={() => {
                onButtonClick("toEdit", item.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                onButtonClick("delete", item.id);
              }}
            >
              Delete
            </button>
          </article>
        );
      })}
      <button
        onClick={() => {
          onButtonClick("clear");
        }}
      >
        Clear Iterms
      </button>
    </section>
  );
};

export default List;
