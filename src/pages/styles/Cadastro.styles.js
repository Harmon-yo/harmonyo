// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

import backgroundImg from '../../imgs/background-login-cadastro-v2.png';

const makeStyles = () => {
    
    return (
        {
            container: {
                position: 'relative',
            },
            boxVoltar: {
                display: 'flex',
                position: 'absolute',
                fontSize: {
                    xs: '16px',
                    lg: '20px',
                    xl: '20px'
                },
                margin: {
                    xs: '8px',
                    lg: '16px',
                    xl: '16px'
                }

            },

            background: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: {
                    xs: '1100px',
                    sm: '100vh',
                    lg: '100vh',
                    xl: '100vh'
                },
                backgroundImage: `url("${backgroundImg}")`
            },

            boxForm: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                backgroundColor: '#fcfcfc',
                borderRadius: '5px',
                boxShadow: '4px 5px 12px rgba(0, 0, 0, 0.25)',
                width: {
                    xs: '80%',
                    md: '85%',
                    lg: '70%',
                    xl: '60%'
                },
                height: {
                    xs: '90%',
                    md: '80%',
                    lg: '75%',
                    xl: '75%'
                }
            },

            boxFormInputs: {
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row'
                },
                alignItems: {
                    xs: 'center',
                    md: 'left',
                    lg: 'left',
                    xl: 'left'
                },
                justifyContent: 'space-around',
                width: {
                    xs: '100%',
                    md: '90%',
                    lg: '90%',
                    xl: '90%'
                },

                height: {
                    xs: '80%',
                    md: '70%',
                    lg: '70%',
                    xl: '65%'
                }
            },

            boxInputs: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: {
                    xs: '80%',
                    md: '45%',
                    lg: '45%',
                    xl: '45%',
                },
                height: {
                    xs: '50%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%',
                },
            },

            btnCadastrar: {
                width: {
                    xs: '60%',
                    md: '40%',
                    lg: '40%',
                    xl: '40%'
                },
                height: {
                    md: '7%',
                    xl: 'auto'
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
                    sm: 'row',
                    xl: 'row'
                },
                fontSize: '16px',
                alignItems: 'center',
                width: {
                    xs: '60%',
                    sm: 'auto',
                    xl: 'auto'
                }
            }
        }
    )
}

export const useStyles = () => makeStyles();