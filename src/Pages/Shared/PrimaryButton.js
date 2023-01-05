import React, { Children } from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-outline text-white bg-red-500">{children}</button>
        </div>
    );
};

export default PrimaryButton;