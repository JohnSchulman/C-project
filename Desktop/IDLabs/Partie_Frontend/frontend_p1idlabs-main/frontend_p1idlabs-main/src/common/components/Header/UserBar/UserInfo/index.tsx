import UserContext from "common/contexts/UserContext";
import React from "react";

/* type User = {
  name: string;
};

const url = "https://jsonplaceholder.typicode.com/users/1"; */

const UserInfo = () => {
  /* const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    axios.get(url).then((res: AxiosResponse<User>) => {
      setUser(res.data);
    });
  }, []); */

  const { user } = React.useContext(UserContext);

  return (
    <>
      {user && (
        <p>
          {user.firstname} {user.lastname}
        </p>
      )}
    </>
  );
};

export default UserInfo;
