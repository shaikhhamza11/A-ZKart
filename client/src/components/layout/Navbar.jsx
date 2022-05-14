import { FaCartPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart)

  return (
    <nav className="relative">
      <div className="navbar bg-primary px-4 fixed top-0 z-10">
        <div className="flex-1">
          <Link to="/">
            <button className="btn btn-ghost normal-case text-xl font-bold">
              A{"->"}Z <span className="text-stone-900">{""} KART</span>
            </button>
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle mr-4">
              <div className="indicator">
                <Link to="/cart">
                  <FaCartPlus className="text-4xl text-stone " />
                  <span className="badge badge-sm indicator-item bg-zinc-50 text-stone-900">
                    {cartTotalQuantity}
                  </span>
                </Link>
              </div>
            </label>
            <div
              tabIndex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            ></div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="loading..."
                  src="https://api.lorem.space/image/face?hash=33791"
                />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </button>
              </li>
              <li>
                <button>Settings</button>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
