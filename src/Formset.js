import React,{useState} from 'react'
import uplogo from './upload-48.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import { Row ,Col,Form,Button,Modal, Container} from 'react-bootstrap';
const Formset = () => {
const[groupList,setGroupList] = useState([{name_g:"",mobile_g:"",g_id:"",groupFile:"" }]);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const groupAddClick = () => {
  setGroupList([...groupList,{name_g:"",mobile_g:"",g_id:"",groupFile:""}]);
  };

const groupRemoveClick=index=>{
const list = [...groupList];
list.splice(index, 1);
setGroupList(list);
}
  return (
   <>
 <Container>
 <Row>
{groupList.map((x,i)=>{
    return<>


     <Form.Group as={Col} md="2" >
        <Form.Label>Name:<span className='restrict'>*</span></Form.Label>
        <Form.Control
         name="lastName"
         placeholder="Enter S.N Name"
         name="name_g"
         value={x.serial_na}
         onChange={e=>{
          setGroupList([...groupList,{name_g:e.target.value}])
         }}
      />
      </Form.Group>
      <Form.Group as={Col} md="2" >
        <Form.Label>Mobile No.:<span className='restrict'>*</span></Form.Label>
        <Form.Control
         name="mobile_g"
         placeholder="Enter Name"
         value={x.name}
         onChange={e=>{
          setGroupList([...groupList,{mobile_g:e.target.value}])
         }}
      />
      </Form.Group>
      <Form.Group as={Col} md="2" >
        <Form.Label>Gender<span className='restrict'>*</span></Form.Label>
        <Form.Select  name="gender_g" onChange={e=>{
          setGroupList([...groupList,{g_id:e.target.value}])
        }}>
      <option>Select</option>
      <option value="male" >Male</option>
      <option value="Female">Female</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} md="2" >
        <Form.Label>ID Proof<span className='restrict'>*</span></Form.Label>
        <Form.Control
        placeholder="Enter ID Number"
        name="g_id"
        value={x.brand}
        onChange={e=>{
          setGroupList([...groupList,{groupFile:e.target.value}])
        }}
      />
      </Form.Group>
      <Form.Group as={Col} md="2" >
        <Form.Label>Document<span className='restrict'>*</span></Form.Label>
        <Form.Control
        type='file'
        name='groupFile'
        onChange={e=>{
         
        }}
      />
      </Form.Group>
   <Form.Group as={Col} md="2" >
   <Form.Label></Form.Label>
   <Row>
    {i!==0?<div className='mt-3' style={{backgroundColor:"red",padding:"2px",marginLeft:"4px",color:"white",borderRadius:"50%",height:"25px",width:"25px",textAlign:"center"}} onClick={groupRemoveClick}><FontAwesomeIcon icon={faMinus} /></div>:""}
    {i===0?<div className='mt-3' style={{backgroundColor:"green",padding:"2px",marginLeft:"4px",color:"white",borderRadius:"50%",height:"25px",width:"25px",textAlign:"center"}} onClick={groupAddClick}><FontAwesomeIcon icon={faPlus} style={{marginBottom:"2px"}} /></div>:""}
    <div className='mt-3' style={{width:"30px",marginLeft:"12px"}} onClick={handleShow}>
       <img src={uplogo} style={ {width:"20px"}}/>
      </div>
      </Row>
    </Form.Group>

    </>
})}
</Row>
 </Container>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

   </>
  )
}

export default Formset
