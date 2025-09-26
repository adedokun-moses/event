import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex items-center justify-between mt-5 px-10">
        <Link to="/">
          {" "}
          <img src="" alt="my siste logo" />
        </Link>

        <ul className="flex gap-10 hover:cursor-pointer hover:text-[#1B5E20]">
          <li>Create Event</li>
          <Link to="/about">About</Link>
          <li>Contact</li>
        </ul>
        <div className="flex gap-5 items-center justify-between">
          <Link to="/login">Log In</Link>
          <Link to="/signup">
            <button
              className="bg-[#2E7D32] text-black cursor-pointer w-30 p-2 rounded"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
