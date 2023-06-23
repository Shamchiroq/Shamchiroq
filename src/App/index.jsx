import React, { Suspense } from 'react';
import { Loader } from '../components/Loader';
import { Router } from '../router';

export default function App() {
    return (
            <Suspense fallback={<Loader />}>
                <>
                <Router/>
                </>
            </Suspense>
    )
}
