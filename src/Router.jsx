/**
 * Cadastre as rotas da sua aplicação!
 * Lembrando: a estrutura do objeto que configura a rota é a seguinte:
 *
 * {
 *   path: "/caminho-da-rota",
 *   element: <ComponenteDaRota />,
 * }
 */

import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home";
import {QuemSou} from "./pages/QuemSou";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //  as rotas serão incluídas aqui!
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quem-sou",
        element: <QuemSou />,
      },
    ],
  },
]);
