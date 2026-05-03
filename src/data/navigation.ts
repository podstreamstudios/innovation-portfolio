export interface NavItem {
  label: string;
  path: string;
  color?: string;
}

export const siteNav: NavItem[] = [
  { label: "Overview", path: "/overview", color: "processes" },
  { label: "Processes", path: "/processes" },
  { label: "Resources", path: "/resources" },
  { label: "Values", path: "/values" },
  { label: "Work Plan", path: "/workplan" },
  { label: "Outputs", path: "/outputs" },
  { label: "PhD ↗", path: "https://phd.crooney.ca" },
];
