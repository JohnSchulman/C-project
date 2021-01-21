import { UserEnriched } from "common/models/user";
import React from "react";

type UserContext = {
  user?: UserEnriched;
  setUser: (user: UserEnriched) => void;
};

export default React.createContext<UserContext>({
  user: undefined,
  setUser: (user: UserEnriched): void => {},
});
