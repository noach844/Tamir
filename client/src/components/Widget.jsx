import React from 'react';
import '../App.css';
import { Select } from 'antd';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

const Widget = ({ id, response }) => {
  console.log(`placeholder props: item id ${id}`);
  console.log(`response ${response}`);

  const currencyPairName = useSelector((state) => state.itemsReducer);
  console.log(
    'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb    ' +
      JSON.stringify(currencyPairName)
  );

  // console.log(`Widget props: item ${id} index ${index} currencyPairName ${currencyPairName}`)
  return (
    <div>
      <Draggable
        className='task-css'
        direction='horizontal'
        draggableId={JSON.stringify(id)}
        key={id}
        index={id}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className='widget-header'>
              <h1>{currencyPairName[id].currencyPair}</h1>
              <div className='widget'>
                <a>{`bid: ${response[0].prices.bid}`}</a>
                <a>{`offer: ${response[0].prices.offer}`}</a>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default Widget;
