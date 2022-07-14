import React from 'react';
import { Tab } from 'semantic-ui-react';

const panes = [
  { menuItem: 'High', render: () => <Tab.Pane color='red' >Tab 1 Content</Tab.Pane> },
  { menuItem: 'Medium', render: () => <Tab.Pane color='yellow' >Tab 2 Content</Tab.Pane> },
  { menuItem: 'Low', render: () => <Tab.Pane color='green' >Tab 3 Content</Tab.Pane> },
];

const Landing = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
);

export default Landing;
