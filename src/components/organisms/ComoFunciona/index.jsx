import React from "react";
import BoxWithContainer from "../../atoms/BoxWithContainer";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import wave from "../../../imgs/wave-como-funciona.png"
import Card from "../../atoms/Card";
import UserIcon from "../../../imgs/Icon-usuario-como-funciona.png"
import "./style.css"

function ComoFunciona(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (evento, novoValor) => {
        setValue(novoValor)
    };

    function getTabProps(index) {
        return {
            id: `simple-tab-${index}`,
            className: "dashboard-professor-tabs-item",
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <section className="section-como-funciona">
            <BoxWithContainer
                boxClassName="como-funciona-box"
                containerClassName="como-funciona-container">
                    <Typography className="title como-funciona-titulo">Como funciona</Typography>                   

                    <Box className="como-funciona-cards">

                    <Tabs value={value} onChange={handleChange} aria-label="tabs" className="dashboard-professor-tabs">
                        <Tab label="Aluno" {...getTabProps(0)} className="tabs-como-funciona-label"/>
                        <Tab label="Professor" {...getTabProps(1)} className="tabs-como-funciona-label"/>
                    </Tabs>

                    <Box className= "box-cards">

                        <Card className="card-como-funciona">
                            <img src={UserIcon} alt="" className="icon-usuario"/>
                            <Box>
                            <Typography className="card-titulo">
                                Cadastro           
                            </Typography>

                            <Typography className="card-texto">
                                Realize seu cadastro como aluno
                            </Typography>
                            </Box>
                        </Card>

                        <Card className="card-como-funciona">
                            <img src={UserIcon} alt="" className="icon-usuario"/>
                            <Box>
                            <Typography className="card-titulo">
                                Cadastro           
                            </Typography>

                            <Typography className="card-texto">
                                Realize seu cadastro como aluno
                            </Typography>
                            </Box>
                        </Card>

                        <Card className="card-como-funciona">
                            <img src={UserIcon} alt="" className="icon-usuario"/>
                            <Box>
                            <Typography className="card-titulo">
                                Cadastro           
                            </Typography>

                            <Typography className="card-texto">
                                Realize seu cadastro como aluno
                            </Typography>
                            </Box>
                        </Card>

                        <Card className="card-como-funciona">
                            <img src={UserIcon} alt="" className="icon-usuario"/>
                            <Box>
                            <Typography className="card-titulo">
                                Cadastro           
                            </Typography>

                            <Typography className="card-texto">
                                Realize seu cadastro como aluno
                            </Typography>
                            </Box>
                        </Card>

                    </Box>
                </Box>
                    
                    
            </BoxWithContainer>
            <img src={wave} className="wave-como-funciona-img" />
        </section>
    );
}

export default ComoFunciona;