import scoutImage from "@/public/scout-workdays.png"
import capitalsImage from "@/public/capitals.png";
import lockinImage from "@/public/lockin.png"

export const projects = [
    {
        title: "Delovniki",
        image: scoutImage,
        description: "Prestej delovnike do svoje upokojitve.",
        tech: "Web App zgrajen z: TypeScript, React in Tailwind.",
        url: "https://delovniki.netlify.app/",
        repo: "https://github.com/DomenGoli/Delovniki/tree/41455f432fe26e9b7d3e6eda85f1e1ff302b17ed/src"
    },
    {
        title: "Drzave - kviz/igra",
        image: capitalsImage,
        description: "Preizkusi svoje poznavanje glavnih mest in zastav drzav.",
        tech: "Web App zgrajen z: TypeScript, Next.js, React in Tailwind.",
        url: "https://capitalsandcountries.netlify.app/",
        repo: "https://github.com/DomenGoli/capitals2.git"
    },
    {
        title: "LockIn - Habit tracker",
        image: lockinImage,
        description: "Sledi navadam, postani boljsi vsak dan",
        tech: "Web App zgrajen z: TypeScript, React in Tailwind.",
        url: "https://lockinhabits.netlify.app/",
        repo: "https://github.com/DomenGoli/LockIn.git"
    },
]