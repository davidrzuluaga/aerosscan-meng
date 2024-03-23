import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global, css } from "@emotion/react";

import { Login, HomePage, Page404, FaceScan } from "./pages";
import { GlobalLayout, UserLayout } from "./layouts";
import { DataProvider } from "./contexts";

const GlobalStyle = css`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial;
    font-weight: 600;
  }
`;

export default function App() {
  return (
    <DataProvider>
      <Global styles={GlobalStyle} />
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<GlobalLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/face-scanner" element={<FaceScan />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
