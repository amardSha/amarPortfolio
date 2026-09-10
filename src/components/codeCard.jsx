import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const code = `const developer = {
  role: "Frontend Developer",
  stack: [
    "React",
    "TypeScript",
    "Redux"
  ],
  focus: "UX + performance",
  mindset: "ship with care"
};`;

export default function CodeCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10141c] shadow-2xl code-card">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="text-xs text-gray-500">
          developer.jsx
        </span>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "28px",
          background: "transparent",
          fontSize: "14px",
          lineHeight: "1.8",
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>

    </div>
  );
}