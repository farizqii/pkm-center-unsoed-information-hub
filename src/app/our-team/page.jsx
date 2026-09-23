import Image from "next/image";
import Link from "next/link";

export default function OurTeamPage() {
  return (
    <main
      id="Homepage"
      className="mx-auto flex min-h-screen w-full flex-col scroll-mt-16 items-center justify-center gap-12 px-6 py-20 xl:flex-row lg:px-24"
    >
      <div className="flex aspect-square w-full max-w-md items-center justify-center bg-transparent">
        <Image
          src="/logo-pkm-center.png"
          alt="PKM Center Unsoed"
          width={800}
          height={800}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="flex w-full flex-col lg:w-7/12">
        <h1 className="font-black text-center xl:text-left sm:text-3xl md:text-4xl">
          Our Team <br />
          <span className="font-light text-sm sm:text-2xl md:text-3xl">
            Universitas Jenderal Soedirman
          </span>
        </h1>

        <hr className="my-6 border-t border-[#F2A902]" />

        <div className="mb-8 flex flex-col gap-4 font-extralight text-xs text-center xl:text-left md:text-base">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue
            sapien, mollis vel arcu id, efficitur eleifend urna. Cras sed
            imperdiet velit. Nullam eu lacinia urna. Curabitur scelerisque
            tellus dignissim, ultricies lacus nec, auctor purus. Donec sed
            tortor nisi. Etiam ut viverra elit. Pellentesque est elit, dapibus
            at ante non, luctus rhoncus metus. Aenean pellentesque finibus dui,
            tempor ultrices ligula interdum et. Donec at odio feugiat, commodo
            mi ut, semper ligula. Nunc id nisi sem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum arcu arcu, venenatis ac
            aliquam vel, fermentum vel urna. In sapien metus, porta sed bibendum
            id, condimentum nec nisl. Nam eget sapien id mauris tempus pulvinar.
          </p>
          <p>
            Sed libero ante, accumsan vehicula tristique eget, laoreet nec orci.
            Curabitur in mi a elit pretium luctus. Pellentesque dapibus libero
            non orci semper ornare nec rhoncus tellus. Donec venenatis ac enim
            vel consectetur. Cras bibendum enim sit amet velit tempus, a tempor
            justo laoreet. Proin et pharetra lorem. Pellentesque nisi orci,
            scelerisque non aliquam eu, volutpat at nulla.
          </p>
        </div>

        <div className="flex flex-col gap-4 xl:flex-row">
          <Link
            href="/our-team"
            className="cursor-pointer rounded-2xl border border-white bg-[#F2A902] px-6 py-2 text-center text-sm font-bold text-white ring-2 ring-black transition-transform hover:scale-105 hover:bg-white hover:text-[#F2A902] hover:border-[#F2A902]"
          >
            Our Team
          </Link>
          <Link
            href="/information"
            className="cursor-pointer rounded-2xl border border-white bg-[#F2A902] px-6 py-2 text-center text-sm font-bold text-white ring-2 ring-black transition-transform hover:scale-105 hover:bg-white hover:text-[#F2A902] hover:border-[#F2A902]"
          >
            Information & Resources
          </Link>
        </div>
      </div>
    </main>
  );
}
