import { useSelector } from "react-redux";

const Sidebar = () => {
  const navbar = useSelector((store) => store.navbarSlice.displayNavbar);

  return !navbar ? (
    <div className="shadow-lg">
      <ul role="list" className="px-2 py-3 font-sm ">
        <li>
          <a href="/" className="block px-2 py-3 hover:bg-slate-100 rounded-lg">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block px-2 py-3 hover:bg-slate-100 rounded-lg">
            Shorts
          </a>
        </li>
        <li>
          <a href="#" className="block px-2 py-3 hover:bg-slate-100 rounded-lg">
            Subscriptions
          </a>
        </li>
      </ul>
      <hr />
      <ul role="list" className="px-2 py-3 font-sm">
        <li>
          <a href="#" className="block px-2 py-3 hover:bg-slate-100 rounded-lg">
            Library
          </a>
        </li>
        <li>
          <a href="#" className="block px-2 py-3 hover:bg-slate-100 rounded-lg">
            History
          </a>
        </li>
        <li>
          <a href="#" className="block px-2 py-3 hover:bg-slate-100 rounded-lg">
            Your videos
          </a>
        </li>
        <li>
          <a href="#" className="block px-2 py-3 hover:bg-slate-100 rounded-lg">
            Watch later
          </a>
        </li>
        <li>
          <a href="#" className="block px-2 py-3 hover:bg-slate-100 rounded-lg">
            liked videos
          </a>
        </li>
      </ul>
    </div>
  ) : null;
};

export default Sidebar;
