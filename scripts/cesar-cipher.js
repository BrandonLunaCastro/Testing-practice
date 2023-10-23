function cipher (char, factor) {
  if (char === "!" || char === "¡" || char === "." || char === "?" || char === "¿" || char === " ") return char;
  const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  const newChar = (alphabet.indexOf(char) + factor) % 26;
  return alphabet[newChar];
}

const cesarCipher = (str, shift = 1) => {
  const strSplit = str.trim().toLowerCase().split("");
  let cipherMessage = "";
  strSplit.forEach(element => {
    cipherMessage += cipher(element, shift);
  });
  return cipherMessage;
};

module.exports = cesarCipher;
