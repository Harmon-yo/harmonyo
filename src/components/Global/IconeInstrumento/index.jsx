import React from "react";
import AgogoIcon from "../../../imgs/instrumentos/agogo.png";
import BandolimIcon from "../../../imgs/instrumentos/bandolim.png";
import BanjoIcon from "../../../imgs/instrumentos/banjo.png";
import BateriaIcon from "../../../imgs/instrumentos/bateria.png";
import BerimbauDeBocaIcon from "../../../imgs/instrumentos/berimbau-de-boca.png";
import BongoIcon from "../../../imgs/instrumentos/bongo.png";
import CaixaIcon from "../../../imgs/instrumentos/caixa.png";
import CajonIcon from "../../../imgs/instrumentos/cajon.png";
import CavaquinhoIcon from "../../../imgs/instrumentos/cavaquinho.png";
import CaxixiIcon from "../../../imgs/instrumentos/caxixi.png";
import ChocalhosIcon from "../../../imgs/instrumentos/chocalhos.png";
import ClarineteIcon from "../../../imgs/instrumentos/clarinete.png";
import CongaIcon from "../../../imgs/instrumentos/conga.png";
import ContrabaixoIcon from "../../../imgs/instrumentos/contrabaixo.png";
import ContrafagoteIcon from "../../../imgs/instrumentos/contrafagote.png";
import CorneInglesIcon from "../../../imgs/instrumentos/corne-ingles.png";
import CowbellIcon from "../../../imgs/instrumentos/cowbell.png";
import CuicaIcon from "../../../imgs/instrumentos/cuica.png";
import DjembeIcon from "../../../imgs/instrumentos/djembe.png";
import FagoteIcon from "../../../imgs/instrumentos/fagote.png";
import FlautaIcon from "../../../imgs/instrumentos/flauta.png";
import FlautimIcon from "../../../imgs/instrumentos/flautim.png";
import GuanzaIcon from "../../../imgs/instrumentos/ganza.png";
import GuitarraIcon from "../../../imgs/instrumentos/guitarra.png";
import KalimbaIcon from "../../../imgs/instrumentos/kalimba.png";
import MandolinIcon from "../../../imgs/instrumentos/mandolin.png";
import MaracasIcon from "../../../imgs/instrumentos/maracas.png";
import MarimbaIcon from "../../../imgs/instrumentos/marimba.png";
import OboeIcon from "../../../imgs/instrumentos/oboe.png";
import PandeiroIcon from "../../../imgs/instrumentos/pandeiro.png";
import PianoIcon from "../../../imgs/instrumentos/piano.png";
import RabecaIcon from "../../../imgs/instrumentos/rabeca.png";
import SaxofoneIcon from "../../../imgs/instrumentos/saxofone.png";
import SurdoIcon from "../../../imgs/instrumentos/surdo.png";
import TamborIcon from "../../../imgs/instrumentos/tambor.png";
import TamborimIcon from "../../../imgs/instrumentos/tamborim.png";
import TecladoIcon from "../../../imgs/instrumentos/teclado.png";
import TimbalesIcon from "../../../imgs/instrumentos/timbales.png";
import TimpanosIcon from "../../../imgs/instrumentos/timpanos.png";
import TrianguloIcon from "../../../imgs/instrumentos/triangulo.png";
import TromboneIcon from "../../../imgs/instrumentos/trombone.png";
import TrompaIcon from "../../../imgs/instrumentos/trompa.png";
import TrompeteIcon from "../../../imgs/instrumentos/trompete.png";
import TubaIcon from "../../../imgs/instrumentos/tuba.png";
import UkeleleIcon from "../../../imgs/instrumentos/ukelele.png";
import ViolaIcon from "../../../imgs/instrumentos/viola.png";
import ViolaoIcon from "../../../imgs/instrumentos/violao.png";
import ViolinoIcon from "../../../imgs/instrumentos/violino.png";
import XilofoneIcon from "../../../imgs/instrumentos/xilofone.png";
import Branco from "../../../imgs/instrumentos/branco.png";

