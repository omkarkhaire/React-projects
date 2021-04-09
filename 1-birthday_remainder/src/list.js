import React from "react";

export const List = (props) => {
  const [people, setpeople] = React.useState(props.people);

  //event handler
  const clearitem = (id) => {
    let newpeople = people.filter((person) => person.id != id);
    setpeople(newpeople);
  };

  return (
    <>
      <h4 style={{ marginTop: "20px" }}>
        {people.length} Important Birthday's To remember
      </h4>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="item">
            <div key={id} className="person">
              <img src={image} alt={name} />
              <div className="info">
                <h5>{name}</h5>
                <h6>{age}</h6>
              </div>
            </div>
            <button onClick={() => clearitem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setpeople([])}>
        Clear all
      </button>
    </>
  );
};
