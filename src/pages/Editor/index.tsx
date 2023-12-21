import { CodeEditor } from "../../components/CodeEditor";
import { Navbar } from "../../components/Navbar";
import { Intro } from "../../components/Intro";

export function Editor() {
  return (
    <>
      <Navbar />
      <Intro/>
      <CodeEditor />
    </>
  );
}
