import { useScrollspy } from "@/hooks/useScrollspy";
import { PageNav } from "./PageNav";

interface ModuleNavProps {
  links: { id: string; label: string }[];
}

export function ModuleNav({ links }: ModuleNavProps) {
  const { activeId } = useScrollspy(links.map((l) => l.id));

  return <PageNav sections={links} activeId={activeId} />;
}
