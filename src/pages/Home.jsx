import React from "react";
import Navbar from '../components/Navbar';
import './css/index.css'
import Wave from './Wave.svg'
import Botao from "../components/Botao";
import Card from "../components/Card";
import InputText from "../components/InputText";
import TextArea from "../components/TextArea";
import ContatoIconText from "../components/ContatoIconText";
import Footer from "../components/Footer";

function Index() {

    const titulosCard = ["Pagamento Seguro",
     "Chat entre professor e aluno",
      "Empréstimo de instrumento por parte do professor"]

    const textosCard = [
        "Com nossa plataforma segura e confiável, concentre-se no aprendizado, enquanto cuidamos da segurança do seu pagamento. Nós garantimos um processo de pagamento transparente e protegido, para que tenha tranquilidade ao investir em sua educação musical",
        "Com nosso recurso de chat integrado, você pode se comunicar facilmente com seu professor de música em tempo real. Tire dúvidas, receba feedback e obtenha orientação personalizada para maximizar sua aprendizagem musical.",
        "Além de fornecer as melhores lições de música, nossos professores também podem ajudá-lo a dar os primeiros passos no mundo musical, oferecendo instrumentos para empréstimo. Experimente diferentes instrumentos e encontre o que é certo para você, sem gastar uma fortuna em um novo instrumento."
    ]

    return (
        <>
            <Navbar  class = ""/>
            <div className="container-inicio">
                <div className="container-inicio-itens">
                    <div className="container-inicio-itens-titulo">
                        <label>Descubra sua harmonia com a música</label>
                    </div>
                    <div className="container-inicio-itens-paragrafo">
                        <p>Quer seja um novato ou um músico experiente, nossa plataforma
                            conecta você com os melhores professores de música da nossa
                            plataforma para desbloquear todo o seu potencial musical.</p>
                    </div>
                    <Botao texto = "Começar" classButton ="container-inicio-itens-btn-comecar"/>
                </div>
                <img src={Wave} alt="" />
            </div>
            <div className="container">
                <div className="container-como-funciona">
                    <div className="container-como-funciona-parte1">
                        <div className="container-como-funciona-textos">
                            <label>Como Funciona ?</label>
                            <p>
                                Com nossa plataforma fácil de usar, encontrar um professor de música qualificado nunca foi tão simples. 
                                Conectamos você com professores apaixonados e experientes que compartilham sua paixão pela música, 
                                tornando o aprendizado de um instrumento divertido e inspirador.
                            </p>
                        </div>
                    </div>
                    <div className="container-como-funciona-cards">
                        <Card imagem = "/imgs/img-card1-home.png"  classImage = "img-card1" titulo = {titulosCard[0]} texto = {textosCard[0]}/>
                        <Card imagem = "/imgs/img-card2-home.png" classImage = "img-card2" titulo = {titulosCard[1]} texto = {textosCard[1]}/>
                        <Card titulo = {titulosCard[2]} texto = {textosCard[2]}/>
                    </div>
                </div>
            </div>
            <div className="container-duvidas">
                <form className="form-duvidas">
                    <label>Dúvidas</label>
                    <InputText type = "text" placeholder = "Seu Nome" classInput = "ipt-form-duvida"/>
                    <InputText type = "email" placeholder = "Seu Email" classInput = "ipt-form-duvida"/>
                    <TextArea placeholder = "Digite sua dúvida aqui" maxChar = {150} classTextArea = "txt-area-form-duvida"/>
                    <Botao texto = "Enviar" classButton ="btn-enviar-form-duvida"/>
                </form>
                <div className="box-contato-duvidas">
                    <div className="box-contato-info-duvidas">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2862325309393!2d-46.664112923846574!3d-23.55816126147631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2a5270055%3A0x3c7ea4f4c7d51fb6!2sRua%20Haddock%20Lobo%2C%20595%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001414-001!5e0!3m2!1spt-BR!2sbr!4v1681590543178!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                        
                        <ContatoIconText    classContatoIconeText = "icone-texto-contato" 
                                            enderecoIcone = "/imgs/Localização-Icon.svg" 
                                            textoContato = "Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001"
                        />

                        <ContatoIconText    classContatoIconeText = "icone-texto-contato" 
                                            enderecoIcone = "/imgs/Telefone-icon.svg" 
                                            textoContato = "+ 55 (11) 94002-8922"
                        />

                        <ContatoIconText    classContatoIconeText = "icone-texto-contato" 
                                            enderecoIcone = "/imgs/Email-icon.svg" 
                                            textoContato = "contato@harmonyo.com"
                        />
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )

}

export default Index;