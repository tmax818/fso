//We have defined a new component Hello and used it inside the component App. Naturally, a component can be used multiple times:

const Hello = (props) => {
  // console.log(props)
    return (
      <div>
  
        <p>
        Hello {props.name}, you are {props.age} years old
        </p>
        <p>The time is now {props.now}</p>
      </div>
    )
  }

  export default Hello;


  //Now the function defining the component has a parameter props. As an argument, the parameter receives an object, which has fields corresponding to all the "props" the user of the component defines.