import ProjectList from "../_components/ProjectList";

function Page() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="felx p-5">
                <p className="text-4xl">Moji projekti</p>
            </div>
            <div className="flex justify-center max-w-4xl">
                <ProjectList />
            </div>
        </div>
    );
}

export default Page;
