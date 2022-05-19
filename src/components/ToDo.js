import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "./Loading";

const ToDo = () => {
    const [user] = useAuthState(auth);
    const {
        data: tasks,
        isLoading,
        refetch,
    } = useQuery("tasks", () =>
        fetch(`http://localhost:5000/task/${user?.email}`).then((res) =>
            res.json()
        )
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        const taskName = e.target.name.value;
        const description = e.target.description.value;
        const task = {
            taskName,
            description,
            email: user?.email,
        };
        fetch("http://localhost:5000/task", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(task),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Task is added successfully");
                    e.target.reset();
                    refetch();
                }
            });
    };

    const handleCompleted = (id) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({textDecoration: true})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount) {
                toast.success("Task is successfully marked as completed");
                refetch();
            }
        })

    }

    return (
        <div className="mt-3 container mx-auto">
            <h2 className="text-success text-center">Add a task</h2>
            <div className="w-50 mx-auto">
                <Form onSubmit={handleAddTask}>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your Task"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control
                            name="description"
                            as="textarea"
                            placeholder="Description"
                            required
                            rows={3}
                        />
                    </Form.Group>
                    <Button variant="success" className="w-25" type="submit">
                        Add Task
                    </Button>
                </Form>
            </div>

            <hr />
            <h2 className="text-center text-success">Your Tasks</h2>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Task Name</th>
                        <th>Description</th>
                        <th className="text-center">Completed</th>
                        <th className="text-center">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map(({ _id, taskName, description, textDecoration }, index) => (
                        <tr key={_id}>
                            <td>{index + 1}</td>
                            <td className={`text-decoration-${textDecoration ? 'line-through' : 'none'}`}>{taskName}</td>
                            <td>{description}</td>
                            <td className="text-center">
                                <button onClick={() => handleCompleted(_id)} className="btn btn-success">
                                    Completed
                                </button>
                            </td>
                            <td className="text-center">
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ToDo;
