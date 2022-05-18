import React from "react";
import { Form } from "react-bootstrap";

const ToDo = () => {
    return (
        <div className="mt-3 container mx-auto">
            <h2 className="text-success text-center">Add a task</h2>
            <div className="w-50 mx-auto">
                <Form>
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
                        <Form.Control name="description" as="textarea" placeholder="Description" rows={3} />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default ToDo;
