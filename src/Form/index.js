
import React, { Component,useState } from 'react'
import { Col, Row, Container, Form,Button } from 'react-bootstrap'
import photo from '../books.png';
import axios from 'axios'



function Form2() {
    const [titl,setTitle] = useState("");
    const [auth,setAuth] = useState("");
    
    const addHandler = () =>{
     
        axios.post('http://localhost:5000',{
            author:auth,
            title:titl
        }).then(resp=>{
            window.location.reload(true);
        }) ; 
    }
        return (
            <Container className="mt-5 text-light">
                <Row >
                    
                   
                    <Col  className="col-2"><img src={photo} className="img-fluid " alt="books"/></Col>
                    <Col  className="col-10 border border-2 rounded border-warning bg-dark " style={{height:"fit-content"}}>
                            <Row className="mt-2">
                                <Col ><Form.Label><h5>Author</h5></Form.Label>
                                    <Form.Control onChange={(e)=>setAuth(e.target.value)}  label="1" type="text" placeholder="Author"/>
                                </Col>
                                <Col>
                                    <Form.Label><h5>Title</h5></Form.Label>
                                    <Form.Control onChange={(e)=>setTitle(e.target.value)}  label="1" type="text" placeholder="Title"/>
                                </Col>
                            </Row>
                            <Row className="mt-2 mb-2 text-right">
                                <Col><Button className="btn btn-light" onClick={addHandler} style={{float:"right"}}>Add</Button></Col>
                                
                            </Row>
                        </Col>
                </Row>
               
                
                    
               
            
            </Container>
        );
    }



export default Form2;