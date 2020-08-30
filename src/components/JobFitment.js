import React from 'react';
import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';
import ReactSpeedometer from "react-d3-speedometer";
function JobFitment() {
  return (
    <div className="JobFitment">  
		<Card className="Rounded p-3">
                <CardSubtitle align="left">Job Fitment</CardSubtitle>
                <hr></hr>
                <br></br>
                <ReactSpeedometer responsive
                  maxValue={100}
                  value={75}
                  segments={6}
                />
                <CardText>
                Description : You are 75 % suitable
                to the industry with your current performance
                in all the tests conducted by T&P
                </CardText>
              </Card>
    </div>
    );
}
export default JobFitment;