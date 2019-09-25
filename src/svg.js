const lineSegment = (x, y) => ` L ${x} ${y}`;

export const generatePath = (startY, numbers, scaleX, scaleY) => `M 0 ${scaleY(startY)}`
    + numbers.map((n, i) => lineSegment(scaleX(i + 1), scaleY(n)));

export const scale = r => n => Math.floor(n * r);
