import { Link } from "react-router-dom";

const UnhandledException = () => {
  return (
    <div>
      <main>
        <h1>500</h1>
        <p>Server Error</p>
        <Link to="/">Return to Home Page</Link>
      </main>
    </div>
  );
};

export default UnhandledException;
