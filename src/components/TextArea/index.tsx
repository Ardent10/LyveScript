import { forwardRef, ChangeEvent } from "react";
import "./index.css";

type TextAreaProps = {
  code: string;
  handleCodeChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  ref: React.Ref<HTMLTextAreaElement>;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ code, handleCodeChange }, ref) => {
    return (
      <textarea
        ref={ref}
        value={code}
        onChange={handleCodeChange}
        className="textarea"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
    );
  }
);
