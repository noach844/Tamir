import React, { useState } from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';
import { Draggable } from 'react-beautiful-dnd';
import '../App.css';
import 'antd/dist/antd.css';
import { Select, Popover, Form, Button, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { picked, unpicked } from '../redux/currency';
import { setCurrency } from '../redux/items';

const { Option } = Select;

const SelectForm = ({ id }) => {
  const currencyPairList = useSelector((state) => state.currencyReducer);
  const dispatch = useDispatch();

  function onFinish(value) {
    let name = value.currencyPair;
    let data = { id, name };
    // console.log(`susscefuly update redux state: ${currencyPair} `)
    dispatch(picked(data));
    console.log(`susscefuly update redux state: ${name} `);

    dispatch(setCurrency(data));
    //
  }

  return (
    <Form onFinish={onFinish}>
      <Space direction='vertical'>
        <Form.Item name='currencyPair' rules={[{ required: true }]}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder='Select a currency pair'
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {Object.values(currencyPairList.value).map(
              (currencyPair, index) => {
                if (currencyPair.picked === false)
                  return (
                    <Option key={index} value={currencyPair.currencyName}>
                      {currencyPair.currencyName}
                    </Option>
                  );
              }
            )}
          </Select>
        </Form.Item>
        <Form.Item name='Amount' rules={[{ required: true }]}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder='Select amount'
            optionFilterProp='children'
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value='1'>1 million</Option>
            <Option value='2'>2 million</Option>
            <Option value='3'>3 million</Option>
            <Option value='4'>4 million</Option>
            <Option value='5'>5 million</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default SelectForm;
