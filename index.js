// Defines the starting number as the node user argument
const rawNum = process.argv[2];

// Function that encodes the raw number into en encoded 4 digit hex string
const encoder = num => {
  // Translated the range to [0..16383] and converts the integer to binary
  let binary = ((parseInt(num) + 8192) >>> 0).toString(2);
  // Converts the intermediate binary number to an encoded binary value
  let encodedBinary = `0${binary.substring(0, 7)}0${binary.substring(7)}`;
  // Converts the encoded binary value to a 4 character hex string and returns it
  return parseInt(encodedBinary, 2)
    .toString(16)
    .toUpperCase()
    .padStart(4, "0");
};

// Function that decodes the 4 character hex string back into the original raw integer
const decoder = str => {
  // Converts the hex string into a binary number
  let encodedBinary = (parseInt(str, 16) >>> 0).toString(2);
  // Converts the binary number back into the original [0..16383] range binary
  let decodedBinary = `${encodedBinary.substring(0, 7)}${encodedBinary.substring(8)}`;
  // Converts the [0..16383] range binary back into a decimal, and then returns the original raw number
  return parseInt(decodedBinary, 2) - 8192;
};

const encoded = encoder(rawNum);
const decoded = decoder(encoded);

console.log(`${rawNum} => ${encoded} => ${decoded}`);
// Example outputs
// 0 => 4000 => 0
// -8192 => 0000 => -8192
// 8191 => 7F7F => 8191
// 2048 => 5000 => 2048
// -4096 => 2000 => -4096
