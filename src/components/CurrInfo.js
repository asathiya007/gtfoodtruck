import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CurrInfo = () => {

    const [state, setState] = useState({
        userData: null,
        tableData: null
    });
    const {userData, tableData} = state; 

    useEffect(() => {
        // get from API call, hardcoded for now
        const userData = {
            station: 'Station One',
            building: {
                name: 'Building One',
                tags: [
                    'ADA',
                    'Chemistry'
                ],
                description: 'Description for Building One'
            },
            balance: 100
        }

        // get from API call, hardcoded
        const tableData = [
            {
                foodTruck: 'Food Truck One',
                manager: 'Manager One',
                foods: [
                    {
                        name: 'Apple',
                        price: 3.99,
                        pq: 2
                    },
                    {
                        name: 'Banana',
                        price: 3.99,
                        pq: 3
                    }
                ]
            },
            {
                foodTruck: 'Food Truck Two',
                manager: 'Manager Two',
                foods: [
                    {
                        name: 'Apple',
                        price: 3.99,
                        pq: 2
                    },
                    {
                        name: 'Coffee',
                        price: 2.99,
                        pq: 1
                    }
                ]
            }
        ]; 
        setState({userData, tableData});
    }, [setState]); 

    const [rowChoice, setRowChoice] = useState(tableData && tableData[0] ? tableData[0] : {});
    const [showOrder, setShowOrder] = useState(false);

    return (
        <div className="mw9 center ph3-ns">
            <p className="f2 fw6 ph0 mh0 tc mt0 mb2">Current Information</p>
            <div className="flex justify-center">
                <p className="db fw6 lh-copy f3 mb0 mr2">
                    Station: 
                    <span className="fw3 ml3">{userData && userData.station}</span>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="db fw6 lh-copy f3 mb0 mr2">
                    Building: 
                    <span className="fw3 ml3">{userData && userData.name}</span>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="db fw6 lh-copy f3 mb0 mr2">
                    Building Tag(s): 
                    <span className="fw3 ml3">{
                        userData && userData.building.tags.map((tag, i) => {
                            if (i === userData.building.tags.length - 1) {
                                return tag; 
                            }

                            return tag + ', '
                        })
                    }</span>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="db fw6 lh-copy f3 mb0 mr2">
                    Building Description: 
                    <span className="fw3 ml3">{userData && userData.building.description}</span>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="db fw6 lh-copy f3 mb0 mr2">
                    Balance: 
                    <span className="fw3 ml3">{userData && userData.balance}</span>
                </p>
            </div>
            <div className="mt3">
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Food Truck</th>
                            <th>Manager</th>
                            <th>Food(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData && tableData.map((row, i) => {
                            row.index = i; 
                            if (rowChoice.index === i) {
                                return (
                                    <tr className="b" key={i} onClick={e => setRowChoice(row)}>
                                        <td>{row.foodTruck}</td>
                                        <td>{row.manager}</td>
                                        <td>{
                                            row.foods.map((food, i) => {
                                                if (i === row.foods.length - 1) {
                                                    return food.name
                                                }

                                                return food.name + ', '
                                            })
                                        }</td>
                                    </tr>
                                )
                            }

                            return (
                                <tr key={i} onClick={e => setRowChoice(row)}>
                                    <td>{row.foodTruck}</td>
                                    <td>{row.manager}</td>
                                    <td>{
                                        row.foods.map((food, i) => {
                                            if (i === row.foods.length - 1) {
                                                return food.name
                                            }

                                            return food.name + ', '
                                        })
                                    }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <div className="flex justify-center">
                <Button variant="warning" className="f4 ph5" onClick={e => setShowOrder(true)}>Order</Button>
            </div>

            <Modal show={showOrder} onHide={e => { setShowOrder(false) }} animation={false}>
                <Modal.Header closeButton>
                    <p className="f3 fw6">Order</p>
                </Modal.Header>

                <Modal.Body>
                    <div className="flex justify-center">
                        <p className="db fw6 lh-copy f3 mb0 mr2">
                            Food Truck: 
                            <span className="fw3 ml3">{rowChoice.foodTruck}</span>
                        </p>
                    </div>
                    <div className="mt3">
                        <Table striped bordered hover variant="dark" responsive>
                            <thead>
                                <tr>
                                    <th>Food</th>
                                    <th>Price</th>
                                    <th>Purchase Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rowChoice.foods && rowChoice.foods.map((row, i) => {
                                    if (row.chosen) {
                                        return (
                                            <tr className="b" key={i} onClick={e => {
                                                const newFoods = rowChoice.foods;
                                                newFoods[i].chosen = !newFoods[i].chosen;
                                                setRowChoice({ ...rowChoice, foods: newFoods });
                                            }}>
                                                <td>{row.name}</td>
                                                <td>{row.price}</td>
                                                <td>{row.pq}</td>
                                            </tr>
                                        )
                                    }

                                    return (
                                        <tr key={i} onClick={e => {
                                            const newFoods = rowChoice.foods; 
                                            newFoods[i].chosen = !newFoods[i].chosen; 
                                            setRowChoice({...rowChoice, foods: newFoods }); 
                                        }}>
                                            <td>{row.name}</td>
                                            <td>{row.price}</td>
                                            <td>{row.pq}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                    <div className="flex justify-center">
                        <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="dateInput">Date</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-40" type="date" name="dateInput" id="dateInput" />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={e => { setShowOrder(false) }}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CurrInfo; 