import Block from '../Block/Block'
import './Experience.scss';

const experience = [
  {
    title: 'Clustermarket',
    subTitle: 'Software Engineer | February, 2022 - PRESENT',
    text: "I'm working on a Booking software developed with Ruby.",
    secondary: "I'm developing the Front-end architecture of a Svelte based version of the software. We are working with GraphQL, Svelte, and GitLab. A part from the position is to review peer code on a daily basis and actively contribute to the development of the business logic.",
  },
  {
    title: 'Senteca Commerce',
    subTitle: 'Software Engineer | October, 2021 - January 2022',
    text: "I applied as a Senior Front-end Developer",
    secondary: "Senteca Commerce are developing e-commerce solutions for famous brands in Bulgaria. I was responsible for reviewing junior code and refactoring websites to improve their usability and performance. We were using Next.js, GraphQl, and Tailwind.",
  }
]

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
        {experience.map((item, index) => (
          <div className="block-container" key={index} >
            <Block {...item} />
          </div>
        ))}
    </section>
  )
}
 
export default Experience