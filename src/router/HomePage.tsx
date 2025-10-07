import { Link } from "react-router-dom";
import Container from "../components/Container";

const HomePage = () => {
  return (
    <Container>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Todos or Notes</h1>
        <p className="text-surface-500 mt-2">Choose a challenge to get started</p>
      </div>
      <div className="flex gap-[20px]">
        <Link className="link-tile" to="/todo">
          <span className="text-primary-700">Todo</span>
        </Link>
        <Link className="link-tile" to="/nested">
          <span className="text-primary-700">Nested</span>
        </Link>
      </div>
    </Container>
  );
};
export default HomePage;
