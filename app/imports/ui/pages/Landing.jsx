import React from 'react';
import { Tab, Header, Container } from 'semantic-ui-react';

class Landing extends React.Component {
  render() {
    const panes = [
      { menuItem: { color: 'red', content: 'High' },
        render: () => <Tab.Pane color='red'>Tab 1 Content</Tab.Pane>,
      },
      { menuItem: { color: 'yellow', content: 'Medium' },
        render: () => <Tab.Pane color='yellow'>Tab 2 Content</Tab.Pane>,
      },
      { menuItem: { color: 'green', content: 'Low' },
        render: () => <Tab.Pane color='green'>Tab 3 Content</Tab.Pane> },
    ];

    /* const Landing = () => ( */
    return (
      <Container>
        <Header size='huge' textAlign='center'>Platoon Mental Health Analysis</Header>
        <Tab
          menu={{ fluid: true, vertical: true }}
          menuPosition='left'
          panes={panes}
        />
      </Container>
    );
  }
}

export default Landing;
