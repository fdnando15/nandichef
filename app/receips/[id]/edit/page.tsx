import Form from '@/app/ui/recipes/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchRecipeById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function EditRecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await fetchRecipeById(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Recetas', href: '/receips' },
          {
            label: 'Editar Receta',
            href: `/receips/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form recipe={recipe} />
    </main>
  );
}
