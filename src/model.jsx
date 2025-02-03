import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
export default function Model(ob){


const savechange=()=>{
  fetch(`https://67723b93ee76b92dd49181d6.mockapi.io/data/user/${ob.info.id}`, {
    method: 'PUT', // or PATCH
    headers: {'content-type':'application/json'},
    body: JSON.stringify(ob.info)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // Do something with updated task
  }).catch(error => {
    // handle error
  })
  ob.hclose();
  ob.setc(ob.cnt+1);
  
}

const addchange=()=>{
  fetch(`https://67723b93ee76b92dd49181d6.mockapi.io/data/user`, {
    method: 'POST', // or PATCH
    headers: {'content-type':'application/json'},
    body: JSON.stringify(ob.info)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // Do something with updated task
  }).catch(error => {
    // handle error
  })
  ob.hclose();
  ob.setaddd(false);
  ob.setc(ob.cnt+1);
  console.log(ob.cnt);
}
    return(
        <>
        <Modal show={ob.show} onHide={ob.hclose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              defaultValue={ob.info.name}
                type="text"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>ob.updatedata({...ob.info,name:e.target.value})}
              />

<Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                defaultValue={ob.info.emailid}
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>ob.updatedata({...ob.info,emailid:e.target.value})}
              />

<Form.Label>Location</Form.Label>
              <Form.Control
               defaultValue={ob.info.location}
                type="text"
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>ob.updatedata({...ob.info,location:e.target.value})}
              />

<Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                defaultValue={ob.info.contact}
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>ob.updatedata({...ob.info,contact:e.target.value})}
              />

<Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                defaultValue={ob.info.qualification}
                placeholder="name@example.com"
                autoFocus
                onChange={(e)=>ob.updatedata({...ob.info,qualification:e.target.value})}
              />
              
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ob.hclose}>
            Close
          </Button>
          {ob.addd==false?
          <Button variant="primary" onClick={savechange}>
            Save Changes
          </Button>:
            <Button variant="primary" onClick={addchange}>
            Add
          </Button>

            }
        </Modal.Footer>
      </Modal>
        
        </>
    )
}