import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <form className="d-flex justify-content-center align-items-center" >
        <div className="d-flex justify-content-center align-items-center" style={{marginTop:"100px",border:"2px solid black",padding:"20px",backgroundColor:"rgba(255,0,255,0.3)"}}>
          <div className="my-4 ">
          {/* Email input */}
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label for="inputemail" className="col-form-label">
                Email
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="inputemail"
                className="form-control mx-4"
                aria-describedby="passwordHelpInline"
                style={{width:"212px"}}
              />
            </div>
          </div>

          {/* Password input */}
          <div className="row g-3 align-items-center my-2">
            <div className="col-auto">
              <label for="inputPassword6" className="col-form-label">
                Password
              </label>
            </div>
            <div className="col-auto">
              <input
                type="password"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center my-3 ">
          <button type="button" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>
          </div>
          </div>


          {/* 2 column grid layout for inline styling
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> 
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              {/* <!-- Simple link 
              <a href="#!">Forgot password?</a>
            </div>
          </div> */}

          {/* <!-- Submit button --> */}
         

          {/* Register buttons 
          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
        </div>*/}
        </div>
        </form>
        
        
      </div>
    </>
  );
};

export default Home;
