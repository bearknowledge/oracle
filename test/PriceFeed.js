const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PriceFeed", function () {
  async function deployContractFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const PriceFeed = await ethers.getContractFactory("DynamicPriceRequest");
    const priceFeed = await PriceFeed.deploy();
    return { owner, otherAccount, priceFeed };
  }

  describe("Deployment", function () {
    it("check that it deploys", async function () {
      const { owner, priceFeed } = await loadFixture(deployContractFixture);
      // expect(await lock.unlockTime()).to.equal(unlockTime);
    });
  });

  describe("Index Check", function () {
    it("check that it has the correct number of indecies", async function () {
      const { owner, priceFeed } = await loadFixture(deployContractFixture);
      const id = await priceFeed.getAllIndecies();
      expect(id.length).to.equal(3);
    });
  });

  // describe("Status Check", function () {
  //   it("check the fufillment status", async function () {
  //     const { owner, priceFeed } = await loadFixture(deployContractFixture);
  //     const id = await priceFeed.requestPrice("GKLN6");
  //     const receipt = await id.wait();
  //     expect(receipt.events[0].args.filled).to.equal(false);
  //   });
  // });

  // describe("Check fulfill function", function () {
  //   it("check the fufillment function", async function () {
  //     const { owner, priceFeed } = await loadFixture(deployContractFixture);
  //     const fulfill = await priceFeed.fulfill(
  //       ethers.utils.parseUnits("0", 18),
  //       ethers.utils.parseUnits("330.25", 18),
  //       "UDCFTT"
  //     );
  //     const receipt = await fulfill.wait();
  //     console.log("$" + ethers.utils.formatEther(receipt.events[0].args.price))
  //     // expect(receipt.events[0].args.filled).to.equal(false);
  //   });
  // });

  // describe("RequestId Check", function () {
  //   it("check the request Id", async function () {
  //     const { owner, priceFeed } = await loadFixture(deployContractFixture);
  //     const id = await priceFeed.requestPrice("GKLN6");
  //     const receipt = await id.wait();
  //     expect(Number(receipt.events[0].args._requestId)).to.equal(0);
  //   });
  // });
});
