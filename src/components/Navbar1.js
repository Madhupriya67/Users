import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router,NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
// import leaderboard from '../leaderboard';
// import Dashboard from '../Dashboard';
// import Personaldetails from '../Personaldetails';
// import changepassword from '../changepassword';
// import Calender from '../Calender';

class Navbar1 extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
  return (
    <div className="Navbar1">  
        <Router>
        <Navbar dark color="dark" expand="lg">
          <div class="container-fluid">
          <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/"><img src='assets/images/gitamlogo.png' height="50" width="50"/>GITAM Bengaluru</NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <span className="tab1"></span>
                    {/*<Nav navbar>
                            <NavItem>
                                <NavLink align="left" className="nav-link active" tag={Link}  to='/Dashboard' style={{color:"lightgreen"}}><span class="fa fa-home fa-lg"></span>&nbsp;Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink align="left" className="nav-link " tag={Link} to='/personaldetails' style={{color:"lightgreen"}}><span class="fa fa-info fa-lg"></span>&nbsp;Personal Details</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink align="left" className="nav-link" tag={Link} to='/Calender' style={{color:"lightgreen"}}><span class="fa fa-calendar"></span>&nbsp;Calender</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink align="left" className="nav-link " tag={Link} to={'/leaderboard'} style={{color:"lightgreen"}}><span class="fa fa-trophy"></span>&nbsp;Leader Board</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink align="left" className="nav-link " tag={Link} to='/changepassword' style={{color:"lightgreen"}}><span class="fa fa-key"></span>&nbsp;Change Password</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink align="left" className="nav-link" tag={Link} to='/logout' style={{color:"lightgreen"}}><span class="fa fa-sign-out"></span>&nbsp;Logout</NavLink>
                            </NavItem>
                    </Nav>*/}
                </Collapse>
          </div>  
                <span className="col-xs-6 welcome">Welcome<br></br>Name</span><div className="col-xs-6"><img src='assets/images/gitamlogo.png' height="50" width="50"></img></div>
        </Navbar>
        {/*<Switch>
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/leaderboard" component={leaderboard} />
            <Route exact path="/Calender" component={Calender}/>
            <Route exact path="/personaldetails" component={Personaldetails} />
            <Route exact path="/changepassword" component={changepassword} />
        </Switch>*/}
        </Router>
        </div>
        );
}
}

export default Navbar1;
