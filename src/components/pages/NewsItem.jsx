import React, { useContext } from "react";
import styles from "./NewsItem.module.css";
import { NewsContext } from "../../Context";

const NewsItem = () => {
  const { allNews } = useContext(NewsContext);
  console.log("console in NewsItem" + allNews);
  return (
    <>
      {" "}
      {allNews.map((n, id) => (
        <div className={styles.card}>
          <img className={styles.img} src={n.urlToImage} alt="image" />
          <p className={styles.title}>{n.title}</p>

          <div className={styles.foot}>
            <button onClick={() => {}} className={styles.btn}>
              Read More
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsItem;
