"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import PopUpWrapper from "../PopUp";

export default function AboutPKM() {
  return (
    <section
      id="AboutPKM"
      className="px-15 min-h-dvh scroll-mt-20 relative mx-auto flex w-full flex-col items-center justify-center gap-12 xl:flex-row"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-[1600px] xl:w-[1600px] xl:h-150 bg-black/15 rounded-full blur-3xl -z-10"></div>
      <Image
        src="/line1.png"
        alt="Cloud Left Down"
        sizes="100vw"
        width={100}
        height={100}
        draggable={false}
        className="absolute top-[95%] md:top-[85%] left-[-3%] md:left-[2%] w-50 md:w-135"
      ></Image>
      <Image
        src="/line2.png"
        alt="Cloud Left Down"
        sizes="100vw"
        width={100}
        height={100}
        draggable={false}
        className="absolute top-[95%] md:top-[85%] right-[-3%] md:right-[2%] w-50 md:w-135"
      ></Image>
      <motion.div
        className="flex aspect-square w-full max-w-md items-center justify-center"
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/logo-pkm-center.png"
          alt="PKM Center Unsoed"
          width={800}
          height={800}
          className="h-auto w-full object-contain"
          priority
        />
      </motion.div>

      <div className="flex w-full flex-col lg:w-7/12">
        <h1 className="font-bold text-center xl:text-left sm:text-3xl md:text-4xl">
          <span className="bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] bg-clip-text text-transparent">
            Program Kreativitas Mahasiswa Center
          </span>
          <br />
          <span className="font-semibold text-sm sm:text-2xl md:text-3xl">
            Universitas Jenderal Soedirman
          </span>
        </h1>

        <hr className="my-6 border-t border-[#F2A902]" />

        <div className="mb-8 flex flex-col gap-4 font-extralight text-xs text-center xl:text-left md:text-base">
          <p>
            Program Kreativitas Mahasiswa atau disebut PKM adalah sebuah program
            nasional yang diselenggarakan oleh Kementerian Pendidikan Tinggi,
            Sains, dan Teknologi untuk mengantarkan mahasiswa mencapai taraf
            pencerahan kreativitas dan inovasi berlandaskan penguasaan sains dan
            teknologi serta keimanan yang tinggi. Dalam rangka mempersiapkan
            diri menjadi pemimpin yang cendekiawan, wirausahawan mandiri dan
            arif, mahasiswa diberi peluang untuk mengimplementasikan kemampuan,
            keahlian, sikap, tanggung jawab, membangun kerjasama tim maupun
            mengembangkan kemandirian melalui kegiatan yang kreatif dalam bidang
            ilmu yang ditekuni. Program kreativitas yang dikhususkan bagi
            mahasiswa ini mengikuti perkembangan teknologi dalam era revolusi
            industri dalam mempersiapkan Sumber Daya Manusia yang mampu bersaing
            di era global. Di tingkat Perguruan Tinggi, PKM menjadi program
            rutin dengan pembinaan yang terstruktur, yang berdampak meningkatnya
            kualitas proposal PKM dan/atau karya tulisnya.
          </p>
          <p>
            PKM Center Unsoed hadir sebagai pengelola dan pendamping dalam
            kegiatan PKM mahasiswa Unsoed, mulai dari tahap ide sampai persiapan
            PIMNAS. Kami juga menyediakan beberapa program kerja untuk
            mahasiswa/i Unsoed perihal PKM, mulai dari Webinar Sahabat PKM,
            Kompetisi PKM Rektor Cup, dll.
          </p>
        </div>

        <div className="flex flex-col gap-4 xl:flex-row">
          <Link
            href="/our-team"
            className="cursor-pointer rounded-2xl shadow-md shadow-[#F2A902] border border-white bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] px-6 py-2 text-center text-sm font-semibold text-black transition-transform hover:scale-105 hover:border-[#F2A902]"
          >
            Our Team
          </Link>
          <Link
            href="/information"
            className="cursor-pointer rounded-2xl shadow-md shadow-[#F2A902] border border-white bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] px-6 py-2 text-center text-sm font-semibold text-black transition-transform hover:scale-105 hover:border-[#F2A902]"
          >
            Information & Resources
          </Link>
        </div>
      </div>
      <div className="py-5"></div>
    </section>
  );
}
