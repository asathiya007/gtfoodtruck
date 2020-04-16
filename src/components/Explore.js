import React, {useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'; 
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Explore = () => {

    const [state, setState] = useState({
        buildings: [],
        stations: [],
        sites: []
    }); 
    const {buildings, stations, sites} = state; 

    useEffect(() => {
        // get from API call, hardcoded for now
        const buildings = [
            'testBldg',
            'testBldg1',
            'testBldg2'
        ];

        // get from API call, hardcoded for now
        const stations = [
            'testStn',
            'testStn1',
            'testStn2'
        ];

        // get from API call, hardcoded for now
        const sites = [
            {
                station: 'Station One',
                building: 'Building One',
                foodTrucks: [
                    'Food Truck One',
                    'Food Truck Two',
                    'Food Truck Three'
                ],
                foods: [
                    'Apple',
                    'Banana',
                    'Orange',
                    'Coffee'
                ]
            },
            {
                station: 'Station Two',
                building: 'Building Two',
                foodTrucks: [
                    'Food Truck Five',
                    'Food Truck Seven'
                ],
                foods: [
                    'Pie',
                    'Chicken',
                    'Waffle'
                ]
            }
        ]; 

        setState({
            buildings, 
            stations, 
            sites
        }); 
    }, [setState]); 

    const [filterData, setFilterData] = useState({
        bldgName: null,
        stnName: null,
        buildingTag: '',
        ftName: '',
        food: ''
    });
    const { bldgName, stnName } = filterData;

    const setBldgName = (bldgName) => {
        setFilterData({ ...filterData, bldgName });
    }

    const setStnName = (stnName) => {
        setFilterData({ ...filterData, stnName });
    }

    const onChangeBTag = e => {
        setFilterData({ ...filterData, buildingTag: e.target.value });
    }

    const onChangeFTName = e => {
        setFilterData({ ...filterData, ftName: e.target.value });
    }

    const onChangeFood = e => {
        setFilterData({ ...filterData, food: e.target.value });
    }

    const [rowChoice, setRowChoice] = useState(sites && sites[0] ? sites[0] : {}); 

    return (
        <div className="mw9 center ph3-ns">
            <p className="f2 fw6 ph0 mh0 tc mt0 mb2">Explore</p>
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
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-50" type="text" name="buildingTag" id="buildingTag" onChange={onChangeBTag} />
                    </div>
                </div>
                <div className="fl w-50 w-50-ns pa2">
                    <div className="flex justify-center">
                        <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="ftName">Food Truck Name</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-50" type="text" name="ftName" id="ftName" onChange={onChangeFTName} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt2">
                <label className="db fw6 lh-copy f4 mb0 mr2" htmlFor="foodName">Food</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-20" type="text" name="foodName" id="foodName" onChange={onChangeFood} />
            </div>
            <div className="flex justify-center mt3">
                <Button variant="warning" className="f4 ph5">Filter</Button>
            </div>
            <div className="mt3">
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Station</th>
                            <th>Building</th>
                            <th>Food Truck(s)</th>
                            <th>Food(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sites.map((site, i) => {
                                site.index = i; 
                                if (rowChoice.index === i) {
                                    return (
                                        <tr className="b" key={i} onClick={e => setRowChoice(site)}>
                                            <td>{site.station}</td>
                                            <td>{site.building}</td>
                                            <td>{
                                                site.foodTrucks.map((truck, i) => {
                                                    if (i === site.foodTrucks.length - 1) {
                                                        return truck
                                                    }
                                                    return truck + ', '
                                                })
                                            }</td>
                                            <td>{
                                                site.foods.map((food, i) => {
                                                    if (i === site.foods.length - 1) {
                                                        return food
                                                    }
                                                    return food + ', '
                                                })
                                            }</td>
                                        </tr>
                                    )
                                }

                                return (
                                    <tr key={i} onClick={e => setRowChoice(site)}>
                                        <td>{site.station}</td>
                                        <td>{site.building}</td>
                                        <td>{
                                            site.foodTrucks.map((truck, i) => {
                                                if (i === site.foodTrucks.length - 1) {
                                                    return truck
                                                }
                                                return truck + ', '
                                            })
                                        }</td>
                                        <td>{
                                            site.foods.map((food, i) => {
                                                if (i === site.foods.length - 1) {
                                                    return food
                                                }
                                                return food + ', '
                                            })
                                        }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="flex justify-center mt3">
                <Button variant="warning" className="f4 ph5">Select as Current Location</Button>
            </div>
        </div>
    )
}

export default Explore; 
