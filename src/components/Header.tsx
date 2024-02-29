import styles from "./Header.module.css"

import igniteLogo from "../assets/Ignite simbol.svg";

export const Header =() => {
    return (
          <div className={styles.header}>
            <img src={igniteLogo} alt="logotipo"/>
          </div>
          
    )
  }
  