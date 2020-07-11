import React,{useState,useEffect} from 'react';
import { Card, Container, Button } from 'react-bootstrap';

function App() {
  const [date,setDate] = useState(null);
  const[day,setday] =useState(null);
  const[month,setmonth] =useState(null);
  const[year,setyear] =useState(null);
  useEffect(()=>{
    if(date){
      const val = date.date.split('-');
      setday(val[0]);
      setmonth(val[1]);
      setyear(val[2]);
      console.log("val=="+val)
        }
  },[day,month,year,date])

  console.log(date);
 const  getDateInfo =() =>{
  fetch('https://jsonmock.hackerrank.com/datetime')
  .then(response => response.json())
    .then(data => setDate(data));
 }
  return (
<Container className="text-center">
<h1 className="text-center">Date API</h1>
<br/>
<Button className="text-center" variant="primary" onClick={getDateInfo}>Display Date</Button>
<br/><br/>
  <Card>
    <Card.Body>
      <Card.Text>Day: {day} </Card.Text>
      <Card.Text>Month: {month} </Card.Text>
      <Card.Text>Year: {year} </Card.Text>
    </Card.Body>
  </Card>
  </Container>
  );
}

export default App;
