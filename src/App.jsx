import { Home, Public, Login } from './pages/public';
import { Routes, Route } from 'react-router-dom';
import path from './ultis/path';
import { useEffect } from 'react';
import * as actions from './store/actions';
import { useDispatch } from 'react-redux';
import 'antd/dist/reset.css';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getHome());
    }, []);

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
