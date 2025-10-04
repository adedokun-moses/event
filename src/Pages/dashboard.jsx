import { Outlet, Link } from "react-router-dom";
const UserDashboard = () => {
  return (
    <>
      <main className="w-full">
        <div className="topBar flex border-b-1 pb-4 justify-between ">
          <div className="searchBar ml-5 mt-5">
            <h2>Search</h2>
          </div>
          <aside className="searchBar mr-5 mt-5">
            <h5>John Doe </h5>
          </aside>
        </div>

        <div className="m-5">
          <div className="flex justify-between items-center">
            <section>
              <h1 className="font-bold">Dashboard</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium minus
              </p>
            </section>
            <button className="bg-[#2E7D32] w-40 p-2 py-4 rounded-sm font-bold">
              Create Event
            </button>
          </div>

          <div className="analytics flex gap-10 mt-5">
            <div className="bg">
              <h1>1</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserDashboard;
