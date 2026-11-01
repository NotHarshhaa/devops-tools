import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryTools from "./CategoryTools";
import { CATEGORIES, getCategory } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.id }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return <CategoryTools categoryId={category.id} />;
}
