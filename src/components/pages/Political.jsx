import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../Context";
import styles from "./Political.module.css";

const Political = () => {
  const [pol, setPol] = useState([]);

  useEffect(() => {
    const Political_News =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=eb8130e3f73d443c84defcff1e56ae37";
    fetch(Political_News)
      .then((response) => response.json())
      .then((data) => setPol(data.articles));
  }, []);

  return (
    <div
      style={{
        margin: "20px 7%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {" "}
      {pol.map((n, id) => (
        <div className={styles.card}>
          <p className={styles.title}> From - {n.source.name}</p>
          <p className={styles.description}>{n.description}</p>
          <div className={styles.foot}>
            <button className={styles.btn}>
              <a href={n.url}>Read More</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Political;
