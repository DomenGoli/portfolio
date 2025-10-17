import Link from "next/link";

function Navigation() {
    return (
        <nav>
            <ul className="flex gap-2 justify-items-end">
                <li>
                    <Link href="/about">O meni</Link>
                </li>
                <li>
                    <Link href="/projects">Projekti</Link>
                </li>
                {/* <li>
                    <Link href="/technologies">Tehnologije</Link>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navigation;
