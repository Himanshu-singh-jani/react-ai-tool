import Answers from "./Answers";

const QandAnsDisplay = ({ item, index }) => {
  return (
    <>
      <div
        key={index + Math.random()}
        className={item.type == "q" ? "flex justify-end" : ""}
      >
        {item.type == "q" ? (
          <li
            key={index + Math.random()}
            className="text-right pb-3 border-2 mr-5 mt-5 dark:bg-zinc-700 bg-black text-white dark:text-white border-zinc-700 rounded-tl-3xl rounded-b-3xl w-fit"
          >
            <Answers
              ans={item.text}
              totelResult={1}
              index={index}
              type={item.type}
            />
          </li>
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <li
              key={ansIndex + Math.random()}
              className="text-left p-1 text-black dark:text-white"
            >
              <Answers
                ans={ansItem}
                totelResult={item.lenght}
                index={ansIndex}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
};
export default QandAnsDisplay;
