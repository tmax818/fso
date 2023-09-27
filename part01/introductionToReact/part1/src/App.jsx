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

    < Hello name="George" />
    < Hello name="Daisy" />
    < Hello name="Reggie"/>
    < Hello name="Spencer"/>

    </div>
  )
}

export default App
