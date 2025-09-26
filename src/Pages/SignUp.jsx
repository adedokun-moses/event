import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <div class="min-h-screen flex items-center justify-center bg-[#F0FFF4]">
        <div class="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-[#1B5E20] mb-6 text-center">
            You’re one click away from creating your account
          </h2>

          <form class="space-y-4">
            <button
              type="submit"
              class="w-full bg-[#2E7D32] text-white font-semibold py-2 px-4 rounded-lg 
                     hover:bg-[#256D27] active:bg-[#1B5E20] cursor-pointer"
            >
              Sign Up With Your Google Account
            </button>
            <p className="text-center">Or</p>

            <div>
              <label class="block text-sm font-medium text-[#1B5E20] mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-[#A5D6A7] rounded-lg 
                      placeholder-[#81C784] focus:outline-none 
                      focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32]"
              />
            </div>

            {/* <div>
              <label class="block text-sm font-medium text-[#1B5E20] mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-[#A5D6A7] rounded-lg 
                      placeholder-[#81C784] focus:outline-none 
                      focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32]"
              />
            </div> */}

            <button
              type="submit"
              class="w-full bg-[#2E7D32] text-white font-semibold py-2 px-4 rounded-lg 
                     hover:bg-[#256D27] active:bg-[#1B5E20] cursor-pointer"
            >
              Continue
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
