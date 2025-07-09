import Answers from "./Answers";

const QandAnsDisplay = ({ item, index }) => {
  return (
    <>
      <div
        key={index + Math.random()}
        className={`${
          item.type == "q" ? "flex justify-end" : "flex justify-start"
        } flex-wrap w-full px-4 sm:px-6 md:px-10`}
      >
        {item.type == "q" ? (
          <li
            key={index + Math.random()}
            className="text-right pb-5 border-2 mr-5 mt-5 dark:bg-zinc-700 bg-black text-white dark:text-white border-zinc-700 rounded-tl-3xl rounded-b-3xl w-fit max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl px-4 shadow-md"
          >
            <Answers
              ans={item.text}
              totelResult={1}
              index={index}
              type={item.type}
            />
          </li>
        ) : (
          <ul className="flex flex-col gap-2 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
            {item.text.map((ansItem, ansIndex) => (
              <li
                key={ansIndex + Math.random()}
                className="text-left text-black dark:text-white transition-colors"
              >
                <Answers
                  ans={ansItem}
                  totelResult={item.lenght}
                  index={ansIndex}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default QandAnsDisplay;
