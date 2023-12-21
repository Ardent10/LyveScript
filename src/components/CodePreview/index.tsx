import { LiveProvider, LiveError, LivePreview } from "react-live";
import { PrismTheme } from "prism-react-renderer";
import { useEffect, useRef } from "react";
import "./index.css";

interface CodeEditorProps {
  language: string;
  code: string;
  theme: PrismTheme;
  setImg: React.Dispatch<React.SetStateAction<{ src: string; msg: string }>>;
}

export function CodePreview({
  language,
  theme,
  code,
  setImg,
}: CodeEditorProps) {
  const livePreviewContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleErrorCheck = () => {
      const syntaxErrorPre =
        livePreviewContainerRef.current?.querySelector("pre");
      setImg(syntaxErrorPre ? errorImage : successImage);
    };

    handleErrorCheck(); 

  
    const observer = new MutationObserver(() => handleErrorCheck());
     if (livePreviewContainerRef.current) {
       observer.observe(livePreviewContainerRef.current, { childList: true });
     }

    return () => {
      observer.disconnect();
    };
  }, [code, setImg]);

  return (
    <LiveProvider code={code} theme={theme} language={language}>
      <div ref={livePreviewContainerRef} className="live-preview-container">
        <LiveError className="error" />
        <LivePreview />
      </div>
    </LiveProvider>
  );
}

const errorImage = {
  src: "./assets/fail.jpg",
  msg: "Oops! There is a Syntax Error.",
};
const successImage = {
  src: "./assets/success.webp",
  msg: "Yay! Code compiled Successfully.",
};
