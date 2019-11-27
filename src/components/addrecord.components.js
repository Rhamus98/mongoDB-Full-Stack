import React from 'react';
import Form from 'react-bootstrap/Form';

export default class AddRecord extends React.Component{
    constructor(){
    super()
        this.state={
            records:[]
        }
    }
    addRecord = (e) => {
        e.preventDefault()
        this.setState({
            regno:document.getElementById("regno").value,
            name:document.getElementById("name").value,
            marks:document.getElementById("marks").value,
            email:document.getElementById("email").value,


        }, () => {
            let data = {
                "regno":this.state.regno,
                "name":this.state.name,
                "marks":this.state.marks,
                "role":this.state.role
            }
            fetch(`http://localhost:2000/post-data`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.status === 200) {
                        console.log('User Created');
                        window.location.replace(`http://localhost:3000/showAll`);
                    } else {
                        alert('Failed to add record');
                    };
                })
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="m-2">Add Record Page</h1>
                        <div>
                            <Form onSubmit={this.addRecord}>
                                <Form.Group controlId="regno">
                                    <Form.Label>Registration Number</Form.Label>
                                    <Form.Control type="input" id="regno" placeholder="Enter Registration Number" />
                                </Form.Group>

                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="input" id="name" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group controlId="marks">
                                    <Form.Label>Marks</Form.Label>
                                    <Form.Control type="input" id="marks" placeholder="Enter Marks" />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="input" id="email" placeholder="Enter Email" />
                                </Form.Group>

                                <button className="btn btn-primary" type="submit">
                                    Submit
                    </button>
                            </Form><br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
