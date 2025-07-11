import React from "react";
import AppRouter from "./router/AppRouter";

export default function App() {
  console.log(import.meta.env.VITE_SOME_KEY);
  return (
    <>
      <AppRouter />
    </>
  );
}
