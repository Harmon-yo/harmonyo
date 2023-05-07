import React from 'react';
import BoxWithContainer from '../../atoms/BoxWithContainer';
import Box from "@mui/material/Box"
import VantagemCard from '../../molecules/VantagemCard';
import "./style.css";

function Vantagens(props) {
    return (
        	<section id="vantagens">
                <BoxWithContainer
                    boxClassName="box-vantagens"
                    containerClassName="container-vantagens">
                    <h1 className="vantagens-title">Vantagens</h1>
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <VantagemCard src="../../../public/imgs/img-card2-home.png" className="vantagem1" title="teste" description="teste"/>
                        <VantagemCard className="vantagem2" title="teste" description="teste"/>
                        <VantagemCard className="vantagem3" title="teste" description="teste"/>
                    </Box>
                </BoxWithContainer>
            </section>
    );
}

export default Vantagens;