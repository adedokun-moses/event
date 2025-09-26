import { Link } from "react-router-dom";
const FooterTab = () => {
  return (
    <>
      <footer className="bg-[#1B5E20] text-[#FFFF] mt-20">
        <div className="bg-[#33691E]">
          <div className="py-10 px-10 ">
            <h3 className="text-4xl font-bold py-4">
              Make unforgettable events feel effortlessly easy,<br></br> with
              Party Next Door
            </h3>
            <div className="flex gap-5 mt-3">
              <button className="bg-[#2E7D32] font-bold p-3 rounded-3xl w-50">
                Get a Demo
              </button>
              <button className="border rounded p-3 border-3 font-bold rounded-3xl w-50">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        <div className=" py-10 px-10">
          <section className="flex justify-between ">
            <div>
              <h5>Popular Features</h5>
              <ul>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
              </ul>
            </div>
            <div>
              <h5>Solutions</h5>
              <ul>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
                <li>2</li>
              </ul>
            </div>
            <div>
              <h5>Company</h5>
            </div>
            <div>
              <h5>Customers</h5>
            </div>
          </section>
        </div>
        <div className="foot  py-10 px-10 text-center">
          <h5>Party Next Door</h5>
          <p>Copyright @2025</p>
          <div className="inline-block mt-3">
            <Link to="#" className="border-r-3 pr-3">
              Privacy Policy
            </Link>
            <Link to="#" className="border-r-3 pr-3 pl-3">
              Website Accessibility
            </Link>
            <Link to="#" className="border-r-3 pr-3 pl-3">
              Manage Cookies{" "}
            </Link>
            <Link to="#" className="pr-3 pl-3">
              Privacy{" "}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTab;
