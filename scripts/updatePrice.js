const hre = require("hardhat");

async function main() {
  const PriceFeed = await hre.ethers.getContractFactory("DynamicPriceRequest");
  const contract = await PriceFeed.attach(
    "0x6ED76dC30b53f81D560F11b081445Fc83815b94C"
  );

  const fulfill = await contract.fulfill(
    ethers.utils.parseUnits("0", 18),
    ethers.utils.parseUnits("330.25", 18),
    "UDCFTT"
  );
  const receipt = await fulfill.wait();
  console.log("$" + ethers.utils.formatEther(receipt.events[0].args.price));
  console.log(ethers.utils.formatEther(await contract.price()));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
