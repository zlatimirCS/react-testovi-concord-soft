import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, onButtonClick }) => {
  return (
    <section className="grocery-container">
      {items.map((item) => {
        return (
          <article key={item.id} className="grocery-item">
            <p className="title">{item.item}</p>
            <div className="btn-container">
              <button
                className="edit-btn"
                onClick={() => {
                  onButtonClick("toEdit", item.id);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  onButtonClick("delete", item.id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
      <button
        className="clear-btn"
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
