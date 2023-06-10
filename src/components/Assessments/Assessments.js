import 'bootstrap/dist/css/bootstrap.min.css';
import React,  {createContext , useContext }  from "react";
import classes from './Assessments.module.scss';
import { Container,Row,Col } from 'react-bootstrap';
import Button from '../Button/Button';

export const Context = createContext('Default Value');

const ref = React.createRef();

const Assessments = () => {

  return (
    <Container>
      <h1>Assessments Test</h1>
    </Container>
   )
};



 const Assessment2 = () =>{
  const clickHandler = (e,value) => {
    e.preventDefault();
    alert(value);
  }
  
  return (
    <Container>
        <Row >
          
          <Col lg="1" md="1" sm="1" xs ="1" className="p-2">
            <img src={process.env.PUBLIC_URL +"/red.jpg"} alt="Diabetes Risk" />
          </Col>
          
          <Col lg="11" sm="11" xs="11">
            <Row>
            <Col lg="8" md="8" sm="8" xs="8" className="p-2">
             <h5 className={classes.title}>Diabetes Risk</h5>
              <p className={classes.description}>Los Angeles County Department of Health Services</p>
            </Col>
            <Col lg="3" md="3" sm="3" xs="3" className="p-2">
            <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, "Diabetes Risk")} value="Diabetes Risk" text="click here" styles="{type:primary,rounded:true}" />
           </Col>
           </Row>
        </Col>
        </Row>
        <Row >
          
          <Col lg="1" md="1" sm="1" xs ="1" className="p-2">
            <img src={process.env.PUBLIC_URL +"/red.jpg"} alt="Depression" />
          </Col>
          
          <Col lg="11" sm="11" xs="11">
            <Row>
            <Col lg="8" md="8" sm="8" xs="8" className="p-2">
             <h5 className={classes.title}>Depression</h5>
              <p className={classes.description}>Los Angeles County Department of Health Services</p>
            </Col>
            <Col lg="3" md="3" sm="3" xs="3" className="p-2">
            <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, "Depression")} value="Diabetes Risk" text="click here" styles="{type:primary,rounded:true}" />
           </Col>
           </Row>
        </Col>
        </Row>
        <Row >
          
          <Col lg="1" md="1" sm="1" xs ="1" className="p-2">
            <img src={process.env.PUBLIC_URL +"/light_blue.jpg"} alt="Food Insecurity"  />
          </Col>
          
          <Col lg="11" sm="11" xs="11">
            <Row>
            <Col lg="8" md="8" sm="8" xs="8" className="p-2">
             <h5 className={classes.title}>Food Insecurity</h5>
              <p className={classes.description}>Los Angeles County Department of Health Services</p>
            </Col>
            <Col lg="3" md="3" sm="3" xs="3" className="p-2">
            <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, "Food Insecurity")} value="Diabetes Risk" text="click here" styles="{type:primary,rounded:true}" />
           </Col>
           </Row>
        </Col>
        </Row>
        <Row >
          
          <Col lg="1" md="1" sm="1" xs ="1" className="p-2">
            <img src={process.env.PUBLIC_URL +"/blue.jpg" } alt="Housing Helper"/>
          </Col>
          
          <Col lg="11" sm="11" xs="11">
            <Row>
            <Col lg="8" md="8" sm="8" xs="8" className="p-2">
             <h5 className={classes.title}>Housing Helper</h5>
              <p className={classes.description}>Los Angeles County Department of Health Services</p>
            </Col>
            <Col lg="3" md="3" sm="3" xs="3" className="p-2">
            <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, "Housing Insecurity")} value="Diabetes Risk" text="click here" styles="{type:primary,rounded:true}" />
           </Col>
           </Row>
        </Col>
        </Row>
       
       
        <Row >
          
          <Col lg="1" md="1" sm="1" xs ="1" className="p-2">
            <img src={process.env.PUBLIC_URL +"/red.jpg"} alt="CalFresh and Medi-cal" />
          </Col>
          
          <Col lg="11" sm="11" xs="11">
            <Row>
            <Col lg="8" md="8" sm="8" xs="8" className="p-2">
             <h5 className={classes.title}>CalFresh and Medi-Cal Eligibility</h5>
              <p className={classes.description}></p>
            </Col>
            <Col lg="3" md="3" sm="3" xs="3" className="p-2">
            <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, "CalFresh and Medi-Cal Eligibility")}  text="click here" className="white-space: nowrap" />
           </Col>
           </Row>
        </Col>
        </Row>
        <Row >
          
          <Col lg="1" md="1" sm="1" xs ="1" className="p-2">
            <img src={process.env.PUBLIC_URL +"/blue.jpg"} alt="HIV Risk"/>
          </Col>
          
          <Col lg="11" sm="11" xs="11">
            <Row>
            <Col lg="8" md="8" sm="8" xs="8" className="p-2">
             <h5 className={classes.title}>HIV Risk</h5>
              <p className={classes.description}>Northeast Valley Health Corporation
</p>
            </Col>
            <Col lg="3" md="3" sm="3" xs="3" className="p-2">
            <Button type="button" ref = {ref} onButtonClick={(event) => clickHandler(event, "HIV Risk")}  text="click here" className="white-space: nowrap" />
           </Col>
           </Row>
        </Col>
        </Row>

    </Container>
  );
}

export default Assessments;
export  {Assessment2};