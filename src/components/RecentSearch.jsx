import React from "react";

function RecentSearch({ recentHistory, setRecentHistory, setSelectQuestion }) {
  const clearSearch = () => {
    localStorage.clear();
    setRecentHistory([]);
  };

  const deleteSelectedQuestion = (selectItem) => {
    let history = JSON.parse(localStorage.getItem("history"));
    history = history.filter((item) => item !== selectItem);
    setRecentHistory(history);
    localStorage.setItem("history", JSON.stringify(history));
  };

  return (
    <div className="col-span-1 dark:bg-zinc-800 bg-gray-50 pt-3 h-dvh border border-black flex flex-col">
      <h1 className="text-xl dark:text-white text-black flex items-center justify-between px-4">
        <span>Recent Search</span>
        <button
          className="cursor-pointer bg-zinc-600 p-1 rounded hover:bg-zinc-700"
          onClick={clearSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#EFEFEF"
          >
            <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
          </svg>
        </button>
      </h1>

      <ul className="text-left overflow-auto text-sm m-3 flex-1">
        {recentHistory && recentHistory.length > 0 ? (
          recentHistory.map((item, index) => (
            <div
              key={index + Math.random()}
              className="flex items-center justify-between gap-2 pr-2 py-1"
            >
              <li
                onClick={() => setSelectQuestion(item)}
                className="flex-1 p-2 truncate rounded cursor-pointer dark:text-zinc-400 text-black dark:hover:bg-zinc-700 hover:bg-black hover:text-white"
              >
                {item}
              </li>
              <button
                className="cursor-pointer p-1 rounded dark:bg-zinc-700 dark:hover:bg-zinc-900 bg-zinc-700 hover:bg-zinc-900"
                onClick={() => deleteSelectedQuestion(item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#EFEFEF"
                >
                  <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No recent searches</p>
        )}
      </ul>
    </div>
  );
}

export default RecentSearch;
