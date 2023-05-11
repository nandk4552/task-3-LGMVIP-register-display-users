import React, { useEffect, useState } from "react";
import Register from "./Register";
import Card from "./Card";

const Hero = () => {
  const [users, setUsers] = useState([]);

  const handleRegister = (user) => {
    setUsers([...users, user]);
    localStorage.setItem("users", JSON.stringify([...users, user]));
  };
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);
  return (
    <div className="bg-body-tertiary">
      <div className="container col-xxl-8 px-4 ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://ik.imagekit.io/fhe9c5aen/2020-12-031-16_B4TXozBUX.png?updatedAt=1683829185673"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              EnrollMate
            </h1>
            <p className="lead">
              {" "}
              Welcome to the EnrollMate! We are excited to have you join our
              community of learners. Please fill out the following information
              to begin the enrollment process.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white p-5  rounded">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
          <div className="col">
            <Register handleRegister={handleRegister} />
          </div>
          <div className="col">
            <Card users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
