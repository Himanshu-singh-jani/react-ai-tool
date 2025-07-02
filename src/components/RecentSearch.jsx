function RecentSearch({ recentHistory, setRecentHistory, setSelectQuestion }) {
  const clearSearch = () => {
    localStorage.clear();
    setRecentHistory([]);
  };
  return (
    <>
      <div className="col-span-1 dark:bg-zinc-800 bg-gray-50 pt-3 h-dvh border border-black">
        <h1 className="text-xl dark:text-white text-black flex text-center justify-center gap-1">
          <span> Recent Search</span>
          <button className="cursor-pointer" onClick={clearSearch}>
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
        <ul className="text-left overflow-auto text-m m-5">
          {recentHistory &&
            recentHistory.map((item, index) => (
              <li
                onClick={() => setSelectQuestion(item)}
                className="p-1 pl-5 truncate dark:text-zinc-500 text-black cursor-pointer dark:hover:bg-zinc-700 hover:bg-black hover:text-zinc-100"
                key={index + Math.random()}
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
export default RecentSearch;
