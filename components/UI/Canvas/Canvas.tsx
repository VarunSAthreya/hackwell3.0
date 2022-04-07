import React, { useEffect } from 'react';
import { ImageCode } from '../../../util/ImageCode';

const Canvas = (): JSX.Element => {
    useEffect(() => {
        const myImage = new Image();
        myImage.src = ImageCode;
        myImage.addEventListener('load', function () {
            const canvas = document.getElementById('canvas1') as any;
            const ctx = canvas.getContext('2d');
            let width = window.innerWidth;
            if (width > 500) width -= 20;
            canvas.width = width;
            canvas.height = window.innerHeight;

            ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
            const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let particlesArray = [];
            const numberOfParticles = 5000;

            let mappedImage = [];
            for (let y = 0; y < canvas.height; y++) {
                let row = [];
                for (let x = 0; x < canvas.width; x++) {
                    const red = pixels.data[y * 4 * pixels.width + x * 4];
                    const green =
                        pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
                    const blue =
                        pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
                    const brightness = calculateRelativeBrightness(
                        red,
                        green,
                        blue
                    );
                    const cell = [brightness];
                    row.push(cell);
                }
                mappedImage.push(row);
            }

            function calculateRelativeBrightness(red, green, blue) {
                return (
                    Math.sqrt(red + red + (green + green) + (blue + blue)) / 55
                );
            }

            class Particle {
                x: number;
                y: number;
                speed: number;
                velocity: number;
                size: number;
                position1: number;
                position2: number;
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = 0;
                    this.speed = 0;
                    this.velocity = Math.random() * 3.0;
                    this.size = Math.random() * 2.5 + 1;
                    this.position1 = Math.floor(this.y);
                    this.position2 = Math.floor(this.x);
                }
                update() {
                    this.position1 = Math.floor(this.y);
                    this.position2 = Math.floor(this.x);
                    this.speed = mappedImage[this.position1][this.position2][0];
                    let movement = 2.5 - this.speed + this.velocity;
                    this.y += movement;
                    if (this.y >= canvas.height) {
                        this.y = 0;
                        this.x = Math.random() * canvas.width;
                    }
                }
                draw() {
                    ctx.beginPath();
                    ctx.fillStyle = 'red';
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            function init() {
                for (let i = 0; i < numberOfParticles; i++) {
                    particlesArray.push(new Particle());
                }
            }
            init();
            function animate() {
                ctx.globalAlpha = 0.05;
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.globalAlpha = 0.02;
                for (const element of particlesArray) {
                    element.update();
                    ctx.globalAlpha = element.speed * 0.5;
                    element.draw();
                }
                requestAnimationFrame(animate);
            }
            animate();
        });
    }, []);

    return (
        <canvas
            id="canvas1"
            style={{
                zIndex: -10,
                opacity: 0.6,
            }}
        ></canvas>
    );
};

export default Canvas;
