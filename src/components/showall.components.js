import React from 'react'
import Table from 'react-bootstrap/Table'
import MyFilteringComponent from './my-components/filter-component'



export default class ShowAll extends React.Component {

    constructor() {
        super();

        this.state = {
            records: []
        }
    }
    componentDidMount = () => {
        console.log("hey")
        fetch("http://localhost:2000/showAll")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    records: data
                }, () => {console.log("bye")})
            })
    }

    render() {
        return (
            <div>
                <MyFilteringComponent content={countries} />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th> RegNo         </th>
                            <th> Name          </th>
                            <th> Marks         </th>
                            <th> Email         </th>
                        </tr>
                    </thead>
                            <tbody>
                                {this.state.records.map(data => {
                                    return (
                                        <tr>
                                            <td key={data.regno}>
                                                {data.regno}
                                            </td>
                                            <td>
                                                {data.name}
                                            </td>
                                            <td>
                                                {data.marks}
                                            </td>
                                            <td>
                                                {data.emails}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                </Table>
            </div>
        )
                        }
                    }   
