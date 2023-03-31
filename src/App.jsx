import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        {/* algo precisa ser modificado aqui... */}
        <Outlet />
      </main>
    </div>
  );
};
