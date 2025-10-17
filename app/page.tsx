import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex font-sans h-full w-full  pb-20 gap-16 sm:p-20 justify-center">
            <main className="flex flex-col items-center sm:items-start mt-20">
                <p className="text-4xl">Živjo, jaz sem</p>
                <div className="flex flex-col gap-8">
                    <p className="text-9xl">Domen.</p>
                    <p className="text-4xl">
                        Dobrodošli na moji portfolio strani.
                    </p>
                    <div>
                        <p className="text-1xl">
                            Sem razvijalec spletnih aplikacij s fokusom na
                            JavaScript/TypeScript in React.js.
                        </p>
                        <div className="flex justify-center pt-4">

                        <Link href="/projects">
                        <button className="border rounded-[10px] px-3 bg-stone-200 cursor-pointer hover:bg-stone-50 duration-150">
                            <p>Nekaj izmed mojih projektov</p>
                        </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </main>
            {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"> */}
            {/* </footer> */}
        </div>
    );
}
