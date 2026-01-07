import { Suspense } from 'react';
import { fetchRecipesPages } from '@/app/lib/data';
import RecipesTable from '@/app/ui/recipes/table';
import { CreateRecipe } from '@/app/ui/recipes/buttons';
import Search from '@/app/ui/search';
import Pagination from '@/app/ui/invoices/pagination';
import { RecipesTableSkeleton } from '@/app/ui/skeletons';

export default async function RecipesPage({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;
  
  const totalPages = await fetchRecipesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Recetas</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar recetas..." />
        <CreateRecipe />
      </div>
      <Suspense key={query + currentPage} fallback={<RecipesTableSkeleton />}>
        <RecipesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
