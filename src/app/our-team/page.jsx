import OurTeamContent from "../../components/our-team/OurTeamContent";

export const metadata = {
  title: "Our Team - PKM Center Unsoed 2026",
};

export default function OurTeamPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 sm:pt-28 pb-16">
      <OurTeamContent />
    </main>
  );
}
