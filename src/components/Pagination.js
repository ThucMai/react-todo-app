/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Pagination({ currentPage, totalPages, goToPage }) {
  return (
    <div className="pagination pagination d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              class={`page-link ${currentPage === 1 ? "disabled" : ""}`}
              // eslint-disable-next-line no-script-url
              href="javascript:void(0);"
              aria-label="Previous"
              onClick={(e) => {
                e.preventDefault();
                goToPage(currentPage - 1);
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i + 1} className="page-item">
              <a
                class={`page-link ${currentPage === i + 1 ? "active" : ""}`}
                // eslint-disable-next-line no-script-url
                href="javascript:void(0);"
                onClick={(e) => {
                  e.preventDefault();
                  goToPage(i + 1);
                }}
              >
                {i + 1}
              </a>
            </li>
          ))}
          <li class="page-item">
            <a
              class={`page-link ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                goToPage(currentPage + 1);
              }}
              // eslint-disable-next-line no-script-url
              href="javascript:void(0);"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Pagination;
