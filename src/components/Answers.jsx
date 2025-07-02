import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../helper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdowm from "react-markdown";
// import { checkHeading } from "../helper";

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
        <SyntaxHighlighter
          {...props}
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          style={dark}
          PreTag="div"
        />
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index == 0 && totelResult > 1 ? (
        <span className="pt-2 text-xl block dark:text-white text-black ">
          {answers}
        </span>
      ) : heading ? (
        <span className="pt-2 text-lg block dark:text-white text-black">
          {answers}
        </span>
      ) : (
        <span className={type == "q" ? "pl-2" : "pl-10"}>
          <ReactMarkdowm components={renderer}>{answers}</ReactMarkdowm>
        </span>
      )}
    </>
  );
};
export default Answers;
