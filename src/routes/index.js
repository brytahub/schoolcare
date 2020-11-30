import React, {useState, useEffect} from 'react'
import Students from "../components/Students"
import styles from "./styles/index.module.css"

const data = [
    {
        name: "John Jacobs",
        department: "Comp Sci",
        level: 100,
        email: "jjacobs@schoolcare.edu.ng",
        gender: "male"

    },
    {
        name: "Mary Slessor",
        department: "Arts and Crafts",
        level: 300,
        email: "marys@schoolcare.edu.ng",
        gender: "female"

    },
    {
        name: "Okonkwo Ifunanya",
        department: "Hardware Science",
        level: 400,
        email: "oifunanya@schoolcare.edu.ng",
        gender: "female"

    }
]

export default function Homepage() {
    const [students, setStudents] = useState([])
    useEffect(() => {
        // make API request
        setStudents(data)
    }, [])
    return (
        <>
            <div className={styles.header}>Students</div>
            <Students students = {students} />
        </>
    )
}