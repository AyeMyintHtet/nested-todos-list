import { Link } from "react-router-dom";
import Container from "../components/Container";

const HomePage = () => {
  return (
    <Container>
      <h1 className="text-center mb-8"> FIX ME !!</h1>
      <div className="flex gap-[30px]">
        <Link
          className="hover:bg-[#fafafa] flex flex-1 min-h-[200px] border rounded-md justify-center items-center"
          to="/fix-me-todo"
        >
          Todo
        </Link>
        <Link
          className="hover:bg-[#fafafa] flex flex-1 min-h-[200px] border rounded-md justify-center items-center"
          to="/fix-me-nested"
        >
          Nested
        </Link>
      </div>
    </Container>
  );
};
export default HomePage;
