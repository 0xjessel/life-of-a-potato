// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract LifeWithAPotato1155 is ERC1155 {
    uint256 public constant BEACH_DAY = 1;
    uint256 public constant CAMPING = 2;
    uint256 public constant CHRISTMAS = 3;
    uint256 public constant DREAMING = 4;
    uint256 public constant TV_NIGHT = 5;

    uint256 private constant COUNT = 6;

    constructor() ERC1155("https://ipfs.io/ipfs/bafybeihjjkwdrxxjnuwevlqtqmh3iegcadc32sio4wmo7bv2gbf34qs34a/{id}.json") {
        // Allow for 6 copies each
        _mint(msg.sender, BEACH_DAY, COUNT, "");
        _mint(msg.sender, CAMPING, COUNT, "");
        _mint(msg.sender, CHRISTMAS, COUNT, "");
        _mint(msg.sender, DREAMING, COUNT, "");
        _mint(msg.sender, TV_NIGHT, COUNT, "");
    }

    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://ipfs.io/ipfs/bafybeihjjkwdrxxjnuwevlqtqmh3iegcadc32sio4wmo7bv2gbf34qs34a/",
                Strings.toString(_tokenid),".json"
            )
        );
    }
}