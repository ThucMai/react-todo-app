/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import Pagination from "../../../components/Pagination";

function TodoList({ todoList, changeStatus, deleteTodo }) {
  const [searchItem, setSearchItem] = useState("");
  const filteredTodoList = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  // pagination
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTodoList = filteredTodoList.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredTodoList.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    if (currentTodoList.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentTodoList, currentPage]);

  return (
    <div>
      <div className="d-flex justify-between items-center mb-4">
        <p className="search-text">Search:</p>
        <input
          type="text"
          placeholder="Search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="search-input"
        />
      </div>
      <p className="list-todo">List:</p>
      <ul>
        {currentTodoList.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              index={todo.id}
              changeStatus={changeStatus}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />

      {/* <div className="pagination pagination d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                class={`page-link ${currentPage === 1 ? "disabled" : ""}`}
                // eslint-disable-next-line no-script-url
                href="javascript:;"
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
                  href="javascript:;"
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
                href="javascript:;"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </div>
  );
}

export default TodoList;
