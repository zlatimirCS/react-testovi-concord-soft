import React, { useReducer } from 'react';

const clearBirthdays = () => {
  return []
}

const List = (props) => {
  const [birthdays, dispatch] = useReducer(clearBirthdays, props.data || [])

  const renderList = () => {
    let output = [];

    birthdays.forEach(b => {
      output.push(
        <article key={b.id} className="person">
          <img src={b.image} alt={b.name} />
            <div>
              <h4>{b.name}</h4>
              <p>{b.age} year{b.age > 1 ? "s" : ""} old</p>
            </div>
        </article>
      )
    })

    return output;
  }

  return (
    <>
      <h3>{birthdays.length} birthdays today</h3>
      {renderList()}
      <button type="button" onClick={dispatch}>Clear All</button>
    </>
  );
};

export default List;
