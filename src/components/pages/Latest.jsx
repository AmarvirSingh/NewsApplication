import React, { useContext, useState } from "react";
import NewsItem from "./NewsItem";
import { NewsContext } from "../../Context";
import styles from "./NewsItem.module.css";

/*

Make Card in center after clicking on the button and make rest of the cards disappear


*/

const Latest = () => {
  const { allNews } = useContext(NewsContext);
  const [showMore, setShowmore] = useState(false);
  const [newId, setNewId] = useState(0);

  return (
    <>
      <div className={styles.container}>
        <>
          {" "}
          {allNews.map((n, id) => (
            <div key={id}>
              <div className={styles.card}>
                <img
                  className={styles.img}
                  src={n.urlToImage}
                  alt="image"
                  loading="lazy"
                />

                <p className={styles.title}>{n.title.slice(0, 60)}</p>
                <div className={styles.foot}>
                  <button
                    onClick={() => {
                      setShowmore(!showMore);
                      setNewId(id);
                    }}
                    className={styles.btn}
                  >
                    {showMore && id == newId ? "Close" : "Read More"}
                  </button>
                </div>
              </div>
              <div className={showMore && newId == id ? styles.content : null}>
                {showMore && id == newId ? (
                  <p className={styles.descrip}>{n.description}</p>
                ) : null}
              </div>
            </div>
          ))}
        </>
      </div>
    </>
  );
};

export default Latest;
