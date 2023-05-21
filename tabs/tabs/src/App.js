import './App.css';
import Tabs from './components/tabs';
import React, { useState } from 'react'

function App() {
  const [tabs, setTabs] = useState([{ title: "tab 1", content: "Tab 1 Content", selected: false },
  { title: "tab 2", content: "Tab 2 content", selected: false }, { title: "tab 3", content: "Tab 3 content", selected: false }]);
  return (
    <div className="App">
      <div className='tabs'>
        {tabs.map((tab, i) => {
          return (
            <Tabs
              selectedIndx={i}
              title={tab.title}
              tabs={tabs}
              setTabs={setTabs}
            />
          )
        })}
      </div>
      <div className='display' style={{ height: "100px", width: "200px" }}>
        {tabs.map((tab) => {
          return (
            tab.selected && <p>{tab.content}</p>
          )
        })}
      </div>
    </div>
  );
}

export default App;
