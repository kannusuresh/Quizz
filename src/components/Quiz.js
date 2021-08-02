import React, { useEffect, useState } from 'react';
import {Progress, Button} from 'reactstrap';
import DisplayQuestions from './DisplayQuestions';
import questions from '../questions';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
   

//qustions shuffled
function randomShuffle(q)
{
  for(let i=q.length-1 ; i>0 ; i--)
  {
    let ind=Math.floor(Math.random()*(i+1));
    let temp=q[i];
    q[i]=q[ind];
    q[ind]=temp;
  }
  return q;
}



//timer set and finish
function Timer(props)
{
const {time} = props;
return (
  //timer view
  <div className='container'>
    <div className='text-center'>
      {time===0
      ?"Time's up"
      :time+" seconds left"}
      </div>
    <Progress value={100-time} color="danger"/>{/* time limitingset */}
  </div>
);
}

function Quiz(props) {
  const [time, setTime] = useState(100); // time setting
  const [active, setActive] = useState(true); // if time finish submit button works;
  const [problems, setProblems] = useState(null);//list of question radio desc image view shuffled
  const [current, setCurrent] = useState(0);//questions view
  const [selected, setSelected] = useState([null, null, null, null,null]);//radio button selected



  //quiz finish marks view
  const finishQuiz = ()=>
  {
      setActive(false);
      let score=0;
      for(let i=0; i<problems.length; i++)
      {
        if(problems[i].correct===selected[i])
          score+=10;
      }
      alert('Congrats! Your score is'+score+" out of 50");
  }


  //radio selection
  const setUsersChoice = (index, choice) =>
  {
    let t=selected;
    t[index]=choice;
    setSelected(t);
  }

  useEffect(() => {
    if (time === 0) {
      finishQuiz();
    }
    if(active&&time!==0)
    {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    }
  }, [time]);

  useEffect(()=>{
    setProblems(randomShuffle(questions).splice(0,5));     //questions shuffle
  },[]);

  return (
    <div className='container text-white'>
      <Navbar color='black' dark expand='md'>
        <NavbarBrand href='/home'>Quizzer</NavbarBrand>
      
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/quiz'>Play quiz</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href='/log'>Login</NavLink>
            </NavItem> */}
          </Nav>
      
      </Navbar>
      <div className='row'>
        <div className='col-12'>
          <Timer time={time} />
          <br />
          <br />
          <DisplayQuestions
            index={current}
            problem={!problems ? null : problems[current]}
            active={active}
            userChoice={selected[current]}
            setUsersChoice={setUsersChoice}
          />
          {current !== 0 ? (
            <>
              <Button
                color='info'
                onClick={() => {
                  setCurrent(current - 1);
                }}
              >
                Previous
              </Button>{' '}
            </>
          ) : (
            ''
          )}
          {current !== 4 ? (
            <>
              <Button
                color='info'
                onClick={() => {
                  setCurrent(current + 1);
                }}
              >
                Next
              </Button>{' '}
            </>
          ) : (
            ''
          )}
          {
            active?
            <>
              <Button
                color='info'
                onClick={() => {
                  finishQuiz();
                }}
              >
                Submit
              </Button>{' '}
            </>
            :""
          }
        </div>
      </div>
    </div>
  );
}

export default Quiz;