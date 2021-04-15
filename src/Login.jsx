import React, { useState } from 'react';

const Login = () => {
    const [data,setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
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
                <h1 className="text-center"> Login </h1>
            </div>
            <div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1" name="password" value={data.password} onChange={InputEvent} placeholder="password" />
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

export default Login;