import { createBrowserRouter } from 'react-router-dom';
import Applayout from './components/applayout/applayout';
import Formone from './components/formone';
import Form2 from './components/form2';
import Form3 from './components/form3';
import Form4 from './components/form4';
import Form5 from './components/form5';
import Form6 from './components/form6';
import Form7 from './components/form7';
import Form8 from './components/form8';
import Form9 from './components/form9';
export const Router = createBrowserRouter([
    {
        path: '/', element: <Applayout />,
        children: [
            { index: true, element: <Formone /> },
            { path: '/form2', element: <Form2 /> },
            { path: '/form3', element: <Form3 /> },
            { path: '/form4', element: <Form4 /> },
            { path: '/form5', element: <Form5 /> },
            { path: '/form6', element: <Form6 /> },
            { path: '/form7', element: <Form7 /> },
            { path: '/form8', element: <Form8 /> },
            { path: '/form9', element: <Form9 /> },





        ]
    },
]);