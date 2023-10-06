import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../provider/AuthProvider";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { googleSignIn, createUser } = useContext(ThemeContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password).then((result) => {
      console.log(result.user, fullName);
    });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:py-20 px-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                id="togglePassword"
                className="text-gray-400 focus:outline-none"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl mt-7"></FaEyeSlash>
                ) : (
                  <FaEye className="text-xl mt-7"></FaEye>
                )}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Register
            </button>
          </div>
        </form>
        <div>
          <p className="mt-8 text-md">
            Alredy have an Account?
            <Link to="/login" className="text-red-950 font-bold ml-2">
              Login
            </Link>
          </p>
        </div>
        <div className="text-center">
          <div className="divider my-10">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full mb-4 capitalize text-blue-600"
          >
            <FaGoogle></FaGoogle>
            <span>Continue With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
