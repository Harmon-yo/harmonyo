import backgroundImg from '../../../imgs/background-login-cadastro-v2.png';

const makeStyles = () => {
    return ({
        background: {
            position: 'relative',
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
        voltarContainer: {
            position: 'absolute',
            top: '0',
            left: '0',
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
        formCard: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '24px',
            width: {
                xs: '50%',
                md: '45%',
                lg: '40%',
                xl: '30%'
            },
            minHeight: {
                xs: '90%',
                md: '80%',
                lg: '75%',
                xl: '60%'
            }
        },
        formTitle: {
            marginTop: '8px',
            fontSize: 'var(--fonte-h3) !important'
        },
        formSubTitle: {
            marginTop: '8px',
            fontSize: 'var(--fonte-h6) !important'
        },
        formInputContainer: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridGap: '24px',
            width: '80%',
            minHeight: {
                xs: '90%',
                md: '90%',
                lg: '55%',
                xl: '50%'
            },
            height: 'auto',
            paddingTop: '24px',
            paddingBottom: '24px'
        },
        inputContainer: {
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
        inputForm: {
            width: '100%',
        },
        etapaContainer: {
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        btnContainer: {
            width: 0.8,
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
        },
        btnAnterior: {
            width: '45%',
            height: {
                md: '7%',
                xl: 'auto'
            },
            
        },
        btnProxima: {
            width: '45%',
            height: '100%',
            fontWeight: 'bold',
            backgroundColor: "#29c760 !important",
            color: "#fff !important",
        },
        btnCadastrar: {
            width: '100%',
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
            fontSize: '16px',
            width: {
                xs: '60%',
                sm: 'auto',
                xl: 'auto'
            },
            marginTop: '24px'
        }
    });
};

export const useStyles = () => makeStyles();