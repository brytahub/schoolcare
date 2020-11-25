import React from 'react'
import Sidebar from "../shared/Sidebar"
import Header from "../shared/Header"
import style from "./styles/PageLayout.module.css"

export default function PageLayout(props) {
    return (
        <div className={style.page}>
            <Sidebar />
            <div className={style.pageContent}>
                <Header />
                {props.children}
            </div>
        </div>
    )
}