import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PlaceHolder from './PlaceHolder.jsx';
import Widget from './Widget.jsx';
import BidOfferButtons from './BidOfferButtons';
import { useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import '../App.css';

const PlaceHoldersList = ({ response, onBid }) => {
  const [clickedCounter, setCount] = useState({
    usdIlsCounter: { bid: 0, offer: 0 },
    eurUsdCounter: { bid: 0, offer: 0 },
    usdJpyCounter: { bid: 0, offer: 0 },
  });

  const itemsID = useSelector((state) => state.itemsReducer);
  const currency = useSelector((state) => state.currencyReducer);
  const items2 = [1, 2, 3];
  const items = [
    {
      name: 'placeholder-1',
      id: 0,
    },
    {
      name: 'placeholder-2',
      id: 1,
    },
    {
      name: 'placeholder-3',
      id: 2,
    },
  ];
  const [list, setList] = useState(items);

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
  let itemsList = items.map((item, index) => {
    console.log(currency.value, item.name, itemsID);
    if (!itemsID[item.id].currencyPair)
      return <PlaceHolder key={item.id} id={item.id} />;
    else
      return (
        <div key={item.id} className='main-widget-flex'>
          <Widget id={item.id} response={response} />
          <BidOfferButtons
            name={itemsID[item.id].currencyPair}
            id={item.id}
            item={item.id}
            onBid={onBid}
          />
        </div>
      );
  });

  return (
    <div className='placeholder-div-css'>
      <Droppable droppableId='droppableId-1' direction='horizontal'>
        {(provided) => (
          <div
            style={{ display: 'flex' }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {itemsList}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default PlaceHoldersList;
