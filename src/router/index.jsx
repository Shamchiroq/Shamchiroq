import React from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import Home from '../pages/Home';
import Job from '../pages/Job';
import Test from '../pages/Test/layout';
import TestHome from "../pages/Test/Home";
import Process from "../pages/Test/Process";
import Result from "../pages/Test/Result";
import Scholarship from "../pages/Scholarship";
import University from "../pages/University";
import Vacancy from "../pages/Vacancy";
import Entertainment from "../pages/Entertainment";
import Error from '../pages/Error';
import About from '../pages/About';

export const Router = () => {
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
                        <Route index element={<TestHome/>}/>
                        <Route path="process" element={<Process/>}/>
                    </Route>

                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
    )
}
