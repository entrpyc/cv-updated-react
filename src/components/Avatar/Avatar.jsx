import { useContext, useState } from 'react';

import messages from './api/messages.json';

import css from './Avatar.module.scss';

import Text from 'elements/Text/Text'
import Image from 'elements/Image/Image'

import { FeatureContext } from 'context/FeatureContext';

import { indexGenerator } from 'helpers/generators';

function Avatar({ picture, name }) {
  const { chatBubble, chatBubbleVisible, chatBubbleEnabled } = useContext(FeatureContext);
  const [ messageGenerator ] = useState(indexGenerator(messages.length));

  const getMessage = () => messages[messageGenerator.next().value];

  function onProfileClick() {
    if(!chatBubbleEnabled) return;

    const messageToSet = !chatBubble.visible ? getMessage() : false;
    chatBubble.setMessageWithTimeout(messageToSet);
  }

  return (
    <div className={`${css.picture} ${chatBubbleVisible ? css.active : ''} ${chatBubbleEnabled ? css.chatBubble : ''}`} onClick={onProfileClick}>
      <div className="message">
        <Text>{chatBubble.message}</Text>
      </div>
      <div className="img-container">
        <Image src={picture} alt={name} />
      </div>
    </div>
  )
}

export default Avatar