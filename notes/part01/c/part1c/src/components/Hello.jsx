const Hello = ({name,age}) => {

    // the helper function is defined inside of another function that defines the behavior of our component.In JavaScript defining functions within functions is a commonly-used technique.

    // Note the more compact syntax for arrow functions: 
    const bornYear = () => new Date().getFullYear() - age


    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
        {/* The logic for guessing the year of birth is separated into a function of its own that is called when the component is rendered. */}
      </div>
    )
  }

  export default Hello;