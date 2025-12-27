import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Con sabor y cariño
      </h1>
    </div>
  );
}
