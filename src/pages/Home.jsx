import React from "react";
import Navbar from "../components/Home/Navbar/Main/index.jsx"
import Hero from "../components/Home/Hero/index.jsx";
import Vantagens from "../components/Home/Vantagens/Main/index.jsx";
import ComoFunciona from "../components/Home/ComoFunciona/index.jsx";
import Duvidas from "../components/Home/Duvidas/Main/index.jsx";
import Footer from "../components/Home/Footer/Main/index.jsx";
import ModalCriarConta from "../components/Home/ModalCriarConta/index.jsx"
import { useState } from 'react';
import VLibras from "@djpfs/react-vlibras";

function Index() {

    const [open, setOpen] = useState(false);
    const abrirModalCriarConta = () => setOpen(true);
    const fecharModalCriarConta = () => setOpen(false);

    return (
        <>
            <Navbar onClickCadastro={abrirModalCriarConta} />
            <ModalCriarConta open={open} closeModal={fecharModalCriarConta} />
            <Hero onClickCriarConta={abrirModalCriarConta} />
            {/* <Estatisticas/> */}
            <Vantagens />
            <ComoFunciona />
            <Duvidas />
            <Footer />
        </>
    )

}

export default Index;