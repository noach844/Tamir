import React from 'react';
import { Button } from 'antd';
const BidOfferButtons = ({ name, item, index, onBid, identify }) => {
  // const compare={

  //     usdIlsCounter:0,
  //     eurUsdCounter:1,
  //     usdJpyCounter:2
  // }
  let id = identify;
  const CounterBid = (value) => {
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+identify)
    onBid(name, 'bid');
  };
  const CounterOffer = (value) => {
    onBid(name, 'offer');
  };

  return (
    <div>
      <Button onClick={CounterBid}>Bid</Button>
      <Button onClick={CounterOffer}>Offer</Button>
    </div>
  );
};

export default BidOfferButtons;
