import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const userLogin = async (e) => {
    e.preventDefault();
    let erros = {};
    if (!email) erros.email = "Input your email";
    if (!password) erros.password = "Input your password";
    setError(erros);
    if (Object.keys(erros).length > 0) return;

    try {
      setLoader(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("Logged in:", user.email);
      localStorage.setItem("token", user.email);
      navigate("/dashboard");
      setLoader(false);
    } catch (err) {
      alert(err.message);
      setError(err.message); // Firebase default message
      setLoader(false);
    }
  };
  return (
    <>
      <div class="min-h-screen flex items-center justify-center bg-[#F0FFF4]">
        <div class="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-[#1B5E20] mb-6 text-center">
            Login to PartyVibe
          </h2>

          <form class="space-y-4" onSubmit={userLogin}>
            <div>
              <label class="block text-sm font-medium text-[#1B5E20] mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border border-[#A5D6A7] rounded-lg 
                      placeholder-[#81C784] focus:outline-none 
                      focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] ${
                        error.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-[#A5D6A7] focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      }`}
              />
              {error.email && (
                <p className="error text-red-500">{error.email}</p>
              )}
            </div>

            <div>
              <label class="block text-sm font-medium text-[#1B5E20] mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border border-[#A5D6A7] rounded-lg 
                      placeholder-[#81C784] focus:outline-none 
                      focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] ${
                        error.password
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-[#A5D6A7] focus:border-[#2E7D32] focus:ring-[#2E7D32]"
                      }`}
              />

              {error.password && (
                <p className="error text-red-500">{error.password}</p>
              )}
            </div>

            <div class="text-right">
              <a
                href="#"
                class="text-sm text-[#2E7D32] hover:text-[#1B5E20] font-medium"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              class="w-full bg-[#2E7D32] text-white font-semibold py-2 px-4 rounded-lg 
                     hover:bg-[#256D27] active:bg-[#1B5E20] cursor-pointer"
            >
              {loader ? <>.....</> : "Login"}
            </button>

            <p className="text-center">Or</p>
            <p class="mt-6 text-center text-sm text-[#4CAF50]">
              <a
                href="#"
                class="text-[#2E7D32] hover:text-[#1B5E20] font-medium"
              >
                Sign In With Google
              </a>
            </p>
          </form>

          <p class="mt-6 text-center text-sm text-[#4CAF50]">
            Don’t have an account?
            <a
              href="#"
              class="text-[#2E7D32] hover:text-[#1B5E20] font-bold pl-2"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
