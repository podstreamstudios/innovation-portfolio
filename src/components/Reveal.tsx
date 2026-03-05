import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Reveal({ children, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
