import Hello from "./Hello"

const App = () => {
  console.table([
    ["Tyrone", "Jones"],
    ["Janet", "Smith"],
    ["Maria", "Cruz"],
  ])

  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  const name = 'Peter'
  const age = 43
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />

    < Hello name="George" age={age} />
    < Hello name={name} age={age} />
    < Hello name="Reggie" age={age + 9}/>
    < Hello name="Spencer" age={age - 13}/>

    </div>
  )
}

export default App
