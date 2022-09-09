import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav><img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazypage1" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazypage2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazypage3" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                        </li>
                    </ul></nav>
                <Routes>
                    <Route path="lazypage1" element={<LazyPage1 />} />
                    <Route path="lazypage2" element={<LazyPage2 />} />
                    <Route path="lazypage3" element={<LazyPage3 />} />
                    <Route path="/*" element={<Navigate to="/lazypage1" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
