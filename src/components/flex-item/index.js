import React, { memo } from 'react'

import { InputNumber, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons'
import "./style.css"
export default memo(function FlexItem(props) {
  console.log(props);
  const { index, removeItem, onItemPropsChange, itemProp} = props;
  const {order, flexGrow, flexShrink, flexBasis, alignSelf} = itemProp;
  const {
    orderChange,
    flexGrowChange,
    flexShrinkChange,
    flexBasisChange,
    alignSelfChange} = onItemPropsChange;

  const { Option } = Select;
  return (
    <div className="flex-item" style={itemProp}>
      <span>{index + 1}</span>
      <span onClick={e => removeItem(index)} className="del-icon">
        <CloseOutlined />
      </span>
      <div className="input-props">
        <div className="children-prop">
          <span className="cpt">order:</span>
          <InputNumber name="order" size="small" defaultValue={order} onChange={e => orderChange(e, index)} />
        </div>
        <div className="children-prop">
          <span className="cpt">flex-grow:</span>
          <InputNumber size="small" defaultValue={flexGrow} onChange={e => flexGrowChange(e, index)} />
        </div>
        <div className="children-prop">
          <span className="cpt">flex-shrink:</span>
          <InputNumber size="small" defaultValue={flexShrink} onChange={e => flexShrinkChange(e, index)} />
        </div>
        <div className="children-prop">
          <span className="cpt">flex-basis:</span>
          <InputNumber size="small" defaultValue={flexBasis} onChange={e => flexBasisChange(e, index)} />
        </div>
        <div className="children-prop">
          <span className="cpt">align-self:</span>
          <Select defaultValue={alignSelf} style={{ width: 90 }} onChange={e => alignSelfChange(e, index)} >
            <Option value="auto">auto</Option>
            <Option value="flex-start">flex-start</Option>
            <Option value="flex-end">flex-end</Option>
            <Option value="center">center</Option>
            <Option value="baseline">baseline</Option>
          </Select>
        </div>
      </div>
    </div>
  )
})
