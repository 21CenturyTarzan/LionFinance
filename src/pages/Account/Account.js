import React from "react";
import MenuIcon from "../../assets/images/menu.svg";
import "./account.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Wallet from "../../components/Wallet";
import CountDown from '../../components/CountDown';
import {numberWithCommas} from '../../utils/numberUtils.ts';
import TopBar from '../../components/Topbar/Topbar';

const Account = ({setmobMenu, setModal, account, setAccount, ...props}) => {
	const rate = 1.00047104;
	let {chainId, setChainId, tokenPrice, balance, interval, remainTime,setInit} = props;
	// console.log("BBBB",balance, numberWithCommas(balance));
	tokenPrice = parseFloat(tokenPrice).toFixed(3);
	const tokenUSD =(tokenPrice)*parseFloat(balance);
	const nextRewardAmount = parseFloat(balance)*(rate-1);
	const nextRewardYield = 100*(rate-1);
	const nextRewardUSD = nextRewardAmount*(tokenPrice);
	const apy = 100 * rate**(365*24*3600/interval);
	const roi_1day = 100 * (rate**(24*3600/interval));
	const roi_1dayUSD = parseFloat(tokenUSD)*roi_1day/100;

	const roi_5day = 100 * (rate**(5*24*3600/interval));
	const roi_5dayUSD = parseFloat(tokenUSD)*roi_5day/100;

	return (
		<>
			<div className="root-container">
				<div className= "sidebar">
					<Sidebar account={account}/>
				</div>
				<div className="main-container">
					<div className="main-container-area">
						<div className="account-container">

							<div className="account-detail-container">
								<div className="acc-detail-wrap">
									<span>Your Balance</span>
									<h1>${numberWithCommas(tokenUSD)}</h1>
									<span>{numberWithCommas(balance)} DUU</span>
								</div>
								<div className="acc-detail-wrap">
									<span>APY</span>
									<h1>383025.8%</h1>
									<span>Daily ROI {numberWithCommas(roi_1day)}%</span>
								</div>
								<div className="acc-detail-wrap">
									<span>Next Rebase:</span>
									<h1><CountDown interval={interval} remainTime = {remainTime} setInit={setInit}></CountDown></h1>
									<span>You will earn money soon</span>
								</div>
							</div>
							<div className="account-matrix-wrap">
								<div className="account-data">
									<p>Current DUU Price</p>
									<span className="color-white">${numberWithCommas(tokenPrice)}</span>
								</div>
								<div className="account-data">
									<p>Next Reward Amount</p>
									<span className="color-white">{numberWithCommas(nextRewardAmount)} DUU</span>
								</div>
								<div className="account-data">
									<p>Next Reward Amount USD</p>
									<span className="color-white">${numberWithCommas(nextRewardUSD)}</span>
								</div>
								<div className="account-data">
									<p>Next Reward Yield</p>
									<span className="color-white">{numberWithCommas(nextRewardYield)}%</span>
								</div>
								<div className="account-data">
									<p>ROI (1-Day Rate) USD</p>
									<span className="color-white">${numberWithCommas(roi_1dayUSD)}</span>
								</div>
								<div className="account-data">
									<p>ROI (5-Day Rate)</p>
									<span className="color-white">{numberWithCommas(roi_5day)}%</span>
								</div>
								<div className="account-data">
									<p>ROI (5-Day Rate) USD</p>
									<span className="color-white">${numberWithCommas(roi_5dayUSD)}</span>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Account;
