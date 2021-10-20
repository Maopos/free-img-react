import React from 'react';
import Imagen from './Imagen';

const ListaImagenes = ({imagenes}) => {
    return ( <div className='col-12 p-5 row'>
        {imagenes.map(i => (
            <Imagen key={i.id} imagen={i}></Imagen>
        ))}
    </div> );
}
 
export default ListaImagenes;