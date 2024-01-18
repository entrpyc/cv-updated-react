import { useContext, useState } from 'react';

import css from './Avatar.module.scss';

import Text from 'elements/Text/Text'
import Image from 'elements/Image/Image'

import { GlobalContext } from 'context/GlobalContext';

const messages = [
  "This feature was developed with vanilla JS and CSS - super lightweight and fun! Click again...",
  "...I wanted to make my bio more engaging, that's how I came up with the idea for this feature. 💡",
  "My greatest strengths are prioritization, developing smooth UX and writing reusable code.",
  "My weakness is competitive coding - it's just not interesting for me. 🫤",
  "Learning to apply the Pareto Principle and the Eisenhower Matrix together in software development was one of the biggest game changers for me. 🤯",
  "A quality I appreciate in teammates is to be able to address unanticipated issues quickly.",
  "Athletic training helped me to become a better engineer - the approach to both is quite similar actually 🤨",
  "The most common issue I've seen in dev teams is the lack of planning and feature design - once some good practices are established to address those issues, productivity skyrockets! 🚀",
  `My "weird flex" is - the most I've worked on a project without taking a break was for more than 70 hours. 💪`,
  "Ubuntu is my OS of preference.",
  `Here are some hobbies of mine - powerlifting, breakdance, tricking, writing music (classical, not trap beats), food tourism... Also I have 1.3 million points on Rammus.`,
  "My favorite artist is Johann Sebastian Bach. Followed by 2PAC.",
  "The greatest debates I've witnessed in person were about what type of quotes we should use when coding. 🤖",
  "Even when we work with Jira, GitLab, etc. I always keep notes and tasks on my personal TickTick (todo list) - it helps me to keep history and to track progress.",
  "I've spent more time writing these messages than to code the entire website. ⚙️",
]

function* indexGenerator() {
  let i = 0;
  while (true) {
    yield i % messages.length;
    i += 1;
  }
}

function Avatar({ picture, name }) {
  const { message, messageVisible, setMessage } = useContext(GlobalContext);
  const [messageGenerator] = useState(indexGenerator());

  const getMessage = () => messages[messageGenerator.next().value];

  function onProfileClick() {
    const messageToSet = !messageVisible ? getMessage() : false;
    // setMessage(messageToSet);
  }

  return (
    <div className={`${css.picture} ${messageVisible ? css.active : ''}`} onClick={onProfileClick}>
      <div className="message">
        <Text>{message}</Text>
      </div>
      <div className="img-container">
        <Image src={picture} alt={name} />
      </div>
    </div>
  )
}

export default Avatar