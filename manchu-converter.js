function convertLatinToManchu(latinText) {
    if (typeof latinText !== 'string' || !latinText) {
        return "";
    }

    // This map contains the single-character mappings from the second stage.
    const charMap = {
        'a': '\u1820', // ᠠ
        'e': '\u185D', // ᡝ
        'i': '\u1873', // ᡳ
        'o': '\u1823', // ᠣ
        'u': '\u1824', // ᡠ
        'v': '\u1861', // ᡡ (from original 'v' or '@')
        'n': '\u1828', // ᠨ
        'N': '\u1829', // ᠩ (from 'ng')
        'b': '\u182A', // ᠪ
        'p': '\u1866', // ᡦ
        'x': '\u1867', // ᡧ (from 'x' or 'S')
        'k': '\u1874', // ᡴ
        'g': '\u1864', // ᡤ
        'h': '\u1865', // ᡥ
        'm': '\u182E', // ᠮ
        'l': '\u182F', // ᠯ
        't': '\u1868', // ᡨ
        'd': '\u1869', // ᡩ
        's': '\u1830', // ᠰ
        'c': '\u1834', // ᠴ
        'j': '\u1835', // ᠵ
        'y': '\u1836', // ᠶ
        'r': '\u1875', // ᡵ
        'w': '\u1838', // ᠸ
        'f': '\u1876', // ᡶ
        'K': '\u183A', // ᠺ
        'G': '\u186C', // ᡬ
        'H': '\u186D', // ᡭ
        'J': '\u1877', // ᡷ (from 'jy')
        'C': '\u1871', // ᡱ (from 'cy')
        'R': '\u1870', // ᡰ
        'I': '\u185F', // MONGOLIAN LETTER SIBE I
        ',': '\u1808', // Manchu Comma (᠈)
        '_': '\u180E', // Mongolian Nirugu (᠎)
        "'": '\u180B', // MONGOLIAN FREE VARIATION SELECTOR ONE
        '"': '\u180C', // MONGOLIAN FREE VARIATION SELECTOR TWO
        '`': '\u180D', // MONGOLIAN FREE VARIATION SELECTOR THREE
        '^': '\u200C', // ZERO WIDTH NON-JOINER
        '*': '\u200D', // ZERO WIDTH JOINER
        '-': '\u202F', // NARROW NO-BREAK SPACE
    };

    // Stage 1: Pre-processing and multi-character replacements.
    // Order is important.
    let processedText = latinText
        .replaceAll('=', '')
        .replaceAll('+', '')
        .replaceAll('ng', 'N')
        .replaceAll('S', 'x')
        .replaceAll('jy', 'Jy')
        .replaceAll('cy', 'Cy')
        .replaceAll('@', 'v')
        .replaceAll('ts', '\u186E') // ᡮ
        .replaceAll('dz', '\u186F') // ᡯ
        .replaceAll('..', '\u1809') // ᠉ (Must be before single '.')
        .replaceAll('.', '\u1808') // ᠈
        // .replaceAll(' i', '-i'); // Contextual rule

    // Stage 2: Single-character mapping
    let manchuText = "";
    for (let i = 0; i < processedText.length; i++) {
        const char = processedText[i];
        manchuText += charMap[char] || char;
    }

    return manchuText;
}
