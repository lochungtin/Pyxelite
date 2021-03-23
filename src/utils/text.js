export const stretch = (text, spacing) => {
    let spacer = '';
    for (let i = 0; i < spacing; ++i)
        spacer += ' ';

    let builder = '';
    text.substring(1).split('').forEach(c => builder += (spacer + c));

    return text.charAt(0) + builder;
}