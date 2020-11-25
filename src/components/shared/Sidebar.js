import React from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faBook, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import styles from "./styles/Sidebar.module.css"
import Logo from "../../assets/logo-image.png"

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <img src = {Logo} alt="Schoolcare Logo" className={styles.logo} />
            <div>
                <div className={styles.menuHeader}>STUDENTS</div>
                <ul className={styles.menu}>
                    <li className={`${styles.menuItem} ${styles.menuActive}`}>
                        <Link to="/">
                            <FontAwesomeIcon className={styles.menuIcon} icon={faUserFriends} />
                            Students
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/subjects">
                            <FontAwesomeIcon className={styles.menuIcon} icon={faBook} />
                            Subjects
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/classrooms">
                            <FontAwesomeIcon className={styles.menuIcon} icon={faBuilding} />
                            Classrooms
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link to="/grades">
                            <FontAwesomeIcon className={styles.menuIcon} icon={faGraduationCap} />
                            Grades
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}