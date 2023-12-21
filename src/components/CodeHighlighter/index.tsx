import { Highlight, PrismTheme } from "prism-react-renderer";
import "./index.css";

interface CodeEditorProps {
  language: string;
  code: string;
  preRef: React.RefObject<HTMLPreElement>;
  theme: PrismTheme;
}

export const CodeHighlighter = ({
  language,
  code,
  preRef,
  theme,
}: CodeEditorProps) => {
  return (
    <Highlight theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className={className} ref={preRef}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
