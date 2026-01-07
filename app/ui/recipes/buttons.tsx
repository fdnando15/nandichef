import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteRecipe, toggleRecipeAvailability } from '@/app/lib/actions';

// Create Recipe Button
export function CreateRecipe() {
  return (
    <Link
      href="/receips/create"
      className="flex h-10 items-center rounded-lg bg-[#E8734E] px-4 text-sm font-medium text-white transition-colors hover:bg-[#d66340] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8734E]"
    >
      <span className="hidden md:block">Crear Receta</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

// Update Recipe Button
export function UpdateRecipe({ id }: { id: string }) {
  return (
    <Link
      href={`/receips/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

// Delete Recipe Button
export function DeleteRecipe({ id }: { id: string }) {
  async function deleteRecipeAction() {
    'use server';
    await deleteRecipe(id);
  }
  
  return (
    <form action={deleteRecipeAction}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Eliminar</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

// Toggle Availability Button
export function ToggleAvailability({ id, available }: { id: string; available: boolean }) {
  async function toggleAction() {
    'use server';
    await toggleRecipeAvailability(id, available);
  }
  
  return (
    <form action={toggleAction}>
      <button
        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
          available
            ? 'bg-green-100 text-green-800 hover:bg-green-200'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        {available ? 'Disponible' : 'No disponible'}
      </button>
    </form>
  );
}
