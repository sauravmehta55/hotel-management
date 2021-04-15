import React, { useState } from 'react';

const Registration = () => {
    const [data,setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        password: "",
    });

    const InputEvent =(event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });

    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`);
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Register </h1>
            </div>
            <div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" rows="3" name="password" value={data.password} onChange={InputEvent}/>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-primary" type="register">Register</button>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-primary" type="login">Login</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;