# gm-choice-1
Leverages Chainlink VRF to pick out the apprentice out of a set of two addresses.

# Setup
Clone repository and run `npm install .` and then `node apprentice-pick.js`
Tested with Node v18.8.0, but should work on a variety of node versions.

# VRF Txs (V2)

See VRF Transactions here:  
Contract:    https://etherscan.io/address/0x666184a1f8d765e32f44096dfa7123b95a386f5f#code  
Request:     https://etherscan.io/tx/0x0f95a41d121d9b3177d94985d717fbe317e98dc88b7d329e9a819b8721d84aae  
Request ID:  `25900308583709391140122001042749046648158946252917012699850556163861876099978`  
Fulfillment: https://etherscan.io/tx/0x7a18faa044506c4bc0c08c52435e8aba766bc224f7ef88407984730586c39577  
RandomWords: `8468932088062997094819517777961884679043262275483064308143136179358615066150`  
Result:      `0`  
Address:     `0x032261cB5868414D70251a4D609e196838551457`  

Also appears in `apprentice-pick.js`
