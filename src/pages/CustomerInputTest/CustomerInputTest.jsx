import React, { useState } from 'react';

function CustomerInputTest(props) {

    const [ customer, setCustomer ] = useState({
        name: "",
        grade: "",
        age: "",
    });

    const customerInfoHandler = (e) => {
        const { name, value } = e.target;

        setCustomer({
            ...customer,
            [name]: value
        });
    }

    return (
        <div>
            <h1>고객명: {customer.name}</h1>
            <h1>등급: {customer.grade}</h1>
            <h1>나이: {customer.age}</h1>
            <h1>{customer.value}</h1>
            <input type="text" name='name' onChange={customerInfoHandler} />
            <input type="text" name='grade' onChange={customerInfoHandler} />
            <input type="text" name='age' onChange={customerInfoHandler} />
            <input type="text" name='value' onChange={customerInfoHandler} />
        </div>
    );
}

export default CustomerInputTest;