import React, {useEffect, useState} from "react";
import Header from "./component/Header";
import './App.css'
import Index from "./component/Body/Index";
import Footer from "./component/Footer";
import {db} from './firebaseConfig'

function App() {
    const [lang, setLang] = useState('eng')
    const [dataLang, setDataLang] = useState(null)

    console.log('lang', lang);
    console.log('dataLang', dataLang);

    useEffect(() => {
        getUserDoc()
    }, [lang])

    const getUserDoc = async () => {
        const userRef = db.collection("Languages").doc(lang)
        const snapshot = await userRef.get()
        if (!snapshot.exists)
            return console.log('No data lang found')
        setDataLang({...snapshot.data(), id: snapshot.id})
    }

    return (
        <div>
            <Header
                lang={lang}
                setLang={setLang}
            />
            <Index
                dataLang={dataLang}
            />
            <Footer/>
        </div>
    );
}

export default App;