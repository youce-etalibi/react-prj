import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

export default function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  function showMemes() {
    if (memes) {
      const memesPerRow = 5;
      const rows = [];
      for (let i = 0; i < memes.length; i += memesPerRow) {
        const rowMemes = memes.slice(i, i + memesPerRow);

        const row = (
          <div key={i} style={{ display: "flex", flexWrap: "wrap" }}>
            {rowMemes.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "calc(16.66% - 20px)", // 100% / 6 (6 memes per row)
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "5px",
                  margin: "5px",
                  borderRadius: "10px",
                }}
              >
                <h6 style={{ height: "150px" }}>{item.name}</h6>
                <img
                  src={item.url}
                  style={{
                    width: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    height: "100px",
                  }}
                />
              </div>
            ))}
          </div>
        );

        rows.push(row);
      }

      return (
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            overflowX: "auto",
          }}
        >
          {rows}
        </div>
      );
    }
  }

  return <Fragment><center>{showMemes()}</center></Fragment>;
}
