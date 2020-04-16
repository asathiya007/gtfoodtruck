import React, {useState} from 'react'; 
import Button from 'react-bootstrap/Button';

const Register = () => {
    const [state, setState] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPW: '',
        balance: 0, 
        role: ''
    }); 

    console.log(state);
    return (
        <div>
            <main className="pa4 pb0 black-80">
            <form className="measure center">
                <legend className="f2 fw6 ph0 mh0 tc mv0">Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f4 mb0" htmlFor="username">Username</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="username"  id="username" onChange={e => setState({...state, username: e.target.value})}/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f4 mb0" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="email" name="email-address"  id="email-address" onChange={e => setState({...state, email: e.target.value})}/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f4 mb0" htmlFor="firstname">First Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="firstname"  id="firstname" onChange={e => setState({...state, firstName: e.target.value})}/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f4 mb0" htmlFor="lastname">Last Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="lastname"  id="lastname" onChange={e => setState({...state, lastName: e.target.value})}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f4 mb0" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="password" name="password"  id="password" onChange={e => setState({...state, password: e.target.value})}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f4 mb0" htmlFor="confirm-password">Confirm Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="password" name="confirm-password"  id="confirm-password" onChange={e => setState({...state, confirmPW: e.target.value})}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f4 mb0" htmlFor="balance">Balance</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="number" name="balance"  id="balance" onChange={e => setState({...state, balance: Number(e.target.value)})}/>
                </div>
                <div className="mv3">
                    <p className="db fw6 lh-copy f4 mb0">Role</p>
                    <input type="radio" id="admin" name="role" value="admin" onClick={e => setState({...state, role: e.target.value})}/>
                    <label htmlFor="admin" className="mr3 ml1">Admin</label>
                    <input type="radio" id="manager" name="role" value="manager" onClick={e => setState({...state, role: e.target.value})}/>
                    <label htmlFor="manager" className="mr3 ml1">Manager</label>
                    <input type="radio" id="staff" name="role" value="staff" onClick={e => setState({...state, role: e.target.value})}/>
                    <label htmlFor="staff" className="ml1">Staff</label>
                </div>
                <div className="w-100 flex justify-center">
                    <Button variant="warning" className="f4 ph5">Login</Button>
                </div>
            </form>
            </main>
        </div>
    ); 
}

export default Register; 
