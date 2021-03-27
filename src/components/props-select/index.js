import React, { memo } from 'react'

import { Radio } from 'antd';

export default memo(function PropsSelect(props) {
  const {
    containerPropsChange, 
    flexContainerProps:{
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent}} = props;
  return (
    <div className="left">
      <h2>父属性设置</h2>
      <div className="propsselect">
        <div className="fdir">
          <h1>flex-direction</h1>
          <Radio.Group name="fdir" defaultValue={flexDirection} size="large" buttonStyle="solid" onChange={e => containerPropsChange(e)}>
            <Radio.Button className="vertical" value="row">row</Radio.Button>
            <Radio.Button className="vertical" value="row-reverse">row-reverse</Radio.Button>
            <Radio.Button className="vertical" value="column">column</Radio.Button>
            <Radio.Button className="vertical" value="column-reverse">column-reverse</Radio.Button>
          </Radio.Group>
        </div>
        <div className="fwrap">
          <h1>flex-wrap</h1>
          <Radio.Group name="fwarp" defaultValue={flexWrap} size="large" buttonStyle="solid" onChange={e => containerPropsChange(e)}>
            <Radio.Button className="vertical" value="nowrap">nowrap</Radio.Button>
            <Radio.Button className="vertical" value="wrap">wrap</Radio.Button>
            <Radio.Button className="vertical" value="wrap-reverse">wrap-reverse</Radio.Button>
          </Radio.Group>
        </div>
        <div className="fwrap">
          <h1>justify-content</h1>
          <Radio.Group name="jcont" defaultValue={justifyContent} size="large" buttonStyle="solid" onChange={e => containerPropsChange(e)}>
            <Radio.Button className="vertical" value="flex-start">flex-start</Radio.Button>
            <Radio.Button className="vertical" value="flex-end">flex-end</Radio.Button>
            <Radio.Button className="vertical" value="center">center</Radio.Button>
            <Radio.Button className="vertical" value="space-between">space-between</Radio.Button>
            <Radio.Button className="vertical" value="space-around">space-around</Radio.Button>
            <Radio.Button className="vertical" value="space-evenly">space-evenly</Radio.Button>
          </Radio.Group>
        </div>
        <div className="fwrap">
          <h1>align-items</h1>
          <Radio.Group name="aitem" defaultValue={alignItems} size="large" buttonStyle="solid" onChange={e => containerPropsChange(e)}>
            <Radio.Button className="vertical" value="stretch">stretch</Radio.Button>
            <Radio.Button className="vertical" value="center">center</Radio.Button>
            <Radio.Button className="vertical" value="flex-start">flex-start</Radio.Button>
            <Radio.Button className="vertical" value="flex-end">flex-end</Radio.Button>
            <Radio.Button className="vertical" value="baseline">baseline</Radio.Button>
          </Radio.Group>
        </div>
        <div className="fwrap">
          <h1>align-content</h1>
          <Radio.Group name="acont" defaultValue={alignContent} size="large" buttonStyle="solid" onChange={e => containerPropsChange(e)}>
            <Radio.Button className="vertical" value="stretch">stretch</Radio.Button>
            <Radio.Button className="vertical" value="center">center</Radio.Button>
            <Radio.Button className="vertical" value="flex-start">flex-start</Radio.Button>
            <Radio.Button className="vertical" value="flex-end">flex-end</Radio.Button>
            <Radio.Button className="vertical" value="space-between">space-between</Radio.Button>
            <Radio.Button className="vertical" value="space-around">space-around</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  )
})
