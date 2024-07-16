import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {name: 'Fundamentals of React', exerciseNo: 10};
  const part2 = {name: 'Using props to pass data', exerciseNo: 7};
  const part3 = {name: 'State of a component', exerciseNo: 14};
  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course}></Header>      
      <Content parts={parts}/>
      <Total total={part1.exerciseNo + part2.exerciseNo + part3.exerciseNo}/>
    </div>
  )
}

export default App