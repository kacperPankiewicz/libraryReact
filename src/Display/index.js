import React, { Component, useState } from 'react';
import { Table, Container, Row, Col, Form } from 'react-bootstrap';
import TableElement from '../TableElement';
import axios from 'axios'



export default class index extends Component {
    constructor() {
        super();
        this.state = {
            ro: [],
            auth: "",
            titl: ""
        };

    }


    componentDidMount = () => {
        axios.get('http://localhost:5000').then(resp => {
            this.setState({
                ro: resp.data.rows,
                auth: [...this.state.auth],
                titl: [...this.state.titl]
            });


        });

    };

    render() {
        const authorListener = (e) => {
            this.setState({
                auth: e.target.value,
            });
            initSort();


        }
        const titleListener = (e) => {
            this.setState({
                titl: e.target.value
            });
            initSort();

        }
        const initSort = () => {
            axios.get('http://localhost:5000').then(resp => {
                var r = [...resp.data.rows];
                if (this.state.auth.length > 0) {
                    r = r.filter((action) => action.author.includes(this.state.auth))
                }
                if (this.state.titl.length > 0) {
                    r = r.filter((action) => action.title.includes(this.state.titl))
                }
                this.setState({
                    ro: r,
                });
            });
        }



        return (
            <Container className="mt-3">

                <Row>
                    <Col><Form.Control onChange={(e) => authorListener(e)}
                        type="text" placeholder="Author" /></Col>
                    <Col><Form.Control onChange={(e) => titleListener(e)}
                        type="text" placeholder="Title" /></Col>
                    <Col>3</Col>
                </Row>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Title</th>
                            <th >-</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.ro.map(item => <TableElement id={item.id} author={item.author} title={item.title} />)}


                    </tbody>
                </Table>
            </Container>
        )
    }
}
