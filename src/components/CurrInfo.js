import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CurrInfo = props => {

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
    const {station, building: {name, tags, description}, balance} = userData; 

    const tableData = [
        {
            foodTruck: 'Food Truck One',
            manager: 'Manager One',
            foods: [
                'Apple',
                'Banana'
            ]
        }, 
        {
            foodTruck: 'Food Truck Two',
            manager: 'Manager Two',
            foods: [
                'Apple',
                'Coffee'
            ] 
        }
    ]

    const [rowChoice, setRowChoice] = useState(tableData[0] ? tableData[0] : {});

    return (
        <div className="mw9 center ph3-ns">
            <p className="f2 fw6 ph0 mh0 tc mt0 mb2">Current Information</p>
            <div className="flex justify-center">
                <p className="db fw6 lh-copy f3 mb0 mr2">
                    Station: 
                    <span className="fw3 ml3">{station}</span>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="db fw6 lh-copy f3 mb0 mr2">
                    Building: 
                    <span className="fw3 ml3">{name}</span>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="db fw6 lh-copy f3 mb0 mr2">
                    Building Tag(s): 
                    <span className="fw3 ml3">{
                        tags.map((tag, i) => {
                            if (i === tags.length - 1) {
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
                    <span className="fw3 ml3">{description}</span>
                </p>
            </div>
            <div className="flex justify-center">
                <p className="db fw6 lh-copy f3 mb0 mr2">
                    Balance: 
                    <span className="fw3 ml3">{balance}</span>
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
                        {tableData.map((row, i) => {
                            row.index = i; 
                            if (rowChoice.index === i) {
                                return (
                                    <tr className="b" key={i} onClick={e => setRowChoice(row)}>
                                        <td>{row.foodTruck}</td>
                                        <td>{row.manager}</td>
                                        <td>{
                                            row.foods.map((food, i) => {
                                                if (i === row.foods.length - 1) {
                                                    return food
                                                }

                                                return food + ', '
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
                                                return food
                                            }

                                            return food + ', '
                                        })
                                    }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
            <div className="flex justify-center">
                <Button variant="warning" className="f4 ph5">Order</Button>
            </div>

            {/* MODAL */}
        </div>
    );
}

export default CurrInfo; 