function IconeInstrumento(props) {

    console.log(props.instrumentoState);

    var instrumento = "";
    var tamanho = props.tamanhoIcone;

    switch (props.instrumentoState) {
        //     // /instrumentos possiveis agogo, bandolim, banjo, bateria, berimbau-de-boca, bongo, caixa, cajon, cavaquinho, 
        //     // caxixi, chocalhos, clarinete, conga, contrabaixo, contrafagote, corne-ingles, cowbell, cuica, djembe, fagote, 
        //     // flauta, flautim, ganza, graves, kalimba, mandolin, maracas, marimba, oboe, pandeiro, piano, rabeca, saxofone, 
        //     // surdo, tambor, tamborim, teclado, timbales, timpanos, triangulo, trombone, trompa, trompete, tuba, ukelele, 
        //     // viola, violao, violino, xilofone
        case "Agogo":
            instrumento = AgogoIcon;
            break;
        case "Bandolim":
            instrumento = BandolimIcon;
            break;
        case "Banjo":
            instrumento = BanjoIcon;
            break;
        case "Bateria":
            instrumento = BateriaIcon;
            break;
        case "Berimbau de boca":
            instrumento = BerimbauDeBocaIcon;
            break;
        case "Bongo":
            instrumento = BongoIcon;
            break;
        case "Caixa":
            instrumento = CaixaIcon;
            break;
        case "Cajon":
            instrumento = CajonIcon;
            break;
        case "Cavaquinho":
            instrumento = CavaquinhoIcon;
            break;
        case "Caxixi":
            instrumento = CaxixiIcon;
            break;
        case "Chocalhos":
            instrumento = ChocalhosIcon;
            break;
        case "Clarinete":
            instrumento = ClarineteIcon;
            break;
        case "Conga":
            instrumento = CongaIcon;
            break;
        case "Contrabaixo":
            instrumento = ContrabaixoIcon;
            break;
        case "Contrafagote":
            instrumento = ContrafagoteIcon;
            break;
        case "Corne Inglês":
            instrumento = CorneInglesIcon;
            break;
        case "Cowbell":
            instrumento = CowbellIcon;
            break;
        case "Cuíca":
            instrumento = CuicaIcon;
            break;
        case "Djembe":
            instrumento = DjembeIcon;
            break;
        case "Fagote":
            instrumento = FagoteIcon;
            break;
        case "Flauta":
            instrumento = FlautaIcon;
            break;
        case "Flautim":
            instrumento = FlautimIcon;
            break;
        case "Ganza":
            instrumento = GuanzaIcon;
            break;
        case "Guitarra":
            instrumento = GuitarraIcon;
            break;
        case "Kalimba":
            instrumento = KalimbaIcon;
            break;
        case "Mandolin":
            instrumento = MandolinIcon;
            break;
        case "Maracas":
            instrumento = MaracasIcon;
            break;
        case "Marimba":
            instrumento = MarimbaIcon;
            break;
        case "Oboé":
            instrumento = OboeIcon;
            break;
        case "Pandeiro":
            instrumento = PandeiroIcon;
            break;
        case "Piano":
            instrumento = PianoIcon;
            break;
        case "Rabeca":
            instrumento = RabecaIcon;
            break;
        case "Saxofone":
            instrumento = SaxofoneIcon;
            break;
        case "Surdo":
            instrumento = SurdoIcon;
            break;
        case "Tambor":
            instrumento = TamborIcon;
            break;
        case "Tamborim":
            instrumento = TamborimIcon;
            break;
        case "Teclado":
            instrumento = TecladoIcon;
            break;
        case "Timbales":
            instrumento = TimbalesIcon;
            break;
        case "Tímpanos":
            instrumento = TimpanosIcon;
            break;
        case "Triângulo":
            instrumento = TrianguloIcon;
            break;
        case "Trombone":
            instrumento = TromboneIcon;
            break;
        case "Trompa":
            instrumento = TrompaIcon;
            break;
        case "Trompete":
            instrumento = TrompeteIcon;
            break;
        case "Tuba":
            instrumento = TubaIcon;
            break;
        case "Ukelele":
            instrumento = UkeleleIcon;
            break;
        case "Viola":
            instrumento = ViolaIcon;
            break;
        case "Violão":
            instrumento = ViolaoIcon;
            break;
        case "Violino":
            instrumento = ViolinoIcon;
            break;
        case "Xilofone":
            instrumento = XilofoneIcon;
            break;
        default:
            instrumento = Branco;
            break;
        }

    console.log(instrumento);
    
    return (
        <img src={instrumento} alt="Instrumento" width={tamanho} height={tamanho} />
    );
}

export default IconeInstrumento;