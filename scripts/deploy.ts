import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);


    // const BNBT = await ethers.getContractFactory("BNBT");
    // const BNBt = await BNBT.deploy();
    // console.log('BNBT address: ', BNBt.address);
    // Config.setConfig(network + '.BNBT', BNBt.address);

    // const USDT = await ethers.getContractFactory("USDT");
    // const USDt = await USDT.deploy();
    // console.log('USDT address: ', USDt.address);
    // Config.setConfig(network + '.USDT', USDt.address);
    
    // const NFTCard = await ethers.getContractFactory("NFTCard");
    // const nftCard = await NFTCard.deploy();
    // console.log('nftCard address: ', nftCard.address);
    // Config.setConfig(network + '.NFT', nftCard.address);

    // const Auction = await ethers.getContractFactory("Auction");
    // const auction = await Auction.deploy("0x02c0692d225884b132e3EEDe8Bef52Fa17056DB4", "0xF93a689aC39f9FC781c4fF2fA13FB886103923e8");
    // console.log('Auction deployed at: ', auction.address);
    // Config.setConfig(network + '.AUCTION', auction.address);

    // const Swap = await ethers.getContractFactory("CrowdSale");
    // const swap = await Swap.deploy(10000 ,10 ,' 0xc31D5D0830977e64A7F6f038dD5A3194e116a910', '0x02c0692d225884b132e3EEDe8Bef52Fa17056DB4');
    // console.log('Swap address: ', swap.address);
    // Config.setConfig(network + '.CROWD_SALE', swap.address);

    // const MKP = await ethers.getContractFactory("NFTCardMarketplace");
    // const nftCardMarketplace = await MKP.deploy("0x02c0692d225884b132e3EEDe8Bef52Fa17056DB4", "0xF93a689aC39f9FC781c4fF2fA13FB886103923e8");
    // console.log('Market deployed at: ', nftCardMarketplace.address);
    // Config.setConfig(network + '.MARKET', nftCardMarketplace.address);


    await Config.updateConfig();
    
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});
