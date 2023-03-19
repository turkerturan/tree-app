import React from 'react';
import { Button } from "@mui/material";
import "./App.scss"
import TreeView from './components/TreeView';
import { useDispatch } from 'react-redux';
import { createNewNode, refreshRequests } from './redux/treeSlice';


function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Button onClick={() => dispatch(createNewNode({ root: true }))}>Add new tree</Button>
      <Button onClick={() => dispatch(refreshRequests())} >Refresh requests</Button>
      <TreeView />
    </div>
  );
}

export default App;