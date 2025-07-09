import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdowm from "react-markdown";

const Answers = ({ ans, totelResult, index, type }) => {
  const [heading, setHeading] = useState(false);
  const [answers, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStars(ans));
    }
  }, []);

  const renderer = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <div className="overflow-x-auto rounded-lg my-2">
          <SyntaxHighlighter
            {...props}
            children={String(children).replace(/\n$/, "")}
            language={match[1]}
            style={dark}
            PreTag="div"
          />
        </div>
      ) : (
        <code
          {...props}
          className={`${className} px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm`}
        >
          {children}
        </code>
      );
    },
  };

  return (
    <div className="w-full max-w-5xl px-3">
      {index == 0 && totelResult > 1 ? (
        <span className="text-lg sm:text-xl md:text-2xl font-semibold block dark:text-white text-black break-words leading-relaxed">
          {answers}
        </span>
      ) : heading ? (
        <span className=" mt-4 md:mt-3 sm:mt-2 text-lg sm:text-lg md:text-xl font-semibold block dark:text-white text-black break-words leading-relaxed">
          {answers}
        </span>
      ) : (
        <span
          className={`${
            type == "q" ? "pl-1 sm:pl-4" : ""
          } text-sm sm:text-base md:text-lg leading-relaxed break-words`}
        >
          <ReactMarkdowm components={renderer}>{answers}</ReactMarkdowm>
        </span>
      )}
    </div>
  );
};

export default Answers;
