import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handelClick = () => {
    logout();
  };

  return (
    <div>
      <header>
        <div className="container">
          <Link to="/">
            <h1>Warkout Budyyy</h1>
          </Link>

          <nav>
            {user && (
              <div>
                <span>{user.email}</span>
                <button onClick={handelClick}>LOGOUT</button>
              </div>
            )}
            {!user && (
              <div>
                <Link to={"/login"}>Login</Link>
                <Link to={"/signUp"}>Sign Up</Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
