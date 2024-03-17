import { useState } from "react";
import { Alert } from "react-native";

import { supabase } from "../lib/supbase";

export const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) Alert.alert("Sign In Error", error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) Alert.alert("Sign Up Error", error.message);
    setLoading(false);
  }

  return {
    email,
    password,
    handlePasswordChange: setPassword,
    handleEmailChange: setEmail,
    signInWithEmail,
    signUpWithEmail
  };
};
