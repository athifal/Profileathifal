import { useEffect } from 'react';

const BackgroundCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const lines = [];
    const numLines = 50;

    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 0.5,
        length: Math.random() * 20 + 10,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.5)`;
        ctx.lineWidth = 2;
        ctx.stroke();

        line.y += line.speed;

        if (line.y > canvas.height) {
          line.y = 0 - line.length;
          line.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas id="backgroundCanvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default BackgroundCanvas;
