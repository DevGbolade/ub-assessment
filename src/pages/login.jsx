import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const [input, setInput] = React.useState(false);

    const onSubmit = (data) => {
        // console.log(data);
      };

    const showInput = () => setInput(!input);
    const handleChange = (e) => {
let value = e.target.value;
if (value = 0){
    throw new Error('email is empty')
}
    }

    return (
        <div classNameName="section container-fluid">
        <div className="row min-row ">
          <div className="col-md-6 col-12 bg-white card d-md-block d-lg-block d-xl-block">
            <div className="main-body">
              <div className="card-body">
                <div>
                  <img src="./img/logo.svg" className="img-fluid" alt="" srcset="" />
                </div>
                <div className="div-body">
                  <p className="main-text font-weight-bold">Hi, Welcome Back!</p>
                  <p className="text-gray">
                    For the purpose of industry regulation, your details are
                    required.
                  </p>
  
                  <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className={`form-group ${input ? 'd-none' : 'show'}`}>
                      <label for="email">Email address</label>
                      <input
                      name="email"
                         ref={register({ required: true })}
                        type="email"
                        className="form-control"
                        id=""
                        placeholder="Enter email address"
                      />
                      {errors.email && <p>Please enter an email</p> }
                    </div>
                    <div className={`form-group ${input ? 'show' : 'd-none'}`}>
                      <label for="password">Password</label>
                      <input
                        ref={register({ required: true })}
                        type="password"
                        name="password"
                        className="form-control"
                        id=""
                        placeholder="Enter your password"
                      />
                    </div>
                    <p data-toggle="modal" data-target="#forgot" className="forgot">
                      <i className="fa fa-lock pr-2"></i> Forgotten Password ?
                    </p>
  
                    <button
                    type="button"
                      className={`btn btn-primary mt-5 form-control  ${input ? 'd-none' : 'show'}`}
                      onClick={showInput}
                    >
                      Next
                    </button>
                    <button
                      type="submit"
                      className={`btn btn-primary mt-5 form-control  ${input ? 'show' : 'd-none'}  `}
                    >
                      Login
                    </button>
  
                    <p className="text-gray mt-3">
                      Not yet registered?
                      <span>
                        <a href="/register.html" className="font-semibold">
                          {" "}
                          Create an account
                        </a>{" "}
                      </span>{" "}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Image column  */}
          <div className="col-md-6 bg-gray d-none d-md-block d-lg-block d-xl-block">
            <div className="main-body">
              <img src="./img/engr.png" className="img-fluid" alt="png" />
              <div className="text-center mt-5">
                <p className="font-semibold text-second mb-0">Get detailed support</p>
                <p className="text-gray col-lg-8 mx-auto ">
                  A little description here to show something about get detailed
                  support
                </p>
              </div>
              <div className="footer mt-3">
                <img src="./img/dot.svg" alt="" className="img-fluid" srcset="" />
              </div>
            </div>
          </div>
          {/* End of Image column */}
        </div>
      </div>
    )
}

export default Login
