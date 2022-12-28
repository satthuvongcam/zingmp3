import { Home, Public, Login } from './pages/public';
import { Routes, Route } from 'react-router-dom';
import path from './ultis/path';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={path.PUBLIC} element={<Public />}>
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.STAR} element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
