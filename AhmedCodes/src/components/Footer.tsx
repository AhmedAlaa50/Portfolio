const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', background: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} AhmedCodes. All rights reserved.</p>
        </footer>
    );
};

export default Footer;