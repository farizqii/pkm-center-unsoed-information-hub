import Link from "next/link";
import PopUpWrapper from "@/src/components/PopUp";

import { mediaCollab } from "../../data/mediaCollab";
import { pimnas38 } from "../../data/pimnas38";
import { pkmDikti2025 } from "../../data/pkmDikti2025";
import { pkmRektorCup4 } from "../../data/pkmRektorCup4";
import { pkmDikti2024 } from "../../data/pkmDikti2024";
import { pkmRektorCup3 } from "../../data/pkmRektorCup3";
import { formPengumpulanProposal } from "../../data/formPengumpulanProposal";

export const metadata = {
  title: "Information & Resources - PKM Center Unsoed 2026",
};

function Links({ linkObj }) {
  return (
    <li className="scale-95 flex gap-6 rounded-4xl border-3 border-white bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] p-2 shadow-lg shadow-[#F2A902] items-center justify-center transition-transform hover:scale-100 hover:bg-white hover:text-[#F2A902] hover:border-[#F2A902]">
      <Link
        href={linkObj.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <div className="flex flex-col gap-4 py-6 w-full">
          <h1 className="text-lg lg:text-xl font-bold text-center text-black">
            {linkObj.Name}
          </h1>
        </div>
      </Link>
    </li>
  );
}

export default function Information() {
  const linkMediaCollab = mediaCollab;
  const linkPimnas38 = pimnas38;
  const linkPkmDikti2025 = pkmDikti2025;
  const linkPkmRektorCup4 = pkmRektorCup4;
  const linkPkmDikti2024 = pkmDikti2024;
  const linkPkmRektorCup3 = pkmRektorCup3;
  const linkFormPengumpulanProposal = formPengumpulanProposal;

  return (
    <PopUpWrapper>
      <section
        id="Information"
        className="py-35 px-6 sm:px-8 min-h-dvh scroll-mt-20 relative mx-auto flex w-full flex-col items-center justify-center gap-8 max-w-7xl"
      >
        <h1 className="bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] bg-clip-text text-transparent text-2xl lg:text-5xl xl:text-7xl font-bold italic text-center">
          Information & Resources
        </h1>

        {/* Form Pengumpulan Proposal Section */}
        <div className="w-full">
          <ul className="grid w-full list-none grid-cols-1 gap-5 rounded-3xl bg-white p-6 shadow-[inset_0_10px_20px_0_rgba(0,0,0,0.4)] md:p-10">
            {linkFormPengumpulanProposal.map((linkitem) => (
              <Links linkObj={linkitem} key={linkitem.Name} />
            ))}
          </ul>
        </div>

        {/* Media Partner & Collaboration Section */}
        <div className="w-full">
          <ul className="grid w-full list-none grid-cols-1 gap-5 rounded-3xl bg-white p-6 shadow-[inset_0_10px_20px_0_rgba(0,0,0,0.4)] md:p-10">
            <h1 className="text-md lg:text-2xl font-bold italic text-center text-black text-shadow-sm text-shadow-black">
              MEDIA PARTNER & MEDIA COLLABORATION
            </h1>
            {linkMediaCollab.map((linkitem) => (
              <Links linkObj={linkitem} key={linkitem.Name} />
            ))}
          </ul>
        </div>

        {/* PIMNAS 38 Section */}
        <div className="w-full">
          <ul className="grid w-full list-none grid-cols-1 gap-5 rounded-3xl bg-white p-6 shadow-[inset_0_10px_20px_0_rgba(0,0,0,0.4)] md:p-10">
            <h1 className="text-md lg:text-2xl font-bold italic text-center text-black text-shadow-sm text-shadow-black">
              PENGUMUMAN PESERTA PIMNAS KE-38 TAHUN 2025
            </h1>
            {linkPimnas38.map((linkitem) => (
              <Links linkObj={linkitem} key={linkitem.Name} />
            ))}
          </ul>
        </div>

        {/* PKM Dikti 2025 Section */}
        <div className="w-full">
          <ul className="grid w-full list-none grid-cols-1 gap-5 rounded-3xl bg-white p-6 shadow-[inset_0_10px_20px_0_rgba(0,0,0,0.4)] md:p-10">
            <h1 className="text-md lg:text-2xl font-bold italic text-center text-black text-shadow-sm text-shadow-black">
              PKM DIKTI 2025
            </h1>
            {linkPkmDikti2025.map((linkitem) => (
              <Links linkObj={linkitem} key={linkitem.Name} />
            ))}
          </ul>
        </div>

        {/* PKM Rektor Cup 4 Section */}
        <div className="w-full">
          <ul className="grid w-full list-none grid-cols-1 gap-5 rounded-3xl bg-white p-6 shadow-[inset_0_10px_20px_0_rgba(0,0,0,0.4)] md:p-10">
            <h1 className="text-md lg:text-2xl font-bold italic text-center text-black text-shadow-sm text-shadow-black">
              PKM REKTOR CUP IV 2024
            </h1>
            {linkPkmRektorCup4.map((linkitem) => (
              <Links linkObj={linkitem} key={linkitem.Name} />
            ))}
          </ul>
        </div>

        {/* PKM Dikti 2024 Section */}
        <div className="w-full">
          <ul className="grid w-full list-none grid-cols-1 gap-5 rounded-3xl bg-white p-6 shadow-[inset_0_10px_20px_0_rgba(0,0,0,0.4)] md:p-10">
            <h1 className="text-md lg:text-2xl font-bold italic text-center text-black text-shadow-sm text-shadow-black">
              PKM DIKTI 2024
            </h1>
            {linkPkmDikti2024.map((linkitem) => (
              <Links linkObj={linkitem} key={linkitem.Name} />
            ))}
          </ul>
        </div>

        {/* PKM Rektor Cup 3 Section */}
        <div className="w-full">
          <ul className="grid w-full list-none grid-cols-1 gap-5 rounded-3xl bg-white p-6 shadow-[inset_0_10px_20px_0_rgba(0,0,0,0.4)] md:p-10">
            <h1 className="text-md lg:text-2xl font-bold italic text-center text-black text-shadow-sm text-shadow-black">
              PKM REKTOR CUP III 2023
            </h1>
            {linkPkmRektorCup3.map((linkitem) => (
              <Links linkObj={linkitem} key={linkitem.Name} />
            ))}
          </ul>
        </div>
      </section>
    </PopUpWrapper>
  );
}
