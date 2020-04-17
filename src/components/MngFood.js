import React, {useState, useEffect} from 'react'; 
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const MngFood = ({user}) => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const foods = [
            {
                name: 'Apple',
                menuCount: 10,
                purchaseCount: 20
            },
            {
                name: 'Orange',
                menuCount: 7,
                purchaseCount: 4
            }
        ]; 
        setFoods(foods);
    }, [setFoods]);

    const [foodName, setFoodName] = useState('');
    const [rowChoice, setRowChoice] = useState(foods && foods[0] ? foods[0] : {}); 
    const [createFoodShow, setCrtFoodShow] = useState(false);

    if (!user) {
      return <Redirect to="/" />;
    }

    return (
        <div>
            <p className="f2 fw6 ph0 mh0 tc mt0 mb2">Manage Food</p>
            <div className="flex justify-center mb3">
                <p className="db fw6 lh-copy f4 mb0 mr2">Name</p>
                <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        <span>{foodName !== '' ? foodName : 'Food name'}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            foods.map((food, i) => {
                                return <Dropdown.Item key={i} onClick={e => {
                                        setFoodName(food.name);
                                    }}>{food.name}</Dropdown.Item>
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="flex justify-center">
                <Button variant="warning" className="f4 ph5">Filter</Button>
            </div>
            <div className="mt3">
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Menu Count</th>
                            <th>Purchase Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map((food, i) => {
                                food.index = i; 
                                if (rowChoice.index === i) {
                                    return (
                                        <tr className="b" key={i} onClick={e => setRowChoice(food)}>
                                            <td>{food.name}</td>
                                            <td>{food.menuCount}</td>
                                            <td>{food.purchaseCount}</td>
                                        </tr>
                                    )
                                }

                                return (
                                    <tr key={i} onClick={e => setRowChoice(food)}>
                                        <td>{food.name}</td>
                                        <td>{food.menuCount}</td>
                                        <td>{food.purchaseCount}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="flex flex-wrap justify-center">
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" onClick={e => { setCrtFoodShow(true) }}>Create Food</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2">Delete Food</Button>
            </div>

            <Modal show={createFoodShow} onHide={e => { setCrtFoodShow(false) }} animation={false}>
                <Modal.Header closeButton>
                    <p className="f3 fw6">Create Food</p>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <label className="db fw6 lh-copy f4 mb0" htmlFor="foodName">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="foodName" id="foodName" />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={e => { setCrtFoodShow(false) }}>
                        Create Food
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
}); 

export default connect(mapStateToProps)(MngFood); 