import { Link } from "react-router-dom";
import { auth, db } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password && password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    // If any errors, stop form submission
    if (Object.keys(newErrors).length > 0) return;
    try {
      // Create user with email/password
      setLoader(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("token", user.uid)
      alert("Registration successful! Welcome " + user.email);
      navigate('/login')
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setLoader(false);
      alert(err.message)
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#F0FFF4]">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#1B5E20] mb-6 text-center">
            You’re one click away from creating your account
          </h2>

          <form className="space-y-4" onSubmit={handleSignup}>
            <button
              type="submit"
              className="w-full bg-[#2E7D32] text-white font-semibold py-2 px-4 rounded-lg 
                     hover:bg-[#256D27] active:bg-[#1B5E20] cursor-pointer"
            >
              Sign Up With Your Google Account
            </button>
            <p className="text-center">Or</p>

            <div>
              <label className="block text-sm font-medium text-[#1B5E20] mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                className={`w-full px-4 py-2 border border-[#A5D6A7] rounded-lg 
                      placeholder-[#81C784] focus:outline-none 
                      focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32]  ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-[#A5D6A7] focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      }`}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="error text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1B5E20] mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                className={`w-full px-4 py-2 border border-[#A5D6A7] rounded-lg 
                      placeholder-[#81C784] focus:outline-none 
                      focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] ${
                        errors.password
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-[#A5D6A7] focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      }`}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="error text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#2E7D32] text-white font-semibold py-2 px-4 rounded-lg 
                     hover:bg-[#256D27] active:bg-[#1B5E20] cursor-pointer"
            >
              {loader ? "Loading...." : "Continue"}
            </button>

            <p className="text-center">
              By signing up, you agree to Asana's Terms of Service and
              acknowledge the Asana Privacy Statement.
            </p>
            <p className="text-center">
              <Link to="#">Terms and Privacy</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
