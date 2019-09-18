const rawNum = process.argv[2];

const encoder = num => {
  const intermDec = parseInt(num) + 8192;
  const binary = (intermDec >>> 0).toString(2);
  const intermHex = parseInt(binary, 2)
    .toString(16)
    .toUpperCase();
  const encodedBinary = `0${binary.substring(0, 8)}0${binary.substring(8)}`;
  const encodedHex = parseInt(encodedBinary, 2)
    .toString(16)
    .toUpperCase();
  console.log(binary.length);
  console.log(num, intermDec, intermHex, encodedHex);
};

encoder(rawNum);
