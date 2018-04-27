import React from 'react'

const DocumentContext = React.createContext({
  document: undefined,
  window: undefined
})
const DocumentProvider = DocumentContext.Provider
const DocumentConsumer = DocumentContext.Consumer

export { DocumentProvider, DocumentConsumer }
