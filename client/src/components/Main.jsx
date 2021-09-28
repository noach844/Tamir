import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PlaceHolder from './PlaceHolder.jsx';
import Widget from './Widget.jsx';
import BidOfferButtons from './BidOfferButtons';
import PlaceHoldersList from './PlaceHoldersList';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import '../App.css';

function Main({ response }) {
  // const currencyPairList = useSelector(state => state.PickedReducer.placeholders)
  const currencyPairList = useSelector((state) => state.currencyReducer);
  // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+currencyPairList[0].id)
  const [counters, setCounters] = useState({
    'USD / ILS': { bid: 0, offer: 0 },
    'EUR / USD': { bid: 0, offer: 0 },
    'USD / JPY': { bid: 0, offer: 0 },
  });
  // console.log(`clickedCounter params:${clickedCounter.usdIlsCounter.bid}`)

  const items2 = [1, 2, 3];
  const items = [
    {
      name: 'placeholder-1',
      id: 1,
    },
    {
      name: 'placeholder-2',
      id: 2,
    },
    {
      name: 'placeholder-3',
      id: 3,
    },
  ];

  const [list, setList] = useState(items);

  const CountersFunction = (name, type) => {
    setCounters((prevState) => {
      prevState[name][type] += 1;
      return prevState;
    });
  };

  // const CounterFunc = (id, type) => {
  //   // console.log(`CounterFunc params: id ${id} type ${type}`)
  //   if (id === 1) { setCount(clickedCounter.usdIlsCounter['bid']=clickedCounter.usdIlsCounter['bid'] + 1) ;console.log(`clickedCounter params:${clickedCounter.usdIlsCounter.bid}`)}
  //   if (id === 2) { setCount(clickedCounter.eurUsdCounter['bid']=clickedCounter.usdIlsCounter['bid'] + 1) }
  //   if (id === 3) { setCount(clickedCounter.usdJpyCounter['bid']=clickedCounter.usdIlsCounter['bid'] + 1) }
  //   else
  //   console.log(clickedCounter)
  // }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onEnd = (result) => {
    // console.log(result)
    if (result.destination !== null) {
      setList(reorder(list, result.source.index, result.destination.index));
    }
  };

  return (
    <div className='placeholder-div-css'>
      <DragDropContext direction='horizontal' onDragEnd={onEnd}>
        <PlaceHoldersList response={response} onBid={CountersFunction} />
      </DragDropContext>
    </div>
  );
}

export default Main;
