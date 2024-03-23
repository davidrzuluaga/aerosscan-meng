import { Outlet } from "react-router";
import styled from "@emotion/styled";

import { Sidebar } from "../../components";
import { useContext } from "react";
import { DataContext } from "../../contexts";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 0 0 200px;
`;

const LayoutStyles = styled.div`
  min-height: 100vh;
  background-color: #0c1719;
`;

export const UserLayout = () => {
  const { user } = useContext(DataContext);

  return (
    <LayoutStyles>
      <Sidebar user={user} />
      <ContentContainer>
        <div className="safe-sidebar-size"></div>
        <div className="container-content">
          <Outlet />
        </div>
      </ContentContainer>
    </LayoutStyles>
  );
};
