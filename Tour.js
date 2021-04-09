import React from "react";

export const Tour = ({ id, image, info, price, name, removetour }) => {
  const [readmore, setreadmore] = React.useState(false);

  //   const changearray=(id)=>{
  //       const

  //   }
  return (
    <div className="touritem">
      <img src={image} alt={image} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4
            className="tour-price"
            style={{
              backgroundColor: "rgb(8, 157, 243)",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            ${price}
          </h4>
        </div>
        <div className="text-info">
          <p>
            {readmore ? info : info.substring(0, 201)}...
            <span
              style={{ color: "rgb(8, 157, 243)", cursor: "pointer" }}
              onClick={() => {
                setreadmore(!readmore);
              }}
            >
              {!readmore ? "Read more" : "Read less"}
            </span>
          </p>
        </div>
        <button
          style={{
            border: "2px solid rgb(8, 157, 243)",
            color: "white",
            borderRadius:"5px",
            padding: "5px",
            margin: " 5px auto 5px auto",
            width: "200px",
            textAlign: "center",
            display: "block",
            backgroundColor: "rgb(8, 157, 243)",
          }}
          onClick={() => {
            removetour(id);
          }}
        >
          Not Intrested
        </button>
      </footer>
    </div>
  );
};
