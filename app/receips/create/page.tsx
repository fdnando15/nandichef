import Form from '@/app/ui/recipes/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

export default async function CreateRecipePage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Recetas', href: '/receips' },
          {
            label: 'Crear Receta',
            href: '/receips/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
