import React from 'react'
import Chemist from "../images/main pic 1.PNG"
import Notes from "../images/Main pic 2.PNG"
import PPt from "../images/Main pic 3.PNG"
import quiz from "../images/Main pic 4.PNG"
import atom from "../images/Main pic 5.PNG"
import "./homepage.css";

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="main-container">
               <div className="data">
                  <h2 className="red-text">Welcome To IB Chemistry</h2> 
                  <h1 className="title-text">Structured Complete Course</h1>
                  <h1 className="title-text">In IB Chemistry</h1> 
               <h3>Learn from the best having 20+ Years experience</h3>
               <button>Buy Now</button>
               </div>
               <img className="chemist-image" src={Chemist} alt="chemist-image"/>
            </div>
            <div className="features">
                   <h2 className="red-text">
                       FEATURES
                   </h2>
                   <div className="features-heading">
                   <h2 className="title-text">
                      Chemswot Offers the Following Main Benifits
                   </h2>

                   <h3 className="light-title">
                      Our Resources will help you achieve your dream Ib diploma score by our accurate topic detail capturing
                   </h3>
               </div>
               <div className="features-cards">
                <div className="card">
                    <img src={Notes} alt="Notes"/>
                    <h2>Accurate Notes</h2>
                    <p>Includes designed Mindmaps and puzzles</p>
                </div>
                <div className="card">
                    <img src={PPt} alt="PPt" />
                    <h2>Animated PPT's</h2>
                    <p>Includes textbook questions and examples</p>
                </div>
                <div className="card">
                    <img src={quiz} alt="quiz"/>
                    <h2>Topicwise Quiz</h2>
                    <p>Includes MCQ Paper 1 type questions</p>
                </div>
            </div>
        </div>
        <div className="Offers">
            <h1 className="red-text">OFFERS BY CHEMSWOT</h1>
               <div className="plans">
               <div className="available">
                   <div className="plan-card">
                     <h2>Montly Plan</h2>
                     <p>Get all at just 500</p>
                     <button>Buy Now</button>
                   </div>
                   <img src={atom} className="atom-image" alt="atom-image"/>
                   <div className="plan-card 2">
                     <h2>Yearly Plan</h2>
                     <p>Get all at just 5000</p>
                     <button>Buy Now</button> 
                   </div>
               </div>
               </div>
           </div>
        </div>
    )
}

export default Homepage
