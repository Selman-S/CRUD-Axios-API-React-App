import { useState } from "react";

const AddTutorial = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {

  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-4 text-info">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 fs-5">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control fs-5"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 fs-5">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control fs-5"
            id="desc"
            placeholder="Enter your Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-outline-info fs-5  mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
