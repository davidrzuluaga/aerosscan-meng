import { Outlet } from "react-router";
import styled from "@emotion/styled";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LayoutStyles = styled.div`
  background-color: #0c1719;
  min-height: 100vh;
`;

export const GlobalLayout = () => {
  return (
    <LayoutStyles>
      <ContentContainer>
        <div className="safe-sidebar-size"></div>
        <div className="container-content">
          <Outlet />
        </div>
      </ContentContainer>
    </LayoutStyles>
  );
};
