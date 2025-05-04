const Footer: React.FC = () => {
    return (
        <footer id="footer" className="min-h-screen bg-custom-dark pt-16 pb-20 flex flex-col items-center justify-center text-center text-white font-mono select-none px-4 relative">
            <div className="space-y-8">
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-2xl font-bold tracking-wider">AhmedCodes</p>
                    <p className="text-sm opacity-70">Frontend Developer & UI/UX Designer</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <p className="text-sm">&copy; {new Date().getFullYear()} AhmedCodes. All rights reserved.</p>
                    <p className="text-sm opacity-70">Built with React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;