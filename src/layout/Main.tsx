import {Outlet} from "react-router";
import Header from "@/layout/Header.tsx";

export default function Main() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
