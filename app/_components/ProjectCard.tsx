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
            <div className="relative w-[300px] h-[180px]">
                <Link
                    href={url}
                    target="new"
                >
                    <Image
                        src={image}
                        className="object-cover rounded-2xl"
                        fill
                        alt="test slika"
                    />
                </Link>
            </div>
            <div className="flex flex-col mt-2 gap-5 text-sm leading-6">
                <p className="text-2xl font-bold">{title}</p>
                <p>{description}</p>
                <p>{tech}</p>
                <Link className="text-[#14b8b1]" href={url} target="_new">
                    {url}
                </Link>
                <Link className="text-[#14b8b1]" href={repo} target="_new">
                    GitHub Repository
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard;
