import { useState } from "react";
import { ValueOf } from "react-native-gesture-handler/lib/typescript/typeUtils";

interface IAddOrUpdatePassword {
  username: string;
  password: string;
  site: string;
  showPassword: boolean;
  category: string;
  note: string;
}

const useAddOrUpdatePassword = (params?: { id?: string }) => {
  const [componentState, setComponentState] = useState({
    username: "",
    password: "",
    site: "",
    showPassword: false,
    category: "",
    note: ""
  });

  const handleOnChange = (
    key: keyof typeof componentState,
    value?: string | boolean
  ) => {
    setComponentState({ ...componentState, [key]: value });
  };

  return { componentState, handleOnChange };
};

export default useAddOrUpdatePassword;
