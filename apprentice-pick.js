import keccak256 from "keccak256";

const addresses = [
  "0x032261cB5868414D70251a4D609e196838551457", // phillipTheFirst -- random minter
  "0x61e8C16A67Be3c0d16E8113a688Ecfc963e4503E"  // nickeykha -- last minter
]; // addresses are formatted as checksum addresses.

// The address chosen by VRF will be Box #1, while the other address will be Box #2.
// This is an arbitrary choice, so this choice was broadcasted prior to the VRF event to prove provenance and non-tampering.
// See this transaction (Convert input data to UTF-8 to read)
// https://etherscan.io/tx/0xeac0d7ccf6d805fd7bb19f9265ee7c92cd7e3431cff4a9e89142b95a3d1b7b6a
// The transaction also says that the addresses will be in ascending order, as can be seen above.

// See VRF Transactions here:
// Contract:    https://etherscan.io/address/0x666184a1f8d765e32f44096dfa7123b95a386f5f#code
// Request:     https://etherscan.io/tx/0x0f95a41d121d9b3177d94985d717fbe317e98dc88b7d329e9a819b8721d84aae
// Request ID:  25900308583709391140122001042749046648158946252917012699850556163861876099978
// Fulfillment: https://etherscan.io/tx/0x7a18faa044506c4bc0c08c52435e8aba766bc224f7ef88407984730586c39577
// RandomWords: 8468932088062997094819517777961884679043262275483064308143136179358615066150
// Result:      0
const vrfRandomWords = 8468932088062997094819517777961884679043262275483064308143136179358615066150n;
const vrfResult = 0n;

function pickWinner() {
  const addressesLength = BigInt(`${addresses.length}`);
  const checkVRFResult = vrfRandomWords % addressesLength;
  if (checkVRFResult !== vrfResult) {
    console.error("VRF Result does not match!");
    console.error(`VRF Result: ${vrfResult}`);
    console.error(`VRF Check: ${checkVRFResult}`);
    return;
  }

  const addressesHash = keccak256(addresses).toString("hex");
  console.log(`Addresses Hashed: 0x${addressesHash}`);
  console.log(`Addresses Length: ${addressesLength}`);

  const winner = addresses[vrfResult];
  console.log("VRF Random Words: " + vrfRandomWords);
  console.log(`VRF Result: ${vrfResult} / ${addressesLength}`);
  console.log("VRF Picked Winner: " + winner);
}

pickWinner();