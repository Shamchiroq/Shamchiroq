import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import Home from '../pages/Home';
import Job from '../pages/Job';
import Test from '../pages/Test/layout';
import TestHome from "../pages/Test/Home";
import Process from "../pages/Test/Process";
import Scholarship from "../pages/Scholarship";
import University from "../pages/University";
import Vacancy from "../pages/Vacancy";
import Entertainment from "../pages/Entertainment";
import Error from '../pages/Error';
import About from '../pages/About';
import ProtectedRoutes from '../components/ProtectedRoutes';

export const Router = () => {
    const [test, setTest]=useState(false);
    console.log(test)
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="scholarships" element={<Scholarship />}/>
                    <Route path="jobs" element={<Job />}/>
                    <Route path="universities" element={<University />}/>
                    <Route path="vacancies" element={<Vacancy />}/>
                    <Route path="entertainment" element={<Entertainment />}/>
                    <Route path="about" element={<About />}/>

                    <Route path="test" element={<Test />}>
                        <Route index element={<TestHome test={test} setTest={setTest}/>}/>
                        <Route path="process" element={<ProtectedRoutes test={test} element={<Process/>}/>}/>
                    </Route>
                    
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
    )
}
