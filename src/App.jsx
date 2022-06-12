import "./App.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import img from "./images/index.jpg";
import ShowHideComponent from "./components/ShowHideComponent";

function App() {
  const [dropDown, setDropDown] = useState(false);
  const [showHide, setShowHide] = useState(false);
  const [myLocalStorage, setMyLocalStorage] = useState("");

  useEffect(() => {
    let saved = localStorage.getItem("localStorage");
    if (
      localStorage.getItem("localStorage") === null ||
      localStorage.getItem("localStorage") === undefined
    ) {
      localStorage.setItem("localStorage", "something");
    }
    if (myLocalStorage === "") {
      setMyLocalStorage(saved);
    }
  });

  //set favicon
  var link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = img;
  document.getElementsByTagName("head")[0].appendChild(link);

  return (
    <div className="App">
      {!dropDown && (
        <FaAngleDown
          className="dropDownIcon hidden"
          onClick={(e) => {
            setDropDown(!dropDown);
          }}
        />
      )}
      {dropDown && (
        <nav>
          <FaAngleUp
            className="dropDownIcon"
            onClick={(e) => {
              setDropDown(!dropDown);
            }}
          />
          <Link
            className="active links"
            onClick={(e) => {
              removeActive();
              addActive(e.target);
            }}
            to="/"
          >
            Home
          </Link>
          <Link className="links" to="/Create">
            Create
          </Link>
          <Link className="links" to="/Read">
            Read
          </Link>
          <Link className="links" to="/Update">
            Update
          </Link>
          <Link className="links" to="/Delete">
            Delete
          </Link>
        </nav>
      )}
      <Outlet />
      <button
        onClick={(e) => {
          setShowHide(!showHide);
        }}
      >
        show hide button
      </button>
      {showHide && <ShowHideComponent />}
    </div>
  );
}

export default App;
