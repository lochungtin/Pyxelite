const format = num => (parseInt(num, 16) > 15 ? '' : '0') + num;

export const ints2hex = (r, g, b) => (format(r.toString(16)) + format(g.toString(16)) + format(b.toString(16))).toUpperCase();

export const hex2Ints = str => str.match(/.{1,2}/g).map(str => parseInt(str, 16));

export const mix = (r1, g1, b1, r2, g2, b2, alpha) => {
    const beta = 1 - alpha;
    const r = parseInt(r1 * alpha + r2 * beta);
    const g = parseInt(g1 * alpha + g2 * beta);
    const b = parseInt(b1 * alpha + b2 * beta);
    return [r, g, b];
}

export const rand = () => {
    const r = Math.floor(Math.random() * 1000) % 256;
    const g = Math.floor(Math.random() * 1000) % 256;
    const b = Math.floor(Math.random() * 1000) % 256;
    return [r, g, b];
}