import React from 'react'

const Register = () => {
    return (
        <>
     <div class="section container-fluid">
      <div class="row min-row">
        <div class="col-md-6 col-12 bg-white card d-md-block d-lg-block d-xl-block">
          <div class="main-body">
            <div class="card-body">
              <div>
                <img src="./img/logo.svg" class="img-fluid" alt="" srcset="" />
              </div>
              <div class="div-body"> 
              <p class="main-text font-weight-bold">Register Account</p>
              <p class="text-gray">For the purpose of industry regulation, your details are required.</p>

              <form>
                <div class="form-group">
                  <label for="name">Your fullname</label>
                  <input type="text" class="form-control" id="" placeholder="Enter your fullname" />
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="" placeholder="Enter email address" />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="" placeholder="Enter your password" />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" checked />
                  <label class="form-check-label text-gray" for="exampleCheck1">I agree to terms & conditions</label>
                </div>
                <button type="submit" class="btn btn-primary mt-5 form-control">Register</button>

                <p class="text-gray mt-3">Already have an adddress?<span><a href="/login.html" class="font-semibold"> Login to account</a> </span> </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 bg-gray d-none d-md-block d-lg-block d-xl-block">
          <div class="main-body">
            <img src="./img/engr.png" class="img-fluid"/>
            <div class="text-center mt-5">
              <p class="font-semibold text-second mb-0">
                Get detailed support
              </p>
              <p class="text-gray col-lg-8 mx-auto ">A little description here to show something about get detailed support</p>
            </div>
            <div class="footer">
              <img src="./img/dot.svg" alt="" class="img-fluid" srcset="" />
            </div>
          </div>

        </div>
      </div>
    </div>
        </>
    )
}

export default Register
