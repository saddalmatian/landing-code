import logo from "./Logo.png";
import { useState } from "react";
import "./Login.css";
import { loginredux } from "../../redux/apicall";
import { useDispatch } from "react-redux";
import NavbarAdmin from "../../Components/Navbaradmin/Navbaradmin";
function Login() {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginForm;
  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const Login = async (event) => {
    event.preventDefault();
    try {
      loginredux(dispatch, loginForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper-login">
      <NavbarAdmin />
      <div className="d-flex justify-content-center py-5 content-admin">
        <div className="underline-admin"></div>
        <h3>
          ADMIN WORKSPACE
          <p>Detect objects in image</p>
        </h3>
      </div>
      <div className="body-login">
        <div action="submit" className="form-login">
          <div className="image-login-left">
            <img
              className="image-login"
              src="https://s3-alpha-sig.figma.com/img/9f8e/a027/d2c6817ec5b7c3f5851220139e16b2a1?Expires=1669593600&Signature=ev5L~jvPCdwDlnRFLBJTL0cgRXaSDbG7W6d2V0afY3pX8jvoNo1x5rSpYzT9KtF4cr6I9rpUnQklcV86axDizA4mDr6~w~m28W2oeD81qYmJK0Cb5j9mKNTJhqPxGuEQu-ykWVDYMJKZcL4amm1GY7rX-0AUkjB~6JcLboe9xXcHObPSn3GYJnPFTi0Y9gSXQJ2F080o7Bt93XduNAPpHYneXQvV6dY0bg0lH9echHEHYa1g9E3FlkwVWiQ8r1VoyYS~l6ZtoItxSfwWFYVKKfwv6sDSBseTaSfutmkRbbjW~Ftynl76N7O7SRdAtfFLatOe~oXcpzx~Cvia1GOZRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
          </div>
          <div className="input-login">
            <div className="py-4">
              <label className="py-2" htmlFor="email">
                Email
              </label>
              <br />
              <input
                onChange={onChangeLoginForm}
                className="w-100 input-type"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label className="py-2" htmlFor="password">
                Password
              </label>
              <br />
              <input
                onChange={onChangeLoginForm}
                className="w-100 input-type"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
              />
            </div>
            <button className="my-3 btn-login-submit" onClick={Login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
