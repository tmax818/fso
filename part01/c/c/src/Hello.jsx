const Hello = ({name, age}) => {

    const bornYear = () => new Date().getFullYear() - age;
      
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
        <p>So you were born in {bornYear()}</p>
      </div>
    )
  }

  export default Hello