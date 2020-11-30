import React, {useState} from 'react';
import { Form, Input, Button } from 'antd';
import styles from "./styles/create.module.css"

const departments = [
    {
        name: "Computer Science",
        id: 1
    },
    {
        name: "Food Science",
        id: 2
    },
    {
        name: "Agricultural Science",
        id: 3
    },
]

export default function StudentsCreate() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        gender: "",
        department: "",
        level: ""
    })

    function handleChange(e) {
        const {value, name} = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const {name, email, gender, department, level} = formState
        const data = {
            name, email, gender, department, level
        }
        console.log(data)
    }
    return (
        <>
             <form
             onSubmit={handleSubmit}
            >
                <Form.Item
                    label="Full name"
                    name="name"
                >
                    <Input onChange={handleChange} size="large" value={formState.name} name="name" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input type="email" onChange={handleChange} size="large" value={formState.email} name="email" />
                </Form.Item>
                <Form.Item
                    label="Level"
                    name="level"
                >
                    <Input type="number" onChange={handleChange} size="large" value={formState.level} name="level" />
                </Form.Item>
                <Form.Item
                    label="Gender"
                    name="gender"
                >
                    <select name="gender" className="ant-input ant-input-lg" value={formState.gender} size="large" onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </Form.Item>
                <Form.Item
                    label="Department"
                    name="department"
                >
                    <select name="department" className="ant-input ant-input-lg" value={formState.department} size="large" onChange={handleChange}>
                        <option value="">Select Department</option>
                        {
                            departments && departments.map(department => (
                                <option key={department.id} value={department.id}>{department.name}</option>
                            ))
                        }
                    </select>
                </Form.Item>
                <Button type="primary" size="large" htmlType="submit">Add student</Button>
            </form>
        </>
    )
}