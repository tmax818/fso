import Hello from "./Hello";
import Footer from "./Footer";

const AppArray = () => {
    return [
      <h1>AppArray</h1>,
      <Hello name='Maya' age={26 + 10} />,
      <Footer />
    ]
  }

export default AppArray;

// However, when defining the root component of the application this is not a particularly wise thing to do, and it makes the code look a bit ugly.