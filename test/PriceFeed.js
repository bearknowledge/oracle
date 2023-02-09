const {
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("PriceFeed", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const PriceFeed = await ethers.getContractFactory("DynamicPriceRequest");
    const priceFeed = await PriceFeed.deploy();

    return { owner, otherAccount, priceFeed };
  }

  describe("Deployment", function () {
    it("check that it deploys", async function () {
      const { owner,priceFeed } = await loadFixture(deployContractFixture);

        // console.log(priceFeed.interface.events)
      // expect(await lock.unlockTime()).to.equal(unlockTime);
    });

  });
  
  describe("Sku Check", function () {
    it("check that it takes in a sku", async function () {
      const { owner,priceFeed } = await loadFixture(deployContractFixture);
      const id = await priceFeed.requestPrice("GKLN6")

      console.log( id)
      // expect(await lock.unlockTime()).to.equal(unlockTime);
    });

  })


})
  