import Image from "next/image";

export default function Home() {
  return (
    <div className="flex font-sans h-full w-full  pb-20 gap-16 sm:p-20 justify-center">
      <main className="flex flex-col items-center sm:items-start">
        <p className="text-4xl">Zivjo, jaz sem</p>
        <div className="flex flex-col gap-8">

        <p className="text-9xl">Domen.</p>
        <p className="text-4xl">Dobrodosli na moji portfolio strani.</p>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"> */}
      {/* </footer> */}
    </div>
  );
}
