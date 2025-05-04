import Typewriter from '../Typewriter';

const Welcome: React.FC = () => {
    return (
        <section id="welcome" className="min-h-screen pt-5 flex flex-col items-center justify-center text-white font-mono select-none px-4 relative">
            <h1>Welcome to AhmedCodes</h1>
            <p>
                <Typewriter txt="Hey, I'm Ahmed — I turn ideas into smooth, snappy web experiences that just click." />
            </p>
        </section>
    );
}

export default Welcome;