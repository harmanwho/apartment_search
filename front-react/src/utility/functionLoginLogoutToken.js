import React from "react";

export const getLogin = async (userObj) => {
  const res = await fetch("/users/get_token", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  });
};

export const checkCurrentLogin = async (emailObj) => {
  const res = await fetch("/check_current_login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailObj),
  });

  const token = await res.json();

  return token;
};

export const checkIfUserPasswordMatches = async (userObj) => {
  const res = await fetch("/auth/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  });

  const token = await res.json();

  return token;
};

export const deleteLoginToken = async (query) => {
  const res = await fetch("/delete_login_token", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });
};
