import { TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const SFA = (props) => {
  const { code, setCode } = props;
  const navigate = useNavigate();

  const handleCodeChange = (e) => {
    setCode?.((prev) => ({ ...prev, [e.target?.name]: e.target.value }));
  };

  const CodeComp = styled.div`
    height: 20vh;
    padding: 20px;
    color: aliceblue;
    .MuiFormControl-root {
      background-color: aliceblue;
      width: 50px;
      margin: 0 5px;
      .MuiInputBase-root {
        font-size: 30px;
        padding: 0;
      }
      input {
        padding: 7px 16px;
      }
    }
  `;
  return (
    <CodeComp>
      <h2>Enter code</h2>
      {[0, 1, 2, 3, 4, 5].map((field) => (
        <TextField
          variant="outlined"
          width="10px"
          id={field}
          name={field}
          autoComplete={field}
          value={code[field]}
          onChange={handleCodeChange}
        />
      ))}
      <Button
        onClick={() => {
          if (Object.values(code).length === 6) {
            navigate("/");
          } else {
            Swal.fire("Code is required");
          }
        }}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </CodeComp>
  );
};
