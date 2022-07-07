import React, { useEffect, useState } from 'react'

const EditItem = ({editTutorial,item}) => {
  
  const { id, title: newTitle, description }= item
  const [title, setTitle] = useState(newTitle);
  const [desc, setDesc] = useState(description);

  useEffect(() => {
    setTitle(newTitle);
    setDesc(description);
  }, [newTitle, description]);
 
  const handleEdit = (e) => {
    e.preventDefault();
    editTutorial(id, title, desc);
    setTitle('');
    setDesc('');
  }

  return (
    <div className="modal" tabIndex={-1} id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Tutorial</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
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
                onChange={e => setTitle(e.target.value)}
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
                onChange={e => setDesc(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleEdit}
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditItem
