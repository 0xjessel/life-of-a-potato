// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract LifeWithAPotato1155 is ERC1155 {
    uint256 public constant BEACH_DAY = 1;
    uint256 public constant CAMPING = 2;
    uint256 public constant CHRISTMAS = 3;
    uint256 public constant DREAMING = 4;
    uint256 public constant TV_NIGHT = 5;

    uint256 private constant COUNT = 100;

    constructor() ERC1155("https://ipfs.io/ipfs/bafkreiaf2tdi4vo3sg2dmibturrm52mzsr7bgbxf7vwlhddsbq47dkio2a") {
        // Allow for COUNT copies each
        _mint(msg.sender, BEACH_DAY, COUNT, "");
        _mint(msg.sender, CAMPING, COUNT, "");
        _mint(msg.sender, CHRISTMAS, COUNT, "");
        _mint(msg.sender, DREAMING, COUNT, "");
        _mint(msg.sender, TV_NIGHT, COUNT, "");
    }

    function uri(uint256 _tokenid) override public pure returns (string memory) {
        if (_tokenid == BEACH_DAY) {
            return "https://ipfs.io/ipfs/bafkreiek52nj62oyr5x2yphrqb3nln3dikleggtjdl2m4nlvvvdxmcxjd4";
        } else if(_tokenid == CAMPING) {
            return "https://ipfs.io/ipfs/bafkreigwzds6v2ogvlh4mljwi4pefc4frqis567x67y67hv6zntuv4done";
        } else if(_tokenid == CHRISTMAS) {
            return "https://ipfs.io/ipfs/bafkreidpi4o2gamqvqnt3khvtcqsc3ut6xe7lhh2mp2tanl3bw7d7dpgnq";
        } else if(_tokenid == DREAMING) {
            return "https://ipfs.io/ipfs/bafkreib3hy26jvyye54m3d2lqz4fjspf74eopmrolks3ufcip6uaawgaqm";
        } else if(_tokenid == TV_NIGHT) {
            return "https://ipfs.io/ipfs/bafkreihxdbfhgnumpevxwm5l34deoiuqj4ow35ljau7hy7d25nuffsgj74";
        }
        return "";
    }
}