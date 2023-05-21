import React from 'react'

const Tabs = (props) => {
   const {selectedIndx,title,tabs,setTabs} = props;
   const clickHandler = ()=>{
    const copiedTabs = [...tabs];
    copiedTabs.map(eachTab => eachTab.selected = false);
    const copiedTab = {...tabs[selectedIndx]};
    copiedTab.selected = true;
    copiedTabs[selectedIndx] = copiedTab;
    setTabs(copiedTabs);
   }
   return(
    <div>
        <button onClick={clickHandler}>{title}</button>
    </div>
   )
    }



export default Tabs;