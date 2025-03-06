import React from "react";

const data = [
  { id: 1, name: "Harry" },
  { id: 2, name: "Ron" },
  { id: 3, name: "Flitwick" },
  { id: 4, name: "Sirius" },
  { id: 5, name: "Ludo" },
];

const CardList = () => {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "20px",
        borderRadius: "10px",
        width: "70%",
        margin: "auto",
        textAlign: "center",
        backgroundColor: "orange",
       gap: "50px"
      }}
    >
      {" "}
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
            backgroundColor: "white",
            display: "inline-flex",
            width: "100px",
            height: "100px"
            
            
          }}
        >
          {" "}
          {item.name}{" "}
        </div>
      ))}{" "}
    </div>
  );
};

export default CardList;
