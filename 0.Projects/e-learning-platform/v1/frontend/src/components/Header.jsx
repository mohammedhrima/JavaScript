import React, { useState } from "react";
import "./styles/Header.css";
import Logo from "../assets/Logo2.png";
import { animate, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  /* const changeBackground = async () => {
    if (window.scrollY > 100) console.log("change color");
  };*/

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      window.scrollY > 200 ? setScrolled(true) : setScrolled(false);
    });
  });

  return (
    <>
      <div className={`Navbar ${scrolled && "scrolled"}`}>
        {
          <motion.img
            src={Logo}
            alt="logo"
            className="nav-logo"
            variants={variants1}
            initial="initial"
            animate="animate1"
            onClick={() => navigate("/")}
          />
        }
        <div className={`nav-items ${isOpen && "open"}`}>
          {user && user.isAdmin && (
            <motion.a
              variants={variants1}
              initial="initial"
              animate="animate1"
              href={`/dashboard`}
            >
              Dashboard
            </motion.a>
          )}
          {user ? (
            <motion.a
              variants={variants1}
              initial="initial"
              animate="animate1"
              href={`/account/${user._id}`}
            >
              My account
            </motion.a>
          ) : (
            <motion.a
              variants={variants1}
              initial="initial"
              animate="animate1"
              href="/"
            >
              Home page
            </motion.a>
          )}

          <motion.a variants={variants1} initial="initial" animate="animate2">
            English for specific perpose
          </motion.a>
          <motion.a variants={variants1} initial="initial" animate="animate3">
            Executive coaching
          </motion.a>
          <motion.a variants={variants1} initial="initial" animate="animate4">
            Soft skills learning
          </motion.a>
          <motion.a
            variants={variants1}
            initial="initial"
            animate="animate5"
            href="/international-programs"
          >
            International programs
          </motion.a>
          <motion.a variants={variants1} initial="initial" animate="animate6">
            <div className="dropdown">
              <a className="dropbtn">Other services</a>
              <div className="dropdown-content">
                <a href="/test-level">Test your level</a>
              </div>
            </div>
          </motion.a>
          <motion.a variants={variants1} initial="initial" animate="animate7">
            Contact us
          </motion.a>
          {user && (
            <motion.a
              variants={variants1}
              initial="initial"
              animate="animate8"
              onClick={handleLogout}
            >
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </motion.a>
          )}
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
      {/*we are*/}
      <motion.div
        className={`${isOpen ? "none" : "weare-header"}`}
        variants={variants1}
        initial="initial"
        animate="animate9"
      >
        <h1>WHO WE ARE ?</h1>
        <h2>
          Lean English Solution provides a wide range of English Language
          solutions and soft skills training. Lean English Solution uses a lean
          programme and a blended system of online, one-to-one and small group
          lessons to help business professionals compete in a Global Market and
          take their English skills to the next level.
        </h2>
        <a href="#">See more...</a>
      </motion.div>
    </>
  );
}

const variants1 = {
  initial: {
    y: "-70vw",
  },
  animate0: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
  animate1: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  animate2: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
    },
  },
  animate2: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  animate3: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
    },
  },
  animate4: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  animate5: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
    },
  },
  animate6: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  animate7: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  animate8: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  animate9: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};

export default Header;
