import React from 'react';
import HomeContent from './homeContent';

function Home() {
    return(
        <div className="container">
            <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                    <HomeContent />
                </div>
            </div>
        </div>  
    )
}

export default Home;