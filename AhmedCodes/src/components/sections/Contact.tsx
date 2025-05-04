const Contact: React.FC = () => {
    return (
        <section id="contact" className="min-h-screen pt-5 flex flex-col items-center justify-center text-white font-mono select-none px-4 relative">
            <h1>Contact Me</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;