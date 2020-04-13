import React from 'react'; 
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <p className="f2 fw6 ph0 mh0 tc mv0">Home</p>
            <div className="flex flex-wrap">
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" href="/explore">Explore</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" href="/orderhist">Order History</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" href="/currinfo">View Current Info</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" href="/mngft">Manage Food Truck</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" href="/ftsummary">View Food Truck Summary</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" href="/mngbldgstn">Manage Building and Station</Button>
                <Button variant="warning" className="f4 ph5 dib w-30 mv2 mh2" href="/mngfood">Manage Food</Button>
            </div>
        </div>
    )
}

export default Home
