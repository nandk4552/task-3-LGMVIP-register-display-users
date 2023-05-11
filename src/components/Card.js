import React from "react";

const Card = ({ users }) => {
  return (
    <div className=" container m-3 border p-3 shadow-sm rounded">
<h4 className="text-center display-5 fw-bold my-4">Student Details</h4>
      {users.length !== 0 ? (
        users.map((user) => (
          <div
            key={user.email}
            className="card mb-3 shadow-sm rounded"
            style={{ maxWidth: 540 }}
          >
            <div className="row g-0">
              <div className="col-md-4 border-end">
                <img
                  src={
                    user.imgLink
                      ? user?.imgLink
                      : `https://ik.imagekit.io/fhe9c5aen/users-vector-icon-png_260862-removebg-preview_f5fwgz685h.png?updatedAt=1677163923591`
                  }
                  className="img-fluid rounded-start w-100 h-100"
                  alt={`${user.name}+img`}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Name: {user.name}</h5>
                  <p className="card-text">Gender: {user.gender}</p>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">
                    website link: <a href={user.link || "#"}>{user.link}</a>
                  </p>
                  <p className="card-text">
                    skills:
                    <small className="text-body-secondary">{user.skills}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div class="alert alert-danger text-center my-3" role="alert">
          No Student Registered!
        </div>
      )}
    </div>
  );
};

export default Card;
