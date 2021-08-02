import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';  
import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import {useHistory } from 'react-router-dom';
function Home(props)
{
  const history=useHistory();
  function logout(){
    history.push('/')
  }
  return (
    
    <div className='container'>
      <Navbar color='black' dark expand='md'>
        <NavbarBrand href='/home'>Quizzer</NavbarBrand>
      
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/quiz'>Play quiz</NavLink>
            </NavItem>
             {/* <NavItem>
              <NavLink href='' onClick={logout} >Logout</NavLink>
            </NavItem>  */}
          </Nav>
      
      </Navbar>
      <br />
      <br />
      <br />
      <div className='row text-white text-center heading'>
        A platform that allows you to add various questions in a question bank
        and play a quiz made up of random questions.
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='row text-center'>
        <div className='col-12'>
          <Link to='/quiz'>
            <Button color='info'>Play quiz</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;