import React, { useState, useEffect, useRef, useContext } from "react";
import { TextArea } from "../TextArea";
import { CodeHighlighter } from "../CodeHighlighter";
import { Selector } from "../Select";
import { PrismTheme, themes } from "prism-react-renderer";
import { initialCode, LanguageOptions, themeOptions } from "../../utils";
import { LiveProvider, withLive, LiveError, LivePreview } from "react-live";
import "./index.css";
import { CodePreview } from "../CodePreview";

export function CodeEditor() {
  const [code, setCode] = useState(initialCode);
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState<PrismTheme>(themes.vsDark);
  const [img, setImg] = useState({
    src: "./assets/success.webp",
    msg: "Yay! Code compiled Successfully.",
  });

  const textAreaRef = useRef(null);
  const preRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textArea = textAreaRef.current;
      const pre = preRef.current;

      if (textArea && pre) {
        const toTop = textArea.scrollTop;
        const toLeft = textArea.scrollLeft;

        pre.scrollTop = toTop;
        pre.scrollLeft = toLeft + 0.2;
      }
    };
    textAreaRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      textAreaRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [code]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  function handleThemeChange(value: string) {
    const newTheme = themeOptions.find((option) => option.title === value);
    setTheme(newTheme?.value || theme);
  }

  return (
    <div className="code-editor-container">
      <div className="selector-container">
        <Selector
          name="language"
          label="Language"
          options={LanguageOptions}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <Selector
          name="theme"
          label="Theme"
          options={themeOptions}
          onChange={(handleChange) =>
            handleThemeChange(handleChange.target.value)
          }
        />

        <div className="connection">
          <img className="success-failure-img" src={img.src} alt="success" />
          <p>{img.msg}</p>
        </div>
      </div>

      <div className="editor-container">
        <TextArea
          ref={textAreaRef}
          code={code}
          handleCodeChange={handleChange}
        />
        <CodeHighlighter
          preRef={preRef}
          language={language}
          code={code}
          theme={theme}
        />
        <CodePreview
          code={code}
          language={language}
          theme={theme}
          setImg={setImg}
        />
      </div>
    </div>
  );
}
