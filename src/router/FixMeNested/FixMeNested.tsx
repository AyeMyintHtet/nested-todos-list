import Container from "../../components/Container";
import NestedItem from "../../components/Nested/NestedItem";
import useNested from "./useNested";

const FixMeNested = () => {
  const { data, onToggleExpend, onCreateNewChild, onRemoveChild } = useNested();

  return (
    <Container>
      <h2 className="mb-4 text-center"> Fix Me Nested </h2>

      {data.map((item) => (
        <NestedItem
          key={item.id}
          item={item}
          depth={1}
          onToggleExpend={onToggleExpend}
          onCreateChild={onCreateNewChild}
          onRemoveChild={onRemoveChild}
        />
      ))}
    </Container>
  );
};
export default FixMeNested;
