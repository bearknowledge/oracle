// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DynamicPriceRequest is Ownable {

      struct IndexInfo {
        uint256 price;
        uint256 timeEntered;
    }

    mapping (string => IndexInfo) public Index;

    uint256 private fulfillmentId = 0;
    bool public filled;
    string[] public allIndecies;
    event PriceUpdate(uint256 _fulfillmentId, uint256[] prices , bool status);
    event NewIndexCreated(uint256 _timestamp, string indexName);

constructor () {
    Index["xci"] = IndexInfo(0, block.timestamp);
    allIndecies.push("xci");
    Index["hype6"] = IndexInfo(0, block.timestamp);
    allIndecies.push("hype6");
    Index["sp50"] = IndexInfo(0, block.timestamp);
    allIndecies.push("sp50");
}

     function createIndex(string memory indexName, uint256 startPrice) public onlyOwner returns (string memory)  {
        //Creates a new index to be tracked on chain
        Index[indexName] = IndexInfo(startPrice, block.timestamp); 
        allIndecies.push(indexName);
        emit NewIndexCreated(block.timestamp, indexName);
        return indexName;
    }

    function getAllIndecies() public view returns (string[] memory) {
        return allIndecies;
    }

    
    function fulfill(
        uint256[] calldata prices
        //pass in an array and loop through the values to update
    ) private onlyOwner {
        Index["xci"] = IndexInfo(prices[0], block.timestamp);
        Index["hype6"] = IndexInfo(prices[1], block.timestamp);
        Index["sp50"] = IndexInfo(prices[2], block.timestamp);
         emit PriceUpdate(fulfillmentId++, prices, true);
    }
       
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    // function withdrawGas() public onlyOwner {
    
    // 