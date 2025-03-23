import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;