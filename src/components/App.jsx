import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Homepage } from "Pages/HomePage/Homepage";
import { AddUserPage } from "Pages/AddUserPage";

export const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage/>} />
    <Route path="add" element={<AddUserPage/>}/>
       </Route>
   </Routes>
  );
};

