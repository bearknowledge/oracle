const hre = require("hardhat");

async function main() {
  const PriceFeed = await hre.ethers.getContractFactory("DynamicPriceRequest");
  const contract = await PriceFeed.attach(
    "0xa7047Fe52877f6c70be21ee3fF0f2768D0AeD33B"
  );


  // const fulfill = await contract.fulfill(
  //   ethers.utils.parseUnits("0", 18),
  //   ethers.utils.parseUnits("330.25", 18),
  //   "UDCFTT"
  // // );
  // const receipt = await fulfill.wait();
  // console.log("$" + ethers.utils.formatEther(receipt.events[0].args.price));
    const xci = await contract.Index("xci");
    const hype6 = await contract.Index("hype6");
    const sp50 = await contract.Index("sp50");
    console.log(ethers.utils.formatEther(xci["price"]))
    console.log(ethers.utils.formatEther(hype6["price"]))
    console.log(ethers.utils.formatEther(sp50["price"]))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
