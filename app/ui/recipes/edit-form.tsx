'use client';

import Link from 'next/link';
import {
  CurrencyDollarIcon,
  DocumentTextIcon,
  TagIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { updateRecipe, State } from '@/app/lib/actions';
import { AllergenType, MenuCategory, Recipe } from '@/app/lib/definitions';

const categories: { value: MenuCategory; label: string }[] = [
  { value: 'starters', label: 'Entrantes' },
  { value: 'mains', label: 'Principales' },
  { value: 'desserts', label: 'Postres' },
  { value: 'drinks', label: 'Bebidas' },
];

const allergens: { value: AllergenType; label: string }[] = [
  { value: 'gluten', label: 'Gluten' },
  { value: 'dairy', label: 'Lácteos' },
  { value: 'eggs', label: 'Huevos' },
  { value: 'fish', label: 'Pescado' },
  { value: 'shellfish', label: 'Marisco' },
  { value: 'nuts', label: 'Frutos secos' },
  { value: 'peanuts', label: 'Cacahuetes' },
  { value: 'soy', label: 'Soja' },
  { value: 'celery', label: 'Apio' },
  { value: 'mustard', label: 'Mostaza' },
  { value: 'sesame', label: 'Sésamo' },
  { value: 'sulfites', label: 'Sulfitos' },
  { value: 'lupin', label: 'Altramuces' },
  { value: 'molluscs', label: 'Moluscos' },
];

export default function EditRecipeForm({ recipe }: { recipe: Recipe }) {
  const initialState: State = { message: null, errors: {} };
  const updateRecipeWithId = updateRecipe.bind(null, recipe.id);
  const [state, formAction] = useActionState(updateRecipeWithId, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Recipe Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nombre de la receta
          </label>
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              defaultValue={recipe.name}
              placeholder="Ej: Paella Valenciana"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="name-error"
            />
            <TagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.name && (
            <div id="name-error" aria-live="polite" className="mt-2 text-sm text-red-500">
              {state.errors.name.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Descripción
          </label>
          <div className="relative">
            <textarea
              id="description"
              name="description"
              rows={3}
              defaultValue={recipe.description}
              placeholder="Describe la receta..."
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="description-error"
            />
            <DocumentTextIcon className="pointer-events-none absolute left-3 top-3 h-[18px] w-[18px] text-gray-500" />
          </div>
          {state.errors?.description && (
            <div id="description-error" aria-live="polite" className="mt-2 text-sm text-red-500">
              {state.errors.description.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Precio (€)
          </label>
          <div className="relative">
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              defaultValue={recipe.price}
              placeholder="8.50"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="price-error"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.price && (
            <div id="price-error" aria-live="polite" className="mt-2 text-sm text-red-500">
              {state.errors.price.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>

        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 px-3 text-sm outline-2"
            defaultValue={recipe.category}
            aria-describedby="category-error"
          >
            <option value="" disabled>
              Selecciona una categoría
            </option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
          {state.errors?.category && (
            <div id="category-error" aria-live="polite" className="mt-2 text-sm text-red-500">
              {state.errors.category.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>

        {/* Allergens */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Alérgenos (opcional)
          </label>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {allergens.map((allergen) => (
              <label
                key={allergen.value}
                className="flex items-center space-x-2 text-sm"
              >
                <input
                  type="checkbox"
                  name="allergens"
                  value={allergen.value}
                  defaultChecked={recipe.allergens.includes(allergen.value)}
                  className="h-4 w-4 rounded border-gray-300 text-[#E8734E] focus:ring-[#E8734E]"
                />
                <span>{allergen.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
            URL de la imagen
          </label>
          <div className="relative">
            <input
              id="image_url"
              name="image_url"
              type="text"
              defaultValue={recipe.image_url}
              placeholder="/mi-receta.png"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="image-error"
            />
            <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.image_url && (
            <div id="image-error" aria-live="polite" className="mt-2 text-sm text-red-500">
              {state.errors.image_url.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
        </div>

        {state.message && (
          <div aria-live="polite" className="mt-2 text-sm text-red-500">
            <p>{state.message}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/receips"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Actualizar Receta</Button>
      </div>
    </form>
  );
}
