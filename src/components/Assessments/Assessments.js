import 'bootstrap/dist/css/bootstrap.min.css';
import React,  {createContext , useContext }  from "react";
import classes from './Assessments.module.scss';
import { Container,Row,Col } from 'react-bootstrap';
import Button from '../Button/Button';
import data from '../../api/odas/assessments.json';

const PostContext = createContext(data);
const ref = React.createRef();
const Assessments = () => {
  return <Container><Row><h1 className={classes.header}>Available</h1></Row></Container>
};



 const Assessment2 = () =>{
  const ContextData = useContext(PostContext); 
  console.log(ContextData.assessments);
  const clickHandler = (e,value) => {
    e.preventDefault();
    alert(value);
  }
  return (
    
    <Container>
      {ContextData.assessments.map((value,index)=>{
        if(value.tag === "Health"){
        return (<Row className="p-2"><Col lg="1" md="1" sm="1" xs ="1" >
        <img className={classes.image} src={process.env.PUBLIC_URL +"/red.jpg"} alt={value.title} />
      </Col>
            <Col lg="9" md="9" sm="11" xs="11" >
             <p className={classes.title}>{value.title}</p>
              <p className={classes.description}>{value.author}</p>
            </Col>
            <Col lg="2" md="2" sm="12" xs="12" >
            <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, value.title)} styles={{type:'primary',width:'full'}} text="Get Started >"  />
           </Col>
        <Row><hr className={classes.horizontalLine}></hr></Row>
      </Row>);
        }
        else if(value.tag === 'Food'){
          return (<Row className="p-2"><Col lg="1" md="1" sm="1" xs ="1" >
        <img src={process.env.PUBLIC_URL +"/light_blue.jpg"} alt={value.title} />
      </Col>
            <Col lg="9" md="9" sm="11" xs="11" >
             <h5 className={classes.title}>{value.title}</h5>
              <p className={classes.description}>{value.author}</p>
            </Col>
            <Col lg="2" md="2" sm="12" xs="12" >
            <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, value.title)} styles={{type:'primary',width:'full'}} text="Get Started >" />
           </Col>
           
        <Row><hr className={classes.horizontalLine}></hr></Row>
      </Row>);
        }
        else if(value.tag === 'Housing'){
         return (<Row className="p-2"><Col lg="1" md="1" sm="1" xs ="1" >
        <img src={process.env.PUBLIC_URL +"/blue.jpg"} alt={value.title} />
      </Col><Col lg="9" md="9" sm="11" xs="11" >
             <h5 className={classes.title}>{value.title}</h5>
              <p className={classes.description}>{value.author}</p>
            </Col>
            <Col lg="2" md="2" sm="12" xs="12" >
            <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, value.title)} styles={{type:'primary',width:'full'}} text="Get Started >" />
           </Col>
        <Row><hr className={classes.horizontalLine}></hr></Row>
      </Row>);
        }
        else {
          return (<Row className="p-2"><Col lg="1" md="1" sm="1" xs ="1" >
         <img src={process.env.PUBLIC_URL +"/green.jpg"} alt={value.title} />
       </Col>
             <Col lg="9" md="9" sm="11" xs="11" >
              <h5 className={classes.title}>{value.title}</h5>
               <p className={classes.description}>{value.author}</p>
             </Col>
             <Col lg="2" md="2" sm="12" xs="12" >
             <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, value.title)} styles={{type:'primary',width:'full',whiteSpace: 'no-wrap'}} text="Get Started >" />
            </Col>
            <Row><hr className={classes.horizontalLine}></hr></Row>
       </Row>);
         }
      })};
      
    </Container>
   );
}

export default Assessments;
export  {Assessment2};