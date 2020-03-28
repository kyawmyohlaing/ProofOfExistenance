pragma solidity >=0.4.22 <0.6.0;

contract ProofOfExistence {
  mapping (string => bool) private proofs;

  function registerAsset(string memory assetHash) public {
    proofs[assetHash] = true;
  }

  function checkIfRegistered(string memory assetHash) public view returns (bool) {
    return proofs[assetHash];
  }

}
