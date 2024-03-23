import styled from "@emotion/styled";
import { DataTable } from "./users/table";
import { allUsersService } from "../services";
import { useEffect, useState } from "react";

const HomeStyles = styled.div`
  color: #fff;
  .DataCard {
    min-height: 80vh;
    min-width: 700px;
    background-color: black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    padding: 20px;
  }
`;
export const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let users = [];
    try {
      const allUsers = await allUsersService();
      users = allUsers;
    } catch (error) {
      console.log(error);
      users = [
        {
          userId: 1,
          firstName: "juan",
          lastName: "velez",
          email: "juanvelez",
          dateOfBirth: "2000-02-12",
          userRole: "EMPLOYEE",
        },
        {
          userId: 2,
          firstName: "juan",
          lastName: "velez",
          email: "juanvelezhola",
          dateOfBirth: "2000-02-12",
          userRole: "EMPLOYEE",
        },
      ];
    } finally {
      setUsers(users?.map((user) => ({ ...user, id: user.userId } || [])));
    }
  };

  return (
    <HomeStyles>
      <div className="DataCard">
        <h1>All Users</h1>
        <DataTable users={users} />
      </div>
    </HomeStyles>
  );
};
