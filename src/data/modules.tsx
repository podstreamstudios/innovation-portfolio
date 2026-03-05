import type { ReactNode } from "react";

export interface ModuleData {
  id: string;
  number: number;
  code: string;
  stackLabel: string;
  title: ReactNode;
  subtitle: string;
  badges: string[];
  navLabel: string;
  mainContent: ReactNode;
  sidebar: ReactNode;
}

export interface CascadeData {
  text: string;
}

export interface StackModules {
  modules: ModuleData[];
  cascades: CascadeData[];
}
