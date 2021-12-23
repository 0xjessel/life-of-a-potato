// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract LifeOfAPotatoToken is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("LifeOfAPotatoToken", "LFPT") {}

    // get the current supply of tokens
    function totalSupply() public view returns (uint256) {
      return _tokenIds.current();
    }

    // for opensea collection 
    function contractURI() public pure returns (string memory) {
      return "https://ipfs.io/ipfs/your-collection-ipfshash";
    }

    function mintItem(address receiver, string memory tokenURI)
      public
      onlyOwner
      returns (uint256)
    {
      _tokenIds.increment();
      uint256 newPotatoID = _tokenIds.current();
      _mint(receiver, newPotatoID);
      _setTokenURI(newPotatoID, tokenURI);
      return newPotatoID;
    }

    /**
     * Override isApprovedForAll to auto-approve OS's proxy contract
     */
    function isApprovedForAll(
      address _owner,
      address _operator
    ) public override view returns (bool isOperator) {
      // if OpenSea's ERC721 Proxy Address is detected, auto-return true
      if (_operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
        return true;
      }
        
      // otherwise, use the default ERC721.isApprovedForAll()
      return ERC721.isApprovedForAll(_owner, _operator);
    }
}
