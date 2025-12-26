import '@/app/ui/global.css';
import { inter, poppins, pacifico } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} ${pacifico.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
