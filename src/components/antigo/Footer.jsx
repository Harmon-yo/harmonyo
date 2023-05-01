import React from "react";
import "./css/footer.css"
import CardFooter from "./CardFooter";

function FooterHarmonyo(props) {

    return (
        <>
            <footer className="footer">
                <div className="footer-info">
                    <CardFooter titulo = "Empresa" classCardFooter = "card-footer-empresa">
                        <label>Sobre</label>
                        <label>Diretrizes</label>
                        <label>Termos de Politicas e Privacidade</label>
                    </CardFooter>
                    <CardFooter titulo = "Mídias Sociais" classCardFooter = "card-footer-midias-sociais">
                        <div className="card-footer-midias-sociais-icons">
                            <img src="/imgs/linkedin32px-icon.png" alt="" />
                            <img src="/imgs/facebook32px-icon.png" alt="" />
                            <img src="/imgs/instagram32px-icon.png" alt="" />
                            <img src="/imgs/whatsapp32px-icon.png" alt="" />
                        </div>
                    </CardFooter>
                </div>
                <div className="footer-direitos-reservados">
                    Copyright © 2023, Harmonyo. Todos os direitos reservados. Desenvolvido por Harmonyo Inc.
                </div>

            </footer>
        </>
    );
    
}

export default FooterHarmonyo;