import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskPage from "./page/todoTask";
import SignIn from "./page/login";


const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/tasks" element={<TaskPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
