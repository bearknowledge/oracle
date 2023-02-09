// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DynamicPriceRequest is Ownable {

    uint256 public price;
    bytes32 private requestId;
    string public sku;
    bool public filled;

    event RequestedPrice(bytes32 indexed requestId, uint256 price, string sku, bool status);
    event FetchPrice(bytes32 indexed requestId, string sku, bool filled);


    function requestPrice(string memory _sku) public onlyOwner returns (bytes32)  {
        // Sends  a request to server to fetch the price of our asset
        emit FetchPrice(requestId, _sku, false);
        return requestId;
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill(
        bytes32 _requestId,
        uint256 _price,
        string memory _sku
    ) public {
        emit RequestedPrice(_requestId, _price, _sku, true);
        price = _price;
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    // function withdrawGas() public onlyOwner {
    
    // }
}