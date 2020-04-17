import React, {useState} from 'react'; 
import Button from 'react-bootstrap/Button';
import {login} from '../actions/auth';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Login = ({user, login}) => {
    
    const [state, setState] = useState({
        username: '',
        password: ''
    }); 

    if (user) {
        return <Redirect to="/home"/>
    }

    return (
        <div>
            <main className="pa4 black-80">
            <form className="measure center">
                <legend className="f2 fw6 ph0 mh0 tc mv0">Login</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f4 mb0" htmlFor="username">Username</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="username"  id="username" onChange={e => setState({...state, username: e.target.value})}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f4 mb0" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="password" name="password"  id="password" onChange={e => setState({...state, password: e.target.value})}/>
                </div>
                <div className="w-100 flex justify-center">
                    <Button variant="warning" className="f4 ph5" onClick={e => 
                        {
                            e.preventDefault(); 
                            login(state); 
                        }}>Login</Button>
                </div>
            </form>
            </main>
        </div>
    ); 
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
}); 

export default connect(mapStateToProps, {login})(Login); 
