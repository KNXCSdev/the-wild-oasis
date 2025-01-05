import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <div>
          <Heading as="h2">The</Heading>
          <Button>Check In</Button>
        </div>
      </StyledApp>
    </>
  );
}

export default App;
