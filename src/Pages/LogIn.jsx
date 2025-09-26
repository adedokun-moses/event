const LogIn = () => {
  return (
    <>
      <div class="min-h-screen flex items-center justify-center bg-[#F0FFF4]">
        <div class="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-[#1B5E20] mb-6 text-center">
            Login to PartyVibe
          </h2>

          <form class="space-y-4">
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

            <div>
              <label class="block text-sm font-medium text-[#1B5E20] mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-[#A5D6A7] rounded-lg 
                      placeholder-[#81C784] focus:outline-none 
                      focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32]"
              />
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
              Login
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

          <p class="mt-4 text-sm text-[#D32F2F]">* Invalid email or password</p>

          <p class="mt-6 text-center text-sm text-[#4CAF50]">
            Don’t have an account? 
            <a href="#" class="text-[#2E7D32] hover:text-[#1B5E20] font-bold pl-2">
                Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
