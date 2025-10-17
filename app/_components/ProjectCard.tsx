import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectType = {
    title: string;
    image: StaticImageData;
    description: string;
    tech: string;
    url: string;
    repo: string;
};

function ProjectCard({ project }: { project: ProjectType }) {
    const { title, image, description, tech, url, repo } = project;
    return (
        <div className="flex flex-col shadow rounded-2xl w-[22rem] h-[32rem] bg-white p-8">
            <div className="relative w-[300px] h-[300px]">
                <Link href={url} target="new">
                    <Image
                        src={image}
                        className="object-cover rounded-2xl"
                        fill
                        alt="test slika"
                    />
                </Link>
            </div>
            <div className="grid h-full grid-rows-[1fr_1fr_auto] mt-2 gap-5 text-sm leading-6">
                <div className="flex flex-col gap-1">
                    <p className="text-2xl font-bold">{title}</p>
                    <p>{description}</p>
                </div>
                <div>
                    
                    <p>
                        <span>Web App zgrajen z: </span>
                        <span className="text-red-600">{tech}</span>
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <Link className="text-[#14b8b1] hover:underline" href={url} target="_new">
                        {url}
                    </Link>
                    <Link className="text-[#14b8b1] hover:underline" href={repo} target="_new">
                        GitHub Repository
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
