import scoutImage from "@/public/delovnikApp.png"
import capitalsImage from "@/public/capitalsApp.png";
import lockinImage from "@/public/lockInApp.png"
import imgravelImage from "@/public/imgravel.png"

export const projects = [
    {
        title: "Delovniki",
        image: scoutImage,
        description: "Preštej delovnike do svoje upokojitve.",
        tech: "TypeScript, React.js in Tailwind.",
        url: "https://delovniki.netlify.app/",
        repo: "https://github.com/DomenGoli/Delovniki/tree/41455f432fe26e9b7d3e6eda85f1e1ff302b17ed/src"
    },
    {
        title: "Države - kviz/igra",
        image: capitalsImage,
        description: "Preizkusi svoje poznavanje glavnih mest in zastav držav.",
        tech: "TypeScript, Next.js, React.js, ReduxRTK in Tailwind.",
        url: "https://capitalsandcountries.netlify.app/",
        repo: "https://github.com/DomenGoli/capitals2.git"
    },
    {
        title: "LockIn - Habit tracker",
        image: lockinImage,
        description: "Sledi navadam, postani boljši vsak dan.",
        tech: "TypeScript, Next.js, React.js, react-query, MongoDB, Auth.js, ReduxRTK in Tailwind.",
        url: "https://lockinhabits.netlify.app/",
        repo: "https://github.com/DomenGoli/LockIn.git"
    },
    {
        title: "imGravel",
        image: imgravelImage,
        description: "Semi-privatna aplikacija za deljenje slik",
        tech: "TypeScript, Next.js, React.js, ReduxRTK, react-query, Auth.js, Supabase in Tailwind.",
        url: "https://imgravel.netlify.app/",
        repo: "https://github.com/DomenGoli/ravel.git"
    },
]