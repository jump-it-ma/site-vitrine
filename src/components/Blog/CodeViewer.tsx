"use client";

import { useEffect, useState } from "react";
import { BiSolidCopy } from "react-icons/bi";
import { MdLightMode, MdNightlight } from "react-icons/md";

type Props = {
  code: string;
  showLines: boolean;
};

const formatCode = (code: string, darkMode: boolean) => {
  const replacedDarkText = code
    .replace(/[\+\-*><=?]/g, '<span class="text-white">$&</span>') // Check operators "+ - * ? < > =" and replace them
    .replace(
      /(?<!\/\/.*)\b\d+(\.\d+)?\b/g,
      '<span class="text-[#3ce87b]">$&</span>'
    ) // Check for numbers excluding inside comments and replace them
    .replace(/\bconst\b/g, '<span class="text-[#ff79c6]">const</span>') // Replace "const"
    .replace(/\bfunction\b/g, '<span class="text-[#ff79c6]">function</span>') // Replace "function"
    .replace(/\basync\b/g, '<span class="text-blue-500">async</span>') // Replace "async"
    .replace(/\bawait\b/g, '<span class="text-[#ff79c6]">await</span>') // Replace "await"
    .replace(/\breturn\b/g, '<span class="text-[#ff79c6]">return</span>') // Replace "return"
    .replace(
      /\bconsole.log\b/g,
      '<span>console</span>.<span class="text-yellow-300">log</span>'
    ) // Replace "console.log"
    .replace(
      /(\w+)\s*\(([^)]*)\)/g,
      '<span class="text-yellow-300">$1</span><span class="text-[#8fd8fe]">($2)</span>'
    ) // Replace functions
    .replace(/[.,;:{}()]/g, '<span class="text-white">$&</span>') // Replace special characters ".,:;{}()"
    .replace(/(['`])(.*?)(\1)/g, '<span class="text-amber-600">$&</span>'); // Replace String inside ('') ("") and (``)
  // .replace(/\/\/(.*)/g, '<span class="text-green-500 brightness-50">//$1</span>') // Check comments and replace them

  const replacedLightText = code
    .replace(/[\+\-*><=?]/g, '<span class="text-black">$&</span>') // Check operators "+ - * ? < > =" and replace them
    .replace(
      /(?<!\/\/.*)\b\d+(\.\d+)?\b/g,
      '<span class="text-[#2ca358]">$&</span>'
    ) // Check for numbers excluding inside comments and replace them
    .replace(/\bconst\b/g, '<span class="text-pink-600">const</span>') // Replace "const"
    .replace(/\bfunction\b/g, '<span class="text-pink-600">function</span>') // Replace "function"
    .replace(/\basync\b/g, '<span class="text-blue-600">async</span>') // Replace "async"
    .replace(/\bawait\b/g, '<span class="text-pink-600">await</span>') // Replace "await"
    .replace(/\breturn\b/g, '<span class="text-pink-600">return</span>') // Replace "return"
    .replace(
      /\bconsole.log\b/g,
      '<span>console</span>.<span class="text-yellow-600">log</span>'
    ) // Replace "console.log"
    .replace(
      /(\w+)\s*\(([^)]*)\)/g,
      '<span class="text-yellow-600">$1</span><span class="text-cyan-600">($2)</span>'
    ) // Replace functions
    .replace(/[.,;:{}()]/g, '<span class="text-black">$&</span>') // Replace special characters ".,:;{}()"
    .replace(/\/\/(.*)/g, '<span class="text-[#9CA38F]">//$1</span>') // Check comments and replace them
    .replace(/(['`])(.*?)(\1)/g, '<span class="text-amber-600">$&</span>'); // Replace String inside ('') ("") and (``)

  return darkMode ? replacedDarkText : replacedLightText;
};

const CodeViewer = ({ code, showLines }: Props) => {
  const [darkMode, setDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  useEffect(() => {
    setHighlightedCode(formatCode(code, darkMode));
  }, [code, darkMode]);

  if (!highlightedCode) {
    return <div className="h-16 w-full animate-pulse bg-gray-400"></div>;
  }

  return (
    <div
      className={
        "relative max-h-[400px] overflow-y-auto max-w-[92.5vw] fold:max-w-[85vw] xm:max-w-[60vw] text-ellipsis flex flex-col justify-start items-start w-full p-4 rounded-md shadow-md " +
        (darkMode ? "bg-gray-900 text-[#8fd8fe]" : "bg-gray-200 text-[#30b6fc]")
      }
    >
      <div className="sticky top-0 left-[80%] sm:left-[90%] lg:left-[92.5%] flex justify-center items-center gap-2 z-40">
        {darkMode ? (
          <MdLightMode
            onClick={() => setDarkMode(false)}
            className="p-1 self-center rounded-md border bg-gray-900 border-white cursor-pointer"
            size={30}
            color="white"
          />
        ) : (
          <MdNightlight
            onClick={() => setDarkMode(true)}
            className="p-1 self-center rounded-md border bg-gray-200 border-black cursor-pointer"
            size={30}
            color="black"
          />
        )}
        {darkMode ? (
          <BiSolidCopy
            onClick={copyToClipboard}
            className={
              "p-1 self-center rounded-md border bg-gray-900 cursor-pointer " +
              (copied ? "border-[#3ce87b]" : "border-white")
            }
            size={30}
            color={copied ? "#3ce87b" : "white"}
          />
        ) : (
          <BiSolidCopy
            onClick={copyToClipboard}
            className={
              "p-1 self-center rounded-md border bg-gray-200 cursor-pointer " +
              (copied ? "border-[#2ca358]" : "border-black")
            }
            size={30}
            color={copied ? "#2ca358" : "black"}
          />
        )}
      </div>
      <pre className="flex flex-col justify-start items-start w-full mt-1">
        {highlightedCode.split("\n").map((line, index) => {
          return (
            <code key={index}>
              {showLines && (
                <span
                  className={
                    "absolute left-0 ml-2 select-none " +
                    (darkMode ? "text-white" : "text-black")
                  }
                >
                  {index + 1}
                </span>
              )}
              <span
                className="ml-8"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            </code>
          );
        })}
      </pre>
    </div>
  );
};

export default CodeViewer;
