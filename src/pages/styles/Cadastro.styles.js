import { Box } from "@mui/material";

// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1500px

const makeStyles = () => {
    
    return (
        {
            boxVoltar: {
                display: 'flex',
                position: 'absolute',
                flexDirection: 'row',
                height: {
                    xs: '45px',
                    lg: '60px',
                    xl: '60px'
                },
                width: '100%',
                alignItems: 'center',
                paddingLeft: '5%',
                fontSize: {
                    xs: '16px',
                    lg: '20px',
                    xl: '20px'
                },

            },

            background: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: {
                    xs: '1000px',
                    sm: '100vh',
                    lg: '100vh',
                    xl: '100vh'
                },
                backgroundImage: 'url("/imgs/background-login-cadastro-v2.png")'
            },

            boxForm: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: '#fcfcfc',
                borderRadius: '5px',
                boxShadow: '4px 5px 12px rgba(0, 0, 0, 0.25)',
                width: {
                    xs: '80%',
                    lg: '70%',
                    xl: '60%'
                },
                height: {
                    xs: '90%',
                    lg: '70%',
                    xl: '70%'
                }
            },

            boxFormInputs: {
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    lg: 'row',
                    xl: 'row'
                },
                alignItems: {
                    xs: 'center',
                    lg: 'left',
                    xl: 'left'
                },
                justifyContent: 'space-around',
                width: {
                    xs: '100%',
                    lg: '90%',
                    xl: '90%'
                },

                height: {
                    xs: '80%',
                    lg: '70%',
                    xl: '70%'
                }
            },

            boxInputs: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: {
                    xs: '80%',
                    lg: '45%',
                    xl: '45%',
                },
                height: {
                    xs: '50%',
                    lg: '100%',
                    xl: '100%',
                },
            },

            btnCadastrar: {
                width: {
                    xs: '60%',
                    lg: '40%',
                    xl: '40%'
                },
                backgroundColor: "#29c760 !important",
                color: "#fff !important",
                fontWeight: 'bold',
                fontSize: '16px'
            },

            txtPossuiConta: {
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    lg: 'row',
                    xl: 'row'
                },
                fontSize: {
                    xs: '16px',
                    lg: '20px',
                    xl: '20px',
                },
                alignItems: 'center',
                width: {
                    xs: '60%',
                    lg: 'auto',
                    xl: 'auto'
                }
            }
        }
    )
}

export const useStyles = () => makeStyles();