import axios from "axios";

const allUsersService = async (token) => {
  let headersList = {
    Accept: "/",
    Authorization: "Bearer " + token,
  };

  let reqOptions = {
    url: "localhost:8080/users/all",
    method: "POST",
    headers: headersList,
  };
  let response = await axios.request(reqOptions);
  return response.data;
};

export { allUsersService };
