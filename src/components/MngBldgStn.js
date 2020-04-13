import React, {useState} from 'react'; 
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

const MngBldgStn = props => {
    // populate with API call
    const buildings = [
        'testBldg',
        'testBldg1',
        'testBldg2'
    ];

    // populate with API call
    const stations = [
        'testStn',
        'testStn1',
        'testStn2'
    ];

    // populate with API call 
    const bldgsStns = [
        {
            building: 'Building One',
            tags: [
                'ADA',
                'Chemistry'
            ],
            station: 'Station One',
            capacity: 5,
            foodTrucks: [
                'Food Truck One',
                'Food Truck Two',
                'Food Truck Three'
            ]
        }, 
        {
            building: 'Building Two',
            tags: [
                'ADA',
                'Biology'
            ],
            station: 'Station Two',
            capacity: 4,
            foodTrucks: [
                'Food Truck Four'
            ]
        }
    ]

    const [filterData, setFilterData] = useState({
        bldgName: null,
        stnName: null,
        buildingTag: null,
        minCapacity: 0,
        maxCapacity: 0
    }); 

    const {bldgName, stnName} = filterData;
    
    const setBldgName = (bldgName) => {
        setFilterData({...filterData, bldgName}); 
    }

    const setStnName = (stnName) => {
        setFilterData({...filterData, stnName}); 
    }

    const onChangeBTag = e => {
        setFilterData({...filterData, buildingTag: e.target.value});
    }

    const onChangeMinCap = e => {
        setFilterData({...filterData, minCapacity: Number(e.target.value)});
    }

    const onChangeMaxCap = e => {
        setFilterData({...filterData, maxCapacity: Number(e.target.value)});
    }

    const [rowChoice, setRowChoice] = useState(bldgsStns[0] ? bldgsStns[0] : {}); 

    const [updateBldgShow, setUpdBldgShow] = useState(false);
    const [updateStnShow, setUpdStnShow] = useState(false);

    console.log(rowChoice);
    return (
        <div className="mw9 center ph3-ns">
            <p className="f2 fw6 ph0 mh0 tc mt0 mb2">Manage Buildings & Stations</p>
            <div className="cf ph2-ns">
                <div className="fl w-50 w-50-ns pa2">
                    <div className="flex justify-center">
                        <p className="db fw6 lh-copy f4 mb0 mr2">Building Name</p>
                        <Dropdown className="mr3">
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                {bldgName ? bldgName : 'Building name'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    buildings.map((building, i) => {
                                        return <Dropdown.Item key={i} onClick={e => setBldgName(building)}>{building}</Dropdown.Item>
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
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
                        <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="buildingTag">Building Tag </label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-50" type="text" name="buildingTag" id="buildingTag" onChange={onChangeBTag}/>
                    </div>
                </div>
                <div className="fl w-50 w-50-ns pa2">
                    <div className="flex justify-center">
                        <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="capacity">Capacity</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-20" type="number" name="minCapacity" id="minCapacity" onChange={onChangeMinCap}/>
                        <p className="f3 mh3">-</p>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-20" type="number" name="maxCapacity" id="maxCapacity" onChange={onChangeMaxCap}/>
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
                            <th>Building</th>
                            <th>Tag(s)</th>
                            <th>Station</th>
                            <th>Capacity</th>
                            <th>Food Truck(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bldgsStns.map((row, i) => {
                                row.index = i; 
                                if (rowChoice.index === i) {
                                    return (
                                        <tr className="b" key={i} onClick={e => setRowChoice(row)}>
                                            <td>{row.building}</td>
                                            <td>{
                                                row.tags.map((tag, i) => {
                                                    if (i === row.tags.length - 1) {
                                                        return tag
                                                    }
                                                    return tag + ', '
                                                })
                                            }</td>
                                            <td>{row.station}</td>
                                            <td>{row.capacity}</td>
                                            <td>{
                                                row.foodTrucks.map((truck, i) => {
                                                    if (i === row.foodTrucks.length - 1) {
                                                        return truck
                                                    }
                                                    return truck + ', '
                                                })
                                            }</td>
                                        </tr>
                                    )
                                }
                                
                                return (
                                        <tr key={i} onClick={e => setRowChoice(row)}>
                                            <td>{row.building}</td>
                                            <td>{
                                                row.tags.map((tag, i) => {
                                                    if (i === row.tags.length - 1) {
                                                        return tag
                                                    }
                                                    return tag + ', '
                                                })
                                            }</td>
                                            <td>{row.station}</td>
                                            <td>{row.capacity}</td>
                                            <td>{
                                                row.foodTrucks.map((truck, i) => {
                                                    if (i === row.foodTrucks.length - 1) {
                                                        return truck
                                                    }
                                                    return truck + ', '
                                                })
                                            }</td>
                                        </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="flex flex-wrap justify-center">
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2">Create Building</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" onClick={e => {setUpdBldgShow(true)}}>Update Building</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2">Delete Building</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2">Create Station</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2">Update Station</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2">Delete Station</Button>
            </div>

            <Modal show={updateBldgShow} onHide={e => {setUpdBldgShow(false)}}animation={false}>
                <Modal.Header closeButton>
                    <p className="f3 fw6">Update Building</p>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <label className="db fw6 lh-copy f4 mb0" htmlFor="bldgName">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="bldgName"  id="bldgName" defaultValue={rowChoice.building}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f4 mb0" htmlFor="bldgDesc">Description</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="bldgDesc"  id="bldgDesc" defaultValue={rowChoice.description}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f4 mb0" htmlFor="bldgTags">Tags</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" type="text" name="bldgTags"  id="bldgTags" defaultValue={rowChoice.tags}/>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={e => {setUpdBldgShow(false)}}>
                        Update Building 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MngBldgStn; 
