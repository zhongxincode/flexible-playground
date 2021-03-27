import React, { memo, Fragment } from 'react'

import { Button } from 'antd';


import FlexItem from '../flex-item'
export default memo(function ResultShow(props) {
  const {containerFlexProps, itemProps, addDivItem, removeItem, onItemPropsChange} = props;

  return (
    <div className="right" >
      <h2>Result预览</h2>
      <Button onClick={addDivItem}>+ADD CHILD</Button>
      <div className="result" style={containerFlexProps}>
        {
          itemProps.map((itemProp,index)=>(
            <Fragment key={itemProp.id}>
              <FlexItem index={index} itemProp={itemProp} removeItem={removeItem} onItemPropsChange={onItemPropsChange} />
            </Fragment>
          ))
        }
      </div>
    </div>
  )
})
