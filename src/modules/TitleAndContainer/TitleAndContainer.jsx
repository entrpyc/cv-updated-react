import css from './TitleAndContainer.module.scss';

import Title from 'elements/Title/Title';

import DynamicComponent, { DYNAMIC_MODULES_TYPES } from 'components/DynamicComponent/DynamicComponent';

function Portfolio({ title, blocks, id }) {
  return (blocks &&
    <section id={id} className={css.portfolio}>
      <Title>{title}</Title>
      {blocks.map((block, i) => (
        <div className={`wrap ${block.class || ''}`} key={i}>
          {block.title && (
            <Title tag="h3">{block.title}</Title>
          )}
          {block.content.map((blockContent, i) => (
            <DynamicComponent key={i} component={block.type} props={blockContent} type={DYNAMIC_MODULES_TYPES.block} />
          ))}
        </div>
      ))}
    </section>
  )
}

export default Portfolio