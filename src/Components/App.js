import { React, Component } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../Pages/Home/Home'
import InstructionPage from '../Pages/Instruction/Instruction'
import CategoryPage from '../Pages/Category/Category'

class App extends Component {
    render() {
        return <div>
            <Navbar />
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path='/' element={<HomePage/>} exact={true} />
                        <Route path='/instruction' element={<InstructionPage/>} exact={true} />
                        <Route path='/category' element={<CategoryPage/>} exact={true} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    }
}

export default App