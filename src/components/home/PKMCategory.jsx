import { pkmData } from "../../data/pkmData";
import PKM from "../PKM";

export default function PKMCategory() {
  const pkms = pkmData;

  return (
    <section
      id="PKMCategory"
      className="px-6 xl:px-20 min-h-dvh scroll-mt-20 relative mx-auto flex w-full flex-col items-center justify-center gap-12"
    >
      <h1 className="text-4xl xl:text-6xl font-bold italic bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] bg-clip-text text-transparent pr-3 pb-3">
        Kategori PKM
      </h1>
      <div className="w-full">
        <ul className="grid w-full list-none gap-15 rounded-3xl bg-linear-to-b from-[#003399] to-[#003399] via-[#002266] p-6 shadow-[inset_0_4px_20px_0_rgba(255,255,255,0.4)] grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:p-10">
          {pkms.map((pkmitem) => (
            <PKM pkmObj={pkmitem} key={pkmitem.Name} />
          ))}
        </ul>
      </div>
      <div className="py-2"></div>
    </section>
  );
}
