import { InlineMath } from "react-katex";

export const renderTextWithMath = (text: string): React.ReactNode => {
  const parts = text.split(/(\$[^$]*\$)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('$') && part.endsWith('$') ? (
          <InlineMath key={i} math={part.slice(1, -1)} />
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};