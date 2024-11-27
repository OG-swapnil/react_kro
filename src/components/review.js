import React from 'react'

export default function review() {
  return (
    <div>
        <div id="modal" className="modal fade" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalLabel">Leave a Review</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">Rating (1-5):</label>
                                <input type="number" id="rating" className="form-control" min="1" max="5" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="comment" className="form-label">Comment:</label>
                                <textarea id="comment" className="form-control" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="submit-review" className="btn btn-primary">Submit</button>
                        <button type="button" id="close-modal" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
