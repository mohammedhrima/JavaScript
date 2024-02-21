import React from "react";
import "./styles/Home.css";
import icon1 from "../assets/purpose.png";
import icon2 from "../assets/coaching.png";
import icon3 from "../assets/business.png";
import icon4 from "../assets/international.png";
import icon5 from "../assets/diagnostic.png";
import icon6 from "../assets/assessment.png";
import icon7 from "../assets/speak.png";
import icon8 from "../assets/tailored.png";
import icon9 from "../assets/public.png";
import icon10 from "../assets/kaizen.png";
import image0 from "../assets/meeting.png";
/*companies*/
import image1 from "../assets/companies/001.png";
import image2 from "../assets/companies/002.png";
import image3 from "../assets/companies/003.png";
import image4 from "../assets/companies/004.png";
import image5 from "../assets/companies/005.png";
import image6 from "../assets/companies/006.png";
import image7 from "../assets/companies/007.png";
import image8 from "../assets/companies/008.png";
import image9 from "../assets/companies/009.png";
import image10 from "../assets/companies/010.png";
import image11 from "../assets/companies/011.png";
import image12 from "../assets/companies/012.png";
import image13 from "../assets/companies/013.png";
import image14 from "../assets/companies/014.png";
import image15 from "../assets/companies/015.png";
import image16 from "../assets/companies/016.png";

import Header from "../components/Header";

import { animate, motion } from "framer-motion";
import { useSelector } from "react-redux";
import Account from "../components/Account";

function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="Home">
      {!user && <Account />}
      <Header />
      <video loop autoPlay muted id="myVideo">
        <source src={require("../assets/Background.mp4")} type="video/mp4" />
      </video>
      {/*<img src={Background} className="bg"></img>*/}
      <div className="weare">
        <h1>WHO WE ARE ?</h1>
        <h2>
          Lean English Solution provides a wide range of English Language
          solutions and soft skills training. Lean English Solution uses a lean
          programme and a blended system of online, one-to-one and small group
          lessons to help business professionals compete in a Global Market and
          take their English skills to the next level.
        </h2>
        <a href="#">See more...</a>
      </div>
      <div className="offer">
        <h1>WHAT WE OFFER ?</h1>
        <div>
          <motion.span
            className="purpose"
            variants={variants1}
            initial="initial"
            animate="animate1"
          >
            <img src={icon1} />
            <h2>English For Specific Purpose</h2>{" "}
          </motion.span>
          <motion.span
            className="coaching"
            variants={variants1}
            initial="initial"
            animate="animate2"
          >
            <img src={icon2} />
            <h2>Executive Coaching</h2>{" "}
          </motion.span>
          <motion.span
            className="business"
            variants={variants1}
            initial="initial"
            animate="animate3"
          >
            <img src={icon3} />
            <h2>General & Business English</h2>{" "}
          </motion.span>
          <motion.span
            className="international"
            variants={variants1}
            initial="initial"
            animate="animate4"
          >
            <img src={icon4} />
            <h2>International Programs</h2>{" "}
          </motion.span>
        </div>
      </div>
      <div className="process">
        <h1>TRAINNING PROCESS</h1>
        <div>
          <motion.span
            className="diagnostic"
            variants={variants1}
            initial="initial"
            animate="animate1"
          >
            <img src={icon5} />
            <h2>Diagnostic Test</h2>
          </motion.span>
          <motion.span
            className="assessment"
            variants={variants1}
            initial="initial"
            animate="animate2"
          >
            <img src={icon6} />
            <h2>Needs Assesement</h2>
          </motion.span>
          <motion.span
            className="speak"
            variants={variants1}
            initial="initial"
            animate="animate3"
          >
            <img src={icon7} />
            <h2>Speak To Coach</h2>
          </motion.span>
          <motion.span
            className="tailored"
            variants={variants1}
            initial="initial"
            animate="animate4"
          >
            <img src={icon8} />
            <h2>Tailored Content</h2>
          </motion.span>
          <motion.span
            className="public"
            variants={variants1}
            initial="initial"
            animate="animate5"
          >
            <img src={icon9} />
            <h2>Speak In Public (Emailing / Reporting / Negotiation)</h2>
          </motion.span>
          <motion.span
            className="kaizen"
            variants={variants1}
            initial="initial"
            animate="animate6"
          >
            <img src={icon10} />
            <h2>Reassesment / Caizen</h2>
          </motion.span>
        </div>
      </div>
      <motion.div
        className="softskills"
        variants={variants1}
        initial="initial1"
        animate="animate7"
      >
        <h1>LANGUAGE AND SOFTSKILLS TRAINERS</h1>
        <div className="last">
          <img src={image0} />
          <h2>
            Lean English Solutions offers you the best corporate training
            solutions to your team requirements. Corporate Branding, Executive
            coaching, Soft skills, Presentation skills , Negotiation skills,
            Communication skills, Personal Development , Salesforce , NLP
            Training…
          </h2>
        </div>
      </motion.div>
      <motion.div
        className="company"
        variants={variants1}
        initial="initial1"
        animate="animate8"
      >
        <h1>COMPANY WORKED WITH</h1>
        <div>
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
          <img src={image5} />
          <img src={image6} />
          <img src={image7} />
          <img src={image8} />
          <img src={image9} />
          <img src={image10} />
          <img src={image12} />
          <img src={image13} />
          <img src={image11} />
          <img src={image14} />
          <img src={image15} />
          <img src={image16} />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;

const variants1 = {
  initial: {
    x: "-200vw"
  },
  initial1: {
    y: "-500vh"
  },
  animate0: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.35
    }
  },
  animate1: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.65
    }
  },
  animate2: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.85
    }
  },
  animate3: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.05
    }
  },
  animate4: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.25
    }
  },
  animate5: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.45
    }
  },
  animate6: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.65
    }
  },
  animate7: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.85
    }
  },
  animate8: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2.05
    }
  }
};
