import { PrismTheme, themes } from "prism-react-renderer";

export const LanguageOptions = [
  { title: "JavaScript", value: "javascript" },
  { title: "TypeScript", value: "typescript" },
  { title: "JSX", value: "jsx" },
  { title: "CSS", value: "css" },
  { title: "Sass", value: "sass" },
  { title: "Markdown", value: "markdown" },
  { title: "HTML", value: "html" },
  { title: "JSON", value: "json" },
  { title: "YAML", value: "yaml" },
  { title: "GraphQL", value: "graphql" },
  { title: "SQL", value: "sql" },
  { title: "Python", value: "python" },
  { title: "Java", value: "java" },
  { title: "C", value: "c" },
  { title: "C++", value: "cpp" },
  { title: "C#", value: "csharp" },
  { title: "Go", value: "go" },
  { title: "Ruby", value: "ruby" },
  { title: "Rust", value: "rust" },
  { title: "Swift", value: "swift" },
  { title: "Kotlin", value: "kotlin" },
  { title: "Dart", value: "dart" },
  { title: "Bash", value: "bash" },
  { title: "Shell", value: "shell" },
  { title: "PowerShell", value: "powershell" },
  { title: "Makefile", value: "makefile" },
  { title: "Docker", value: "docker" },
  { title: "Ini", value: "ini" },
  { title: "Diff", value: "diff" },
  { title: "Plain Text", value: "plaintext" },
];

export const initialCode = `function CounterApp(){
  const [counter, setCounter] = React.useState(0);
  return (
    <div 
      style={{ 
        textAlign: 'center', 
        marginTop: '20px' 
      }}
    >
      <h1 
        style={{ 
          fontSize: '24px', 
          color: '#333' 
        }}>
        Counter Value: {counter}
        </h1>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={()=>setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
};
`;

type ThemeOption = {
  title: string;
  value: PrismTheme;
};

export const themeOptions: ThemeOption[] = [
  { title: "VS Dark", value: themes.vsDark },
  { title: "VS Light", value: themes.vsLight },
  { title: "Dracula", value: themes.dracula },
  { title: "Duotone Dark", value: themes.duotoneDark },
  {
    title: "Duotone Light",
    value: themes.duotoneLight,
  },
  { title: "GitHub", value: themes.github },
  {
    title: "Jettwave Dark",
    value: themes.jettwaveDark,
  },
  {
    title: "Jettwave Light",
    value: themes.jettwaveLight,
  },
  { title: "Night Owl", value: themes.nightOwl },
  {
    title: "Night Owl Light",
    value: themes.nightOwlLight,
  },
  { title: "Oceanic Next", value: themes.oceanicNext },
  { title: "Okaidia", value: themes.okaidia },
  { title: "One Dark", value: themes.oneLight },
  { title: "One Light", value: themes.oneLight },
  { title: "Palenight", value: themes.palenight },
  {
    title: "Shades Of Purple",
    value: themes.shadesOfPurple,
  },
  { title: "Synthwave84", value: themes.synthwave84 },
  { title: "Ultramin", value: themes.ultramin },
];
