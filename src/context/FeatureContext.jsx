import React, { useState, createContext, useEffect } from 'react';

import TimedMessage from 'helpers/timed-message';

export const FeatureContext = createContext()

const chatBubble = new TimedMessage();

export const FeatureProvider = props => {
  const [ chatBubbleEnabled, setChatBubbleEnabled ] = useState(false);
  const [ chatBubbleVisible, setChatBubbleVisible ] = useState(chatBubble.visible);

  useEffect(() => {
    chatBubble.setOnVisibilityUpdate((visibility) => setChatBubbleVisible(visibility));
  }, [])

  return <FeatureContext.Provider value={{
    chatBubble, chatBubbleEnabled, setChatBubbleEnabled, chatBubbleVisible
  }}>
    {props.children}
  </FeatureContext.Provider>
}