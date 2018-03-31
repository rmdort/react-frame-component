import React from 'react';
import PropTypes from 'prop-types';
import Frame from '../src';

class InnerFrame extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      text: 'hey'
    }
  }
  update = () => {
    this.setState({
      text: 'helllo'
    })
  }
  render () {
    // console.log('IFrame Window and Document: ', context.window, context.document);
    return (
      <h1 onClick={this.update}>Inside Frame Text - {this.state.text}</h1>
    );
  }
};
InnerFrame.contextTypes = {
  window: PropTypes.any,
  document: PropTypes.any
};

const { Provider, Consumer } = React.createContext({ })

const Application = () => (
  <Provider value={{hey: 'hello'}}>
    <h1>Outside Frame Text</h1>
    <Frame>
      <Consumer>
        {(config) => {
          console.log(config)
          return <InnerFrame />
        }}
      </Consumer>
    </Frame>
  </Provider>
);

export default Application;
