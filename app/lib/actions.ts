'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Validation schema for Recipe
const RecipeFormSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es obligatorio' }),
  description: z.string().min(10, { message: 'La descripción debe tener al menos 10 caracteres' }),
  price: z.coerce
    .number()
    .gt(0, { message: 'El precio debe ser mayor que 0' }),
  allergens: z.array(z.string()),
  category: z.enum(['starters', 'mains', 'desserts', 'drinks'], {
    message: 'Selecciona una categoría válida',
  }),
  image_url: z.string().min(1, { message: 'La URL de imagen es obligatoria' }),
});

export type State = {
  errors?: {
    name?: string[];
    description?: string[];
    price?: string[];
    allergens?: string[];
    category?: string[];
    image_url?: string[];
  };
  message?: string | null;
};

// CREATE RECIPE
export async function createRecipe(prevState: State, formData: FormData) {
  const validatedFields = RecipeFormSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    allergens: formData.getAll('allergens'),
    category: formData.get('category'),
    image_url: formData.get('image_url'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos faltantes. Error al crear la receta.',
    };
  }

  const { name, description, price, allergens, category, image_url } = validatedFields.data;
  const priceInCents = Math.round(price * 100);

  try {
    await sql`
      INSERT INTO recipes (name, description, price, allergens, category, available, image_url)
      VALUES (${name}, ${description}, ${priceInCents}, ${allergens}, ${category}, true, ${image_url})
    `;
  } catch (error) {
    console.error('Database Error:', error);
    return {
      message: 'Error de base de datos: No se pudo crear la receta.',
    };
  }

  revalidatePath('/receips');
  redirect('/receips');
}

// UPDATE RECIPE
export async function updateRecipe(id: string, prevState: State, formData: FormData) {
  const validatedFields = RecipeFormSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    allergens: formData.getAll('allergens'),
    category: formData.get('category'),
    image_url: formData.get('image_url'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos faltantes. Error al actualizar la receta.',
    };
  }

  const { name, description, price, allergens, category, image_url } = validatedFields.data;
  const priceInCents = Math.round(price * 100);

  try {
    await sql`
      UPDATE recipes
      SET 
        name = ${name},
        description = ${description},
        price = ${priceInCents},
        allergens = ${allergens},
        category = ${category},
        image_url = ${image_url},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    return {
      message: 'Error de base de datos: No se pudo actualizar la receta.',
    };
  }

  revalidatePath('/receips');
  redirect('/receips');
}

// DELETE RECIPE
export async function deleteRecipe(id: string) {
  try {
    await sql`DELETE FROM recipes WHERE id = ${id}`;
    revalidatePath('/receips');
    return { message: 'Receta eliminada correctamente.' };
  } catch (error) {
    console.error('Database Error:', error);
    return {
      message: 'Error de base de datos: No se pudo eliminar la receta.',
    };
  }
}

// TOGGLE RECIPE AVAILABILITY
export async function toggleRecipeAvailability(id: string, currentStatus: boolean) {
  try {
    await sql`
      UPDATE recipes
      SET 
        available = ${!currentStatus},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `;
    revalidatePath('/receips');
    return { message: 'Disponibilidad actualizada.' };
  } catch (error) {
    console.error('Database Error:', error);
    return {
      message: 'Error de base de datos: No se pudo actualizar la disponibilidad.',
    };
  }
}
