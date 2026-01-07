import Image from 'next/image';
import { UpdateRecipe, DeleteRecipe, ToggleAvailability } from '@/app/ui/recipes/buttons';
import { fetchFilteredRecipes } from '@/app/lib/data';
import { formatCurrency } from '@/app/lib/utils';

export default async function RecipesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const recipes = await fetchFilteredRecipes(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {recipes?.map((recipe) => (
              <div
                key={recipe.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <Image
                      src={recipe.image_url}
                      className="mr-2 rounded-lg"
                      width={60}
                      height={60}
                      alt={`${recipe.name}`}
                    />
                    <div>
                      <p className="text-sm font-medium">{recipe.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{recipe.category}</p>
                    </div>
                  </div>
                  <ToggleAvailability id={recipe.id} available={recipe.available} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-lg font-medium">
                      {formatCurrency(recipe.price)}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-2">{recipe.description}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateRecipe id={recipe.id} />
                    <DeleteRecipe id={recipe.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Receta
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Descripción
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Precio
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Categoría
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estado
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Acciones</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {recipes?.map((recipe) => (
                <tr
                  key={recipe.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={recipe.image_url}
                        className="rounded-lg"
                        width={48}
                        height={48}
                        alt={`${recipe.name}`}
                      />
                      <p className="font-semibold">{recipe.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 max-w-xs truncate">
                    {recipe.description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(recipe.price)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 capitalize">
                    {recipe.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <ToggleAvailability id={recipe.id} available={recipe.available} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateRecipe id={recipe.id} />
                      <DeleteRecipe id={recipe.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
