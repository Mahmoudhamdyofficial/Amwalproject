import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routsconfig';
import { useState } from 'react';
import { LanguageContextProvider } from './context/translationcontext';
import Navbar from './components/header/header';
import '../src/components/form.css'
import { NationalityContextProvider } from './context/nationalityContext';
import { DataModelContextProvider } from './context/dataModelContext';

function App() {

  const [language, setLanguage] = useState('en');
  const [nationality, setNationality] = useState('iraq'); //iraq vs notiraq
  const [Data, setData] = useState({});


  return (
    <>
      <DataModelContextProvider value={{ Data, setData }}>
        <NationalityContextProvider value={{ nationality, setNationality }}>
          <LanguageContextProvider value={{ language, setLanguage }}>
            <Navbar />
            <RouterProvider router={Router} />
          </LanguageContextProvider>
        </NationalityContextProvider>
      </DataModelContextProvider>
    </>
  )
}

export default App
