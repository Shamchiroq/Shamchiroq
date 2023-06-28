import React, { Suspense } from 'react';
import { Loader } from '../components/Loader';
import { Router } from '../router';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "../utils/history.js";

export default function App() {
    return (
        <HistoryRouter history={history}>
            <Suspense fallback={<Loader />}>
                <>
                    <Router />
                </>
            </Suspense>
        </HistoryRouter>
    )
}
