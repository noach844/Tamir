import React, { useEffect, useState } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import { Draggable } from 'react-beautiful-dnd';
import '../App.css';
import 'antd/dist/antd.css';
import { Select, Popover, Form, Button, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { picked, unpicked } from '../redux/currency';
import { setCurrency } from '../redux/items';
import SelectForm from './SelectForm';

// import { Picked, SetCurrency } from '../redux/actions/index'
const { Option } = Select;

const hoverContent = <div>currency pair and amount</div>;

function PlaceHolder({ id }) {
  console.log(`placeholder props: item id ${id}`);

  const dispatch = useDispatch();
  const currencyPairList = useSelector((state) => state.currencyReducer);

  useEffect(() => {
    console.log(currencyPairList);
  }, [currencyPairList]);

  const [spec, setSpec] = useState({
    clicked: false,
    hovered: false,
  });

  const handleHoverChange = (visible) => {
    setSpec(spec.hovered === visible);
    setSpec(spec.clicked === false);
  };
  const handleClickChange = (visible) => {
    setSpec(spec.hovered === visible);
    setSpec(spec.clicked === false);
  };

  return (
    <div>
      <Draggable
        className='task-css'
        direction='horizontal'
        draggableId={JSON.stringify(id)}
        key={id}
        index={id}
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h1>{id}</h1>
            {/* <Tooltip placement="top" title={tooltipText}> */}
            <Popover
              style={{ width: 500 }}
              content={hoverContent}
              title='Add Widget'
              trigger='hover'
              visible={spec.hovered}
              onVisibleChange={handleHoverChange}
            >
              <Popover
                content={<SelectForm id={id} />}
                style={{ width: 800, height: 300 }}
                title='Your widget will be ready in few serconds '
                trigger='click'
                visible={spec.clicked}
                onVisibleChange={handleClickChange}
              >
                <PlusSquareOutlined className='placeholder-css' />
              </Popover>
            </Popover>
          </div>
        )}
      </Draggable>
    </div>
  );
}

export default PlaceHolder;
