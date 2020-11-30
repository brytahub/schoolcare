import React from 'react';
import styles from "./styles/index.module.css"

export default function Students({students}) {
    return (
        <>
        {
            students && students.length > 0 ? (
                <table className={styles.table}>
                    <thead className={styles.tableHead}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Course</th>
                            <th>Level</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {
                          students.map(student => (
                              <tr>
                                  <td>{student.name}</td>
                                  <td>{student.email}</td>
                                  <td>{student.gender}</td>
                                  <td>{student.department}</td>
                                  <td>{student.level}</td>
                              </tr>
                          ))  
                        }
                    </tbody>
                </table>
            ) : (
                <div>No student found yet</div>
            )
        }
        </>
    )
}