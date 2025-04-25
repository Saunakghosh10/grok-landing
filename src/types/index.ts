import { ReactNode } from "react";

export interface ProductCardProps {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  renderVisual: () => ReactNode;
} 