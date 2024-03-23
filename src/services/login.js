import axios from "axios";

const loginservice = async (
  firstName,
  lastName,
  email,
  password,
  dateOfBirth
) => {
  let headersList = {
    Accept: "/",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
  });

  let reqOptions = {
    url: "localhost:8080/auth/register",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  let response = await axios.request(reqOptions);
  return response.data;
};
export { loginservice };
