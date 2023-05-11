import React, { useState } from "react";

const Register = ({ handleRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [gender, setGender] = useState("male");
  const [skills, setskills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      link: link,
      imgLink: imgLink,
      gender: gender,
      skills: skills,
    };
    handleRegister(user);

    handleClear();
  };
  const handleClear = () => {
    setName("");
    setEmail("");
    setLink("");
    setImgLink("");
    setGender("male");
    setskills("");
  };

  return (
    <div className="container m-3 border p-3 shadow-sm rounded">
<h4 className="text-center display-5 fw-bold my-4">Registration Form</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Enter website link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <label htmlFor="floatingInput">Website Link</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Enter the Image Link"
            value={imgLink}
            onChange={(e) => setImgLink(e.target.value)}
          />
          <label htmlFor="floatingInput">Image Link</label>
        </div>
        <div>
          <label htmlFor="floatingInput" className="mx-2 my-3">
            Gender:{" "}
          </label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              female
            </label>
          </div>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="skillsInput"
            placeholder="enter your skills separated by comma"
            value={skills}
            onChange={(e) => setskills(e.target.value)}
          />
          <label htmlFor="skillsInput">Enter your skills (,) separated</label>
        </div>

        <button type="submit" className="btn btn-primary mr-3">
          Enroll Now
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="btn btn-danger mx-3"
        >
          clear
        </button>
      </form>
    </div>
  );
};

export default Register;
