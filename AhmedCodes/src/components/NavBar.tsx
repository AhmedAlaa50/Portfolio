const NavBar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-custom-dark">
            <h1 className="text-xl font-bold text-custom-yellow">AhmedCodes</h1>
            <ul className="list-none flex gap-4 m-0 p-0 text-custom-green font-semibold">
                <li><a href="#home" className="no-underline text-base">Home</a></li>
                <li><a href="#about" className="no-underline text-base">About</a></li>
                <li><a href="#skills" className="no-underline text-base">Skills</a></li>
                <li><a href="#projects" className="no-underline text-base">Projects</a></li>
                <li><a href="#contact" className="no-underline text-base">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
