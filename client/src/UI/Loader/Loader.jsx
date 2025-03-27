import React from 'react'
import css from "./Loader.module.css";
import svg1 from "../../assets/icons/quiz-first.svg";
import svg2 from "../../assets/icons/quiz-second.svg";


const MainLoader = () => {
  return (
    <div className={css.loader}>
        <div className={css.itemBox}>
    {[...Array(8)].map((_, i) => (
      <img
        key={i}
        src={i % 2 === 0 ? svg1 : svg2} 
        className={css.loaderItem}
        style={{ "--i": i }}
        alt="loading"
      />
    ))}
        </div>
  </div>
  )
}

export default MainLoader

