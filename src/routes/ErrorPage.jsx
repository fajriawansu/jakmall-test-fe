import { useNavigate, useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <Wrapper id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button type="text" className=" bg-softRed" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: screen;
    height: screen;
    display: flex;
`
