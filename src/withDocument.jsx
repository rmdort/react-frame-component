import React from 'react';
import { DocumentConsumer } from './Context';

export default function withDocument (WrappedComponent) {
  return props => (
    <DocumentConsumer>
      {values => (
        <WrappedComponent
          {...props}
          {...values}
        />)
      }
    </DocumentConsumer>
  );
}
