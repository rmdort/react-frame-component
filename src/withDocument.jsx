import React from 'react';
import { DocumentConsumer } from './Context';

export default function withDocument (WrappedComponent) {
  return props => (
    <DocumentConsumer>
      {({ document, window }) => (
        <WrappedComponent
          {...props}
          window={window}
          document={document}
        />)
      }
    </DocumentConsumer>
  );
}
