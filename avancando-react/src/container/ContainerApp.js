import React from 'react';

const ContainerApp = (props) => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </main>
    );
};

export default ContainerApp;