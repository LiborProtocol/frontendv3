const abiCurve = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token_address",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "curve_address",
          "type": "address"
        }
      ],
      "name": "forceSetCurve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "curve_address",
          "type": "address"
        },
        {
          "internalType": "int256",
          "name": "x_value",
          "type": "int256"
        }
      ],
      "name": "getValueAt",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token_address",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "curve_address",
          "type": "address"
        }
      ],
      "name": "setCurve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vault_master_address",
          "type": "address"
        }
      ],
      "name": "setVaultController",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vaultControllerAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  export default abiCurve