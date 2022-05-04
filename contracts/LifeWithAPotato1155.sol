// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/utils/Strings.sol";

contract LifeWithAPotato1155 is ERC1155, Ownable {
    uint256 public constant BEACH_DAY = 1;
    uint256 public constant CAMPING = 2;
    uint256 public constant CHRISTMAS = 3;
    uint256 public constant DREAMING = 4;
    uint256 public constant TV_NIGHT = 5;

    uint256 private constant COUNT = 100;

    string public name;
    string public symbol;

    constructor()
        ERC1155(
            "ipfs://bafybeifbeuiqpgs6kfdmk3mlpg2qb2npa3lregvqomgvlbyfpqhgdq7jbu/{id}.json"
        )
    {
        name = "Life With a Potato";
        symbol = "LWAP";

        // Allow for COUNT copies each
        _mint(msg.sender, BEACH_DAY, COUNT, "");
        _mint(msg.sender, CAMPING, COUNT, "");
        _mint(msg.sender, CHRISTMAS, COUNT, "");
        _mint(msg.sender, DREAMING, COUNT, "");
        _mint(msg.sender, TV_NIGHT, COUNT, "");
    }

    // for opensea collection
    function contractURI() public pure returns (string memory) {
        return
            "https://ipfs.io/ipfs/bafkreiaf2tdi4vo3sg2dmibturrm52mzsr7bgbxf7vwlhddsbq47dkio2a";
    }

    function uri(uint256 _tokenid)
        public
        pure
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    "ipfs://bafybeifbeuiqpgs6kfdmk3mlpg2qb2npa3lregvqomgvlbyfpqhgdq7jbu/",
                    Strings.toString(_tokenid),
                    ".json"
                )
            );
    }
}
