import React, {useState} from 'react'; 
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const MngFood = props => {
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
    ]

    const [foodName, setFoodName] = useState('');

    return (
        <div>
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
        </div>
    )
}

export default MngFood; 