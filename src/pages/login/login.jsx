import { useContext, useState } from "react";
//import jwt from "jsonwebtoken";
import styled from "@emotion/styled";
import logo from "../../assets/images/logo.png";
import { loginservice } from "../../services";
import Swal from "sweetalert2";
import { DataContext } from "../../contexts";
import { LoginForm } from "./form/login-form";
import { SFA } from "./sfa/sfa";

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
  const [code, setCode] = useState({});
  const [step, setStep] = useState(0);

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
      setStep(1);
    } catch (error) {
      const dummyToken = ""; // jwt.sign({ name: "user" }, "token", {algorithm: "RS256",});
      console.log(error);
      login = { token: dummyToken };
      setStep(1);
    } finally {
      setUser(login);
    }
  };

  return (
    <LoginFormContainer>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      {step === 0 && (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      )}
      {step === 1 && <SFA code={code} setCode={setCode} />}
    </LoginFormContainer>
  );
};

export { Login };
