import React, { memo, useState } from 'react'

import {nanoid} from 'nanoid'

import PropsSelect from './components/props-select';
import ResultShow from './components/result-show'
import "./App.css"

export default memo(function App() {
  const [flexContainerProps, setFlexContainerProps] = useState({
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
  });

  const [itemProps, setItemProps] = useState([
    {id: nanoid(),order: 0, flexGrow: 0, flexShrink: 1, flexBasis: 'auto', alignSelf: 'auto'},
    {id: nanoid(),order: 0, flexGrow: 0, flexShrink: 1, flexBasis: 'auto', alignSelf: 'auto'},
    {id: nanoid(),order: 0, flexGrow: 0, flexShrink: 1, flexBasis: 'auto', alignSelf: 'auto'},
  ]);

  const addDivItem = () => {
    const item = {id: nanoid(),order: 0, flexGrow: 0, flexShrink: 1, flexBasis: 'auto', alignSelf: 'auto'};
    setItemProps([...itemProps,item])
  } 

  function removeItem(index) {
    setItemProps(itemProps.filter((prop, ind) => index !== ind))
  }
  
  function containerPropsChange(e) {
    console.log(e);
    const {value, name} = e.target;
    switch (name) {
      case "fdir":
        setFlexContainerProps({...flexContainerProps,flexDirection:value});
        break;
      case "fwarp":
        setFlexContainerProps({...flexContainerProps,flexWrap:value});
        break;
      case "jcont":
        setFlexContainerProps({...flexContainerProps,justifyContent:value});
        break;
      case "aitem":
        setFlexContainerProps({...flexContainerProps,alignItems:value});
        break;
      case "acont":
        setFlexContainerProps({...flexContainerProps,alignContent:value});
        break;
      default:
        setFlexContainerProps({...setFlexContainerProps})
    }
  }
 
  const onItemPropsChange = {
    orderChange: function(e,index){
      const newProps = {...itemProps[index], order:e};
      setItemProps(itemProps.map((item,ind) => {
        return ind ===index ? newProps : item;
      }))
    },
    flexGrowChange: function(e,index){
      const newProps = {...itemProps[index], flexGrow:e};
      setItemProps(itemProps.map((item,ind) => {
        return ind ===index ? newProps : item;
      }))
    },
    flexShrinkChange: function(e,index){
      const newProps = {...itemProps[index], flexShrink:e};
      setItemProps(itemProps.map((item,ind) => {
        return ind ===index ? newProps : item;
      }))
    },
    flexBasisChange: function(e,index){
      const newProps = {...itemProps[index], flexBasis:e};
      setItemProps(itemProps.map((item,ind) => {
        return ind ===index ? newProps : item;
      }))
    },
    alignSelfChange: function(e,index){
      const newProps = {...itemProps[index], alignSelf:e};
      setItemProps(itemProps.map((item,ind) => {
        return ind ===index ? newProps : item;
      }))
    }
  }

  return (
    <div className="view">
      <div className="header">
        <h1>flexbox playground</h1>
      </div>
      <div className="container">
        <PropsSelect containerPropsChange={containerPropsChange} flexContainerProps={flexContainerProps} />
        <ResultShow addDivItem={addDivItem} removeItem={removeItem} onItemPropsChange={onItemPropsChange} itemProps={itemProps} containerFlexProps={flexContainerProps} />
      </div>
      <div className="footer"></div>
    </div>
  )
})

