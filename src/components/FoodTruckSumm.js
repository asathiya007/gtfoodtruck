import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const FoodTruckSumm = () => {
    const foodTrucks = [
        {
            name: 'Food Truck One',
            orders: 30,
            revenue: 1380, 
            customers: 25
        }
    ]; 

    // get from store
    const stations = [
        'testStn',
        'testStn1',
        'testStn2'
    ];

    const ftSummDets = [
        {
            date: '2020-01-01',
            customer: 'Customer One',
            purchase: 13.5,
            orders: 2,
            food: 'Apple, Coffee'
        },
        {
            date: '2020-01-01',
            customer: 'Customer Two',
            purchase: 3.99,
            orders: 1,
            food: 'Orange'
        }
    ]

    const [filterData, setFilterData] = useState({
        ftName: '',
        stnName: '',
        startDate: null, 
        endDate: null
    });
    const {stnName} = filterData; 

    const [rowChoice, setRowChoice] = useState(foodTrucks[0] ? foodTrucks[0] : {});

    const [showDets, setShowDets] = useState(false);

    return (
        <div>
            <p className="f2 fw6 ph0 mh0 tc mv0">Food Truck Summary</p>
            <div className="cf ph2-ns">
                <div className="fl w-50 w-50-ns pa2">
                    <div className="flex justify-center">
                        <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="ftName">Food Truck Name</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-50" type="text" name="ftName" id="ftName" onChange={e => {
                            setFilterData({...filterData, ftName: e.target.value})
                        }}/>
                    </div>
                </div>
                <div className="fl w-50 w-50-ns pa2">
                    <div className="flex justify-center">
                        <p className="db fw6 lh-copy f4 mb0 mr2">Station Name</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                {stnName ? stnName : 'Station name'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    stations.map((station, i) => {
                                        return <Dropdown.Item key={i} onClick={e => setFilterData({...filterData, stnName: station})}>{station}</Dropdown.Item>
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt2">
                <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="dateInput">Date</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-30" type="date" name="startDate" id="startDate"/>
                <p className="db fw6 lh-copy f4 mb0 mh2">-</p>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-30" type="date" name="endDate" id="endDate"/>
            </div>
            <div className="flex justify-center mt2">
                <Button variant="warning" className="f4 ph5 dib mv2 mh2">Filter</Button>
            </div>
            <div className="flex justify-center mt2">
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Food Truck Name</th>
                            <th>Total Orders</th>
                            <th>Total Revenue</th>
                            <th>Customers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foodTrucks.map((truck, i) => {
                                truck.index = i; 
                                if (rowChoice.index === i) {
                                    return (
                                        <tr key={i} className="b" onClick={e => setRowChoice(truck)}>
                                            <td>{truck.name}</td>
                                            <td>{truck.orders}</td>
                                            <td>{truck.revenue}</td>
                                            <td>{truck.customers}</td>
                                        </tr>
                                    )
                                }

                                return (
                                    <tr key={i} onClick={e => setRowChoice(truck)}>
                                        <td>{truck.name}</td>
                                        <td>{truck.orders}</td>
                                        <td>{truck.revenue}</td>
                                        <td>{truck.customers}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="flex justify-center mt2">
                <Button variant="warning" className="f4 ph5 dib mv2 mh2" onClick={e => setShowDets(true)}>View Detail</Button>
            </div>



            <Modal show={showDets} onHide={e => {setShowDets(false)}} animation={false}>
                <Modal.Header closeButton>
                    <p className="f3 fw6">Summary Detail</p>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <Table striped bordered hover variant="dark" responsive>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Customer</th>
                                    <th>Total Purchase</th>
                                    <th>Orders</th>
                                    <th>Food(s)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ftSummDets.map((detRow, i) => {
                                        return (
                                            <tr key={i} >
                                                <td>{detRow.date}</td>
                                                <td>{detRow.customer}</td>
                                                <td>{detRow.purchase}</td>
                                                <td>{detRow.orders}</td>
                                                <td>{detRow.food}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={e => {setShowDets(false)}}>
                        Exit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ); 
}

export default FoodTruckSumm; 