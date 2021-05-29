import React from 'react'
import Tree from './Tree';
import Individual from './Individual';
import Entire from './Entire';
import Blurb from './Blurb';

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <Individual />
      <Blurb />
      <Entire />
      <Tree />
    </div>
  );
}
