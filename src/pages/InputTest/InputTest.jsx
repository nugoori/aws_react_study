import React, { useState } from 'react';

function InputTest(props) {

    const [ student, setStudent ] = useState({
        name: "",
        address: ""
    });

    const studentInfoChangeHandler = (e) => {
        const { name, value } = e.target;

        setStudent({
            ...student,
            [name]: value
        });
    }

    return (
        <div>
            <h1>name: {student.name}</h1>
            <h1>address: {student.address}</h1>
            <input type="text" name="name" onChange={studentInfoChangeHandler} />
            <input type="text" name="address" onChange={studentInfoChangeHandler} />
        </div>
    );
}

export default InputTest;