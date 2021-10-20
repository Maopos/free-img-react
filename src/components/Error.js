import React from 'react';

const Error = ({mensaje}) => {
    return ( <p className='my-2 p-2 text-center alert alert-danger'>{mensaje}</p> );
}
 
export default Error;