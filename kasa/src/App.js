import './App.css';
import { HashRouter, Routes, Route, } from "react-router-dom";

import Home from './pages/Home/Home';
import APropos from "./pages/A-Propos/A-propos";
import Layout from './components/layout'

function App() {
    return (
        <div className="App">
            <main>
                <HashRouter>
                    <Layout>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="/Home" element={<Home/>}/>
                            <Route path="/A-Propos" element={<APropos/>}/>
                        </Routes>
                    </Layout>
                </HashRouter>
            </main>
        </div>
    );
}

export default App;