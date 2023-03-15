import pJS from 'particles.js';
import './style.css';

export default function BackgroundParticulesAnimated() {
    window.particlesJS.load(
        'particles-js',
        process.env.PUBLIC_URL + 'particles.json',
        function () {
            console.log('callback - particles.js config loaded');
        },
    );
    console.log(process.env.PUBLIC_URL)

    return <div id="particles-js"></div>;
}