"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import BlurHashCanvas from "../BlurHashCanvas";
import { bphMembers, departments } from "../../data/teamData";
import { divisionDetails } from "../../data/teamDetails";

// Thumbnail card with BlurHashCanvas placeholder while image loads
function TeamCard({
  label,
  image,
  blurHash,
  isSelected,
  onClick,
  className = "",
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-between overflow-hidden rounded-xl border border-black/10 bg-linear-to-b from-[#F9E8B2]/50 via-white to-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer aspect-3/4 w-full ${
        isSelected ? "ring-2 ring-[#E5A83B] shadow-md" : ""
      } ${className}`}
    >
      <div className="relative w-full flex-1 min-h-0 p-1 overflow-hidden">
        {/* Instant BlurHash placeholder */}
        {blurHash && (
          <div
            className={`absolute inset-1 rounded-lg overflow-hidden transition-opacity duration-300 pointer-events-none ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
          >
            <BlurHashCanvas hash={blurHash} width={32} height={32} punch={1} />
          </div>
        )}

        <Image
          src={image}
          alt={label}
          fill
          sizes="(max-width: 768px) 25vw, 120px"
          className={`object-contain p-1 transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <span className="shrink-0 z-10 w-full bg-[#E5A83B] py-0.5 px-0.5 text-center text-[9px] sm:text-[10px] font-bold text-black truncate leading-tight block">
        {label}
      </span>
    </button>
  );
}

// Right detail card photo with BlurHashCanvas loading state
function DetailPhoto({ image, alt, blurHash }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative z-10 flex h-full w-[260px] sm:w-[320px] items-center justify-center">
      {blurHash && (
        <div
          className={`absolute inset-6 rounded-3xl overflow-hidden transition-opacity duration-300 pointer-events-none ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <BlurHashCanvas hash={blurHash} width={48} height={48} punch={1} />
        </div>
      )}
      <Image
        src={image}
        alt={alt}
        width={340}
        height={440}
        priority
        className={`h-full w-auto object-contain drop-shadow-md transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

export default function OurTeamContent() {
  const [selected, setSelected] = useState({
    name: bphMembers[0]?.name || "Azzahra Nur Annisa",
    role: bphMembers[0]?.role || "Ketua Umum",
    division: "BPH",
    image: bphMembers[0]?.image || "/team/Azzahra-Ketua.png",
    blurHash: bphMembers[0]?.blurHash || "LD8Dz;n%0KW.IAa#x[j=babHRjoM",
  });

  // Modal pop-out state: null | "Tentang Kami" | "Program kerja" | "Lihat Tim"
  const [activeModal, setActiveModal] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  // Normalize division key for data lookup
  const divisionKey =
    selected.division === "BPH" ||
    selected.division === "Ketua Umum" ||
    selected.division === "Wakil Ketua" ||
    selected.division === "Sekretaris" ||
    selected.division === "Bendahara"
      ? "BPH"
      : selected.division;

  const currentDetails = divisionDetails[divisionKey] || divisionDetails["BPH"];

  const getGridContent = () => {
    if (!currentDetails) return [];
    if (activeModal === "Tentang Kami") return currentDetails.tentangKami || [];
    if (activeModal === "Program kerja")
      return currentDetails.programKerja || [];
    if (activeModal === "Lihat Tim") return currentDetails.lihatTim || [];
    return [];
  };

  const gridContent = getGridContent();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch">
      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="flex w-full flex-col gap-6 lg:w-[380px] xl:w-[420px] shrink-0">
        {/* Badan Pengurus Harian */}
        <div className="flex flex-col gap-2.5">
          <div className="rounded-full bg-linear-to-r shadow-lg shadow-[#F2A902] border-3 border-white from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] py-2 px-6 text-center text-sm font-bold text-black">
            Badan Pengurus Harian
          </div>
          <div className="rounded-3xl bg-white p-3.5 shadow-xl">
            <div className="grid grid-cols-4 gap-2">
              {bphMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  label={member.role}
                  image={member.image}
                  blurHash={member.blurHash}
                  isSelected={
                    selected.image === member.image &&
                    selected.role === member.role
                  }
                  onClick={() =>
                    setSelected({
                      name: member.name,
                      role: member.role,
                      division: "BPH",
                      image: member.image,
                      blurHash: member.blurHash,
                    })
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Departemen */}
        <div className="flex flex-col gap-2.5">
          <div className="rounded-full bg-linear-to-r shadow-lg shadow-[#F2A902] border-3 border-white from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] py-2 px-6 text-center text-sm font-bold text-black">
            Departemen
          </div>
          <div className="flex flex-col gap-3 rounded-3xl bg-white p-4 shadow-xl">
            {/* Top row: 3 departments */}
            <div className="grid grid-cols-3 gap-3">
              {departments.slice(0, 3).map((dept) => (
                <TeamCard
                  key={dept.id}
                  label={dept.name}
                  image={dept.image}
                  blurHash={dept.blurHash}
                  isSelected={selected.division === dept.name}
                  onClick={() =>
                    setSelected({
                      name: dept.leader,
                      role: `Kepala Departemen ${dept.name}`,
                      division: dept.name,
                      image: dept.image,
                      blurHash: dept.blurHash,
                    })
                  }
                />
              ))}
            </div>

            {/* Bottom row: 2 departments centered */}
            <div className="flex justify-center gap-3">
              {departments.slice(3).map((dept) => (
                <div key={dept.id} className="w-[calc((100%-1.5rem)/3)]">
                  <TeamCard
                    label={dept.name}
                    image={dept.image}
                    blurHash={dept.blurHash}
                    isSelected={selected.division === dept.name}
                    onClick={() =>
                      setSelected({
                        name: dept.leader,
                        role: `Kepala Departemen ${dept.name}`,
                        division: dept.name,
                        image: dept.image,
                        blurHash: dept.blurHash,
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* ================= RIGHT DETAIL CARD ================= */}
      <section className="relative flex w-full flex-1 flex-col items-center justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:p-8 min-h-[560px]">
        {/* Person Card Background Ornament */}
        <Image
          src="/person-card.png"
          alt=""
          sizes="100vw"
          width={100}
          height={100}
          draggable={false}
          className="absolute top-[2.8%] left-[1%] w-240 pointer-events-none select-none"
        />

        {/* Person Name & Role */}
        <div className="flex flex-col items-center z-10">
          <h2 className="text-center text-2xl font-bold tracking-tight text-[#001B44] sm:text-3xl lg:text-4xl text-shadow-xs text-shadow-black">
            {selected.name}
          </h2>
        </div>

        {/* Center Artwork: Person with BlurHashCanvas loading state */}
        <div className="relative my-auto flex h-[340px] w-full max-w-lg items-center justify-center sm:h-[400px]">
          <DetailPhoto
            key={selected.image}
            image={selected.image}
            alt={selected.name}
            blurHash={selected.blurHash}
          />
        </div>

        {/* Action Buttons & Division Title */}
        <div className="relative z-20 flex flex-col items-center gap-3">
          {/* Action buttons with pop-out trigger */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {["Tentang Kami", "Program kerja", "Lihat Tim"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveModal(activeModal === tab ? null : tab)}
                className={`cursor-pointer rounded-full border border-black/30 px-5 py-1.5 text-xs font-semibold sm:text-sm transition-all duration-200 hover:scale-105 active:scale-95 ${
                  activeModal === tab
                    ? "bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] text-[#001B44] shadow-lg ring-2 ring-[#001B44] scale-105"
                    : "bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] text-[#001B44] hover:shadow-md"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Division Name (BPH, PSDM, etc.) */}
          <h3 className="text-center text-4xl font-black italic tracking-wider text-[#001B44] drop-shadow-xs sm:text-5xl lg:text-6xl text-shadow-xs text-shadow-black">
            {selected.division}
          </h3>
        </div>
      </section>

      {/* ================= POP-OUT TEXT GRID MODAL ================= */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-[#000a20]/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-4xl max-h-[85vh] flex flex-col rounded-3xl border-2 border-[#EEAB01]/60 bg-linear-to-b from-[#001b44] via-[#001538] to-[#000f28] p-6 sm:p-8 shadow-2xl text-white my-auto overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <span className="rounded-full bg-linear-to-r from-[#EEAB01] to-[#F2A902] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#001133] shadow-sm">
                    {currentDetails?.division || selected.division}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold italic bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] bg-clip-text text-transparent">
                    {activeModal}
                  </h2>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition cursor-pointer text-lg font-bold"
                  aria-label="Tutup"
                >
                  ✕
                </button>
              </div>

              {/* Sub-tabs for quick switching inside modal */}
              <div className="flex gap-2 sm:gap-3 py-3 border-b border-white/10 overflow-x-auto">
                {["Tentang Kami", "Program kerja", "Lihat Tim"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveModal(tab)}
                    className={`cursor-pointer rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      activeModal === tab
                        ? "bg-linear-to-r from-[#EEAB01] via-[#FFFFFF] to-[#EEAB01] text-[#001B44] font-bold shadow-md"
                        : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Scrollable Text Grid Content */}
              <div className="overflow-y-auto mt-4 pr-1 flex-1 py-1">
                {gridContent.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gridContent.map((item, idx) => (
                      <div
                        key={item.title + idx}
                        className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md transition-all duration-200 hover:border-[#EEAB01]/60 hover:bg-white/10"
                      >
                        <div>
                          {/* Card Header: Title & Badge */}
                          <div className="flex items-start justify-between gap-2 mb-2.5">
                            <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#EEAB01] transition-colors">
                              {item.title}
                            </h3>
                            {item.badge && (
                              <span className="shrink-0 rounded-md border border-[#EEAB01]/40 bg-[#EEAB01]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#EEAB01]">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {/* Member Photo (if present in item) */}
                          {item.image && (
                            <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-xl border-2 border-[#EEAB01] bg-[#001133] shadow-inner">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="80px"
                                className="object-contain p-1"
                              />
                            </div>
                          )}

                          {/* Description Text */}
                          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Key Points list */}
                          {item.points && item.points.length > 0 && (
                            <ul className="mt-3.5 space-y-1.5 border-t border-white/10 pt-2.5">
                              {item.points.map((point, pIdx) => (
                                <li
                                  key={pIdx}
                                  className="flex items-start gap-2 text-xs text-white/70"
                                >
                                  <span className="font-bold text-[#EEAB01]">
                                    ›
                                  </span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-40 items-center justify-center text-sm text-white/60">
                    Konten sedang dalam proses pembaruan.
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
