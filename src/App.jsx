import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import Model from "./model"
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { use } from 'react';


function App() {
  const [count,setcount]=useState(50);
  const [table, settable] = useState(null)
  const [show, setShow] = useState(false);
  const [data ,setdata]=useState({});
  const [add,setadd]=useState(false);
  const newdata= {name:"",emailid:"",location:"",contact:"",qualification:""};
  const handleClose = () => {setShow(false)
    setTimeout(()=>{setadd(false);},100);
  };
  const handleShow = (item) => {setShow(true)

    setdata(item)
    console.log(item)
  };
  
  console.log(count);
  useEffect(()=>{
    fetch('https://67723b93ee76b92dd49181d6.mockapi.io/data/user', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      settable(task);
      // Do something with the list of tasks
    }).catch(error => {
      // handle error
    })
    console.log(count);
  },[count])


    
  

  const nedata=()=>{
    setadd(true);
    handleShow(newdata);
    

 
  }

 


  const deldata=(info)=>{
    fetch(`https://67723b93ee76b92dd49181d6.mockapi.io/data/user/${info.id}`, {
      method: 'DELETE', // or PATCH

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
    handleClose();
    setcount(count+1);
  }
  
  return (
    <div className='text-center'>
    <Container fluid className='p-3'>
    <Table striped bordered hover variant='danger'>
      <thead className=''>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email-id</th>
          <th>Location</th>
          <th>Contact</th>
          <th>Qualification</th>
          <th>Action</th>
          <th>Action2</th>
        </tr>
      </thead>
      <tbody>
        {table && table.map((item,i)=>
        <tr>
        <td>{++i}</td>
        <td>{item.name}</td>
        <td>{item.emailid}</td>
        <td>{item.location}</td>
        <td>{item.contact}</td>
        <td>{item.qualification}</td>
        <td><Button  className='bg-success' onClick={()=>handleShow(item)}>Edit</Button></td>
        <td><Button className='bg-danger' onClick={()=>deldata(item)}>Delete</Button></td>
      </tr>
        )}
        
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@fat</td>
        </tr> */}
      </tbody>
    </Table>

    </Container>
    <Model show={show} hclose={handleClose} hshow={handleShow} info={data} add={newdata}updatedata={setdata} setc={setcount} cnt={count} addd={add} setaddd={setadd}/>
     <Button  className='bg-success' onClick={nedata}>Add</Button> 
    
    {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
     
    </div>
  )
}

export default App
