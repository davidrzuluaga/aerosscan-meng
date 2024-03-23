import { useContext, useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
//import jwt from "jsonwebtoken";
import styled from "@emotion/styled";
import logo from "../../assets/images/logo.png";
import { loginservice } from "../../services";
import Swal from "sweetalert2";
import { DataContext } from "../../contexts";

const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18vh 0 0 0;
  form {
    padding: 20px 0;
    input {
      --color: #a4a4a4;
      background-color: aliceblue;
    }
  }
  .logo {
    display: flex;
    justify-content: center;
    margin: 20px 200px 0 0;
  }
  padding: 20px;
`;

const Login = () => {
  const { setUser } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let login = {};
    try {
      if (!email || !password) {
        Swal.fire("Email and Password are required");
        return;
      }
      login = await loginservice();
      setEmail("");
      setPassword("");
    } catch (error) {
      const dummyToken = ''// jwt.sign({ name: "user" }, "token", {algorithm: "RS256",});
      console.log(error);
      login = { token: dummyToken };
    } finally {
      setUser(login);
    }
  };

  return (
    <LoginFormContainer>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </LoginFormContainer>
  );
};

export { Login };
