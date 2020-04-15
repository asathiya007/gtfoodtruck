import React, {useState} from 'react'; 
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const MngFoodTruck = props => {

    // get from store
    const stations = [
        'testStn',
        'testStn1',
        'testStn2'
    ];

    // get from store 
    const staff = [
        {
            name: 'Staff One'
        },
        {
            name: 'Staff Two'
        },
        {
            name: 'Staff Three'
        },
        {
            name: 'Staff Four'
        }
    ]

    // get from store 
    const food = [
        'Apple',
        'Orange'
    ]

    // get with filter data 
    const foodTrucks = [
        {
            name: 'Food Truck One',
            station: 'Station One',
            remCapacity: 4, 
            staffCount: 3, 
            menuItems: 10
        }, 
        {
            name: 'Truck One',
            station: 'Station Six',
            remCapacity: 1, 
            staffCount: 5, 
            menuItems: 15
        }
    ]

    const [filterData, setFilterData] = useState({
        ftName: null,
        stnName: null,
        remCapacity: false,
        minStaff: 0,
        maxStaff: 0
    });
    const {stnName, remCapacity} = filterData; 

    const setFTName = (e) => {
        setFilterData({...filterData, ftName: e.target.value});
    }

    const setStnName = (stnName) => {
        setFilterData({...filterData, stnName});
    }

    const toggleRemCap = (e) => {
        setFilterData({...filterData, remCapacity: !filterData.remCapacity});
    }

    const setMinStaff = e => {
        setFilterData({...filterData, minStaff: Number(e.target.value)});
    }

    const setMaxStaff = e => {
        setFilterData({...filterData, maxStaff: Number(e.target.value)});
    }

    const [rowChoice, setRowChoice] = useState(foodTrucks[0] ? foodTrucks[0] : {}); 

    const [createFTShow, setCrtFTShow] = useState(false);
    const [updateFTShow, setUpdFTShow] = useState(false);

    const [createFTData, setCrtFTData] = useState({
        name: '',
        station: '',
        staff: [],
        crtChoiceIndex: 0,
        crtMenuItems: [
            {
                food: 'Apple',
                price: 2.99
            }, 
            {
                food: 'Apple',
                price: 3.99
            }
        ]
    }); 
    const {crtMenuItems, crtChoiceIndex} = createFTData

    const [updateFTData] = useState({
        name: '',
        station: '',
        staff: [],
        updMenuItems: [
            {
                food: 'Apple',
                price: 2.99
            }, 
            {
                food: 'Apple',
                price: 3.99
            }
        ]
    }); 
    const {updMenuItems} = updateFTData; 

    return (
        <div className="mw9 center ph3-ns">
            <p className="f2 fw6 ph0 mh0 tc mt0 mb2">Manage Food Trucks</p>
            <div className="cf ph2-ns">
                <div className="fl w-50 w-50-ns pa2">
                    <div className="flex justify-center">
                        <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="ftName">Food Truck Name</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-50" type="text" name="ftName" id="ftName" onChange={setFTName}/>
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
                                        return <Dropdown.Item key={i} onClick={e => setStnName(station)}>{station}</Dropdown.Item>
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="cf ph2-ns">
                <div className="fl w-50 w-50-ns pa2">
                    <div className="flex justify-center">
                        <ToggleButtonGroup type="checkbox" className="mb-2" onChange={e => toggleRemCap(!remCapacity)}>
                            <ToggleButton variant="warning">Has Remaining Capacity</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <div className="fl w-50 w-50-ns pa2">
                    <div className="flex justify-center">
                        <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="staffCount">Staff Count</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-20" type="number" name="minStaff" id="minStaff" onChange={setMinStaff} />
                        <p className="f3 mh3">-</p>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-20" type="number" name="maxStaff" id="maxStaff" onChange={setMaxStaff} />
                    </div>
                </div>
            </div>
            <div className="w-100 flex justify-center">
                <Button variant="warning" className="f4 ph5">Filter</Button>
            </div>
            <div className="mt3">
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Food Truck Name</th>
                            <th>Station Name</th>
                            <th>Remaning Capacity</th>
                            <th>Staff Count</th>
                            <th>Menu Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foodTrucks.map((foodTruck, i) => {
                                foodTruck.index = i; 
                                if (rowChoice.index === i) {
                                    return (
                                        <tr className="b" key={i} onClick={e => setRowChoice(foodTruck)}>
                                            <td>{foodTruck.name}</td>
                                            <td>{foodTruck.station}</td>
                                            <td>{foodTruck.remCapacity}</td>
                                            <td>{foodTruck.staffCount}</td>
                                            <td>{foodTruck.menuItems}</td>
                                        </tr>
                                    )
                                }

                                return (
                                    <tr key={i} onClick={e => setRowChoice(foodTruck)}>
                                        <td>{foodTruck.name}</td>
                                        <td>{foodTruck.station}</td>
                                        <td>{foodTruck.remCapacity}</td>
                                        <td>{foodTruck.staffCoun}t</td>
                                        <td>{foodTruck.menuItems}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="flex flex-wrap justify-center">
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" onClick={e => setCrtFTShow(true)}>Create Food Truck</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" onClick={e => setUpdFTShow(true)}>Update Food Truck</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2">Delete Food Truck</Button>
            </div>


            <Modal show={createFTShow} onHide={e => {setCrtFTShow(false)}}animation={false}>
                <Modal.Header closeButton>
                    <p className="f3 fw6">Create Food Truck</p>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <label className="db fw6 lh-copy f4 mb0" htmlFor="ftName">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="ftName"  id="ftName" />
                    </div>
                    <div className="mt3 flex">
                        <p className="db fw6 lh-copy f4 mb0 mr2">Station Name</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                {'Station name'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    stations.map((station, i) => {
                                        return <Dropdown.Item key={i}>{station}</Dropdown.Item>
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="mt3 flex">
                        <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="staffSelect">Assigned Staff</label>
                        <select id="staffSelect" multiple size="5" style={{overflowY: 'scroll'}}>
                            {
                                staff.map((staffData, i) => (
                                    <option value={staffData.name} key={i}>{staffData.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mt3">
                        <p className="db fw6 lh-copy f4 mb0 mr2">Menu Items</p>
                        <div className="flex justify-around">
                            <p className="db fw6 lh-copy f5 mb0 mr2">Menu Item</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    {'Food name'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        food.map((foodItem, i) => {
                                            return <Dropdown.Item key={i}>{foodItem}</Dropdown.Item>
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="ml2 flex w-50 justify-center">
                                <label className="db fw6 lh-copy f6 mb0 mr2" htmlFor="price">Price</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black w-40" type="text" name="price"  id="price" />
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <Button variant="warning" className="f6 ph4 dib mv2 mh2">Add Menu Item</Button>
                            <Button variant="warning" className="f6 ph4 dib mv2 mh2">Delete Menu Item</Button>
                        </div>
                        <div>
                            <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Food</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        crtMenuItems.map((item, i) => {
                                            item.index = i; 
                                            if (crtChoiceIndex === i) {
                                                return (
                                                    <tr className="b" key={i} onClick={e => setCrtFTData({...createFTData, crtChoiceIndex: i})}>
                                                        <td>{item.food}</td>
                                                        <td>{item.price}</td>
                                                    </tr>
                                                )
                                            }

                                            return (
                                                <tr key={i} onClick={e => setCrtFTData({...createFTData, crtChoiceIndex: i})}>
                                                    <td>{item.food}</td>
                                                    <td>{item.price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={e => {setCrtFTShow(false)}}>
                        Create Food Truck 
                    </Button>
                </Modal.Footer>
            </Modal>




            <Modal show={updateFTShow} onHide={e => {setUpdFTShow(false)}}animation={false}>
                <Modal.Header closeButton>
                    <p className="f3 fw6">Update Food Truck</p>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <label className="db fw6 lh-copy f4 mb0" htmlFor="ftName">{rowChoice.name}</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="ftName"  id="ftName" />
                    </div>
                    <div className="mt3 flex">
                        <p className="db fw6 lh-copy f4 mb0 mr2">{rowChoice.station}</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                {'Station name'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    stations.map((station, i) => {
                                        return <Dropdown.Item key={i}>{station}</Dropdown.Item>
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="mt3 flex">
                        <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="staffSelect">Assigned Staff</label>
                        <select id="staffSelect" multiple size="5" style={{overflowY: 'scroll'}}>
                            {
                                staff.map((staffData, i) => (
                                    <option value={staffData.name} key={i}>{staffData.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mt3">
                        <p className="db fw6 lh-copy f4 mb0 mr2">Menu Items</p>
                        <div className="flex justify-around">
                            <p className="db fw6 lh-copy f5 mb0 mr2">Menu Item</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    {'Food name'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        food.map((foodItem, i) => {
                                            return <Dropdown.Item key={i}>{foodItem}</Dropdown.Item>
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="ml2 flex w-50 justify-center">
                                <label className="db fw6 lh-copy f6 mb0 mr2" htmlFor="price">Price</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black w-40" type="text" name="price"  id="price" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="warning" className="f6 ph4 dib mv2 mh2">Add Menu Item</Button>
                        </div>
                        <div>
                            <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Food</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        updMenuItems.map((item, i) => {
                                            return (
                                                <tr key={i} >
                                                    <td>{item.food}</td>
                                                    <td>{item.price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={e => {setCrtFTShow(false)}}>
                        Create Food Truck 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MngFoodTruck; 
