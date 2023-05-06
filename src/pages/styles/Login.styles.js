// xs: -> Tela Maior que 0px
// sm: -> Tela Maior que 600px
// md: -> Tela Maior que 900px
// lg: -> Tela Maior que 1200px
// xl: -> Tela Maior que 1536px

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
                height: '100vh',
                backgroundImage: 'url("/imgs/background-login-cadastro-v2.png")'
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
                    sm: '60%',
                    md: '50%',
                    lg: '40%',
                    xl: '30%'
                },
                height: {
                    xs: '55%',
                    sm: '60%',
                    md: '60%',
                    lg: '70%',
                    xl: '60%'
                }
            },
            boxFormInputs: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                width: '80%',
                height: {
                    xs: '40%',
                    sm: '45%',
                    md: '45%',
                    lg: '50%',
                    xl: '40%',
                },
            },
            btnLogin: {
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
                    sm: 'row',
                    xl: 'row'
                },
                fontSize: '16px',
                alignItems: 'center',
                width: {
                    xs: '70%',
                    sm: 'auto',
                    xl: 'auto'
                }
            }
        }
    )
}

export const useStyles = () => makeStyles();