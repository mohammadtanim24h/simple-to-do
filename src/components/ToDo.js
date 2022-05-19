import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "./Loading";

const ToDo = () => {
    const [user] = useAuthState(auth);
    const { data: tasks, isLoading, refetch } = useQuery("tasks", () =>
        fetch(`http://localhost:5000/task/${user?.email}`).then((res) =>
            res.json()
        )
    );

    if(isLoading) {
        return <Loading></Loading>
    }

    console.log(tasks);

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
        </div>
    );
};

export default ToDo;
