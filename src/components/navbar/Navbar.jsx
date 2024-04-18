import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { NewsContext } from "../../Context";
const Navbar = () => {
  const { search, setSearch } = useContext(NewsContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/search`;
    navigate(path);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>Gill Knows</p>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link to="/" className={styles.link}>
                {" "}
                Latest{" "}
              </Link>
            </li>
            <li>
              <Link to="/political" className={styles.link}>
                Political
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBox}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search News here"
        />
        <button
          className={styles.btn}
          onClick={() => {
            routeChange();
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Navbar;
