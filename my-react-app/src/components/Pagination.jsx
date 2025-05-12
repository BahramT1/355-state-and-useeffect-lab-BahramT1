import React from 'react';
function Pagination({ offset, setOffset, totalCount }) {
  return (
    <div className="pagination">
      <button
        className="btn btn-back"
        onClick={() => setOffset(o => Math.max(o - 20, 0))}
        disabled={offset === 0}
      >
        Back
      </button>
      <button
        className="btn btn-next"
        onClick={() => setOffset(o => o + 20)}
        disabled={offset + 20 >= totalCount}
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;