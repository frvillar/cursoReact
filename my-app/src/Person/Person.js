import React from 'react';

const person = (props) => {
    return (
    <div>
       <p>Meu nome é {props.nome} e tenho {props.idade} anos!  {props.children}.</p>
    </div>
    )
}

export default person;