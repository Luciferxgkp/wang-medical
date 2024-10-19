import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Page not found - Wang Medical",
  description: "Page not found - Wang Medical",
};

export default function NotFoundCatchAll() {
  notFound();
}
