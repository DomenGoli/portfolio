import Link from "next/link";

export default function Home() {
    return (
        <div className="flex font-sans h-full w-full justify-center">
            <main className="flex flex-col items-center mt-20">
                <p className="lg:text-4xl text-2xl">Živjo, jaz sem</p>
                <div className="flex flex-col items-center gap-8">
                    <p className="lg:text-9xl text-7xl">Domen.</p>
                    <p className="lg:text-4xl text-2xl">
                        Dobrodošli na moji portfolio strani.
                    </p>
                    <div className="flex flex-col items-center">
                        <p className="lg:text-2xl text-[1rem] px-6">
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
