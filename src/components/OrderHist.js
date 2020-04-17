import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const OrderHist = ({user}) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // fetch data from API call (hardcoded here)
        const tableData = [
            {
                date: '2020-01-20',
                orderId: 1,
                orderTotal: 14,
                foods: [
                    'Apple',
                    'Banana'
                ],
                foodQuantity: 5
            },
            {
                date: '2020-01-20',
                orderId: 2,
                orderTotal: 25,
                foods: [
                    'Coffee'
                ],
                foodQuantity: 3
            },
        ];

        setTableData(tableData);
    }, [setTableData]); 

    if (!user) {
      return <Redirect to="/" />;
    }

    return (
        <div>
            <div className="flex justify-center">
                <p className="f2 fw6 ph0 mh0 tc mt0 mb2">Order History</p>
            </div>
            <div className="mt3">
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>OrderID</th>
                            <th>Order Total</th>
                            <th>Food(s)</th>
                            <th>Food Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.date}</td>
                                    <td>{row.orderId}</td>
                                    <td>{row.orderTotal}</td>
                                    <td>{
                                        row.foods.map((food, i) => {
                                            if (i === row.foods.length - 1) {
                                                return food; 
                                            }
                                            return food + ', '
                                        })
                                    }</td>
                                    <td>{row.foodQuantity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    ); 
}

const mapStateToProps = state => ({
    user: state.auth.user
}); 

export default connect(mapStateToProps)(OrderHist); 