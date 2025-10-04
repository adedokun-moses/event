import { Outlet, Link } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
      <main className="flex h-vh">
        <aside className="dashboard  flex flex-col border-r-1 p-5 h-dvh basis-[15vw]">
          <h5>Lets Party</h5>
          <div className="eventblock flex flex-col mt-5 ">
            <Link to="/dashboard" className="pb-3 pl-2 hover:bg-[#1B5E20] hover:text-white hover:rounded-sm hover:pb-3 pt-3">
              Dashboard
            </Link>
            <Link
              to="/event"
              className="pb-3 pl-2 hover:bg-[#1B5E20] hover:text-white hover:rounded-sm hover:pb-3 pt-3"
            >
              Event{" "}
            </Link>
            <Link className="pb-3 pl-2 hover:bg-[#1B5E20] hover:text-white hover:rounded-sm hover:pb-3 pt-3">
              Analytics{" "}
            </Link>
            <Link className="pb-3 pl-2 hover:bg-[#1B5E20] hover:text-white hover:rounded-sm hover:pb-3 pt-3">
              Settings
            </Link>
          </div>
          <Link className="pb-3 mt-auto pl-2 hover:bg-[#1B5E20] hover:text-white hover:rounded-sm hover:pb-3 pt-3">
            Log Out
          </Link>
        </aside>
        <main className="w-full">
          <Outlet />
        </main>
      </main>
    </>
  );
};

export default DashboardLayout;
