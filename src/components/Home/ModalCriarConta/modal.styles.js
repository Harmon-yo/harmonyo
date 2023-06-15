
const makeStyles = () => {

  return (
    {
      background: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '70%',
        bgcolor: "rgba(255, 255, 255, 0.73)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.9px)",
        webkitBackdropFilter: "blur(6.9px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "8px",
        outline: "none !important",
      },

      titulo: {
        fontWeight: '700',
        marginBottom: 'calc(var(--espaco-padrao) * 2)',
      },

      subtitulo: {
        fontWeight: '500',
        marginBottom: 'calc(var(--espaco-padrao) * 5)',
      },

      boxCards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: '40%',
        marginBottom: 'calc(var(--espaco-padrao) * 5)',
      },

      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '50%',
        height: '100%',
        p: 'var(--espaco-padrao)',
        background: '#FFFFFF',
        border: '2px solid #1DB954',
        boxShadow: '4px 2px 10px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px'
      },

      tituloCard: {
        fontWeight: 800,
        textTransform: 'none',
        color: '#1DB954'
      },

      subtituloCard: {
        fontWeight: 500,
        textTransform: 'none',
        color: 'var(--dark-font)'
      },

      ouText: {
        fontWeight: 'bolder',
        margin: '0 calc(var(--espaco-padrao) * 5) 0 calc(var(--espaco-padrao) * 5)',
      },

      loginTexto: {
        color: 'var(--dark-font)',
        display: 'flex'
      },

      loginLink: {
        color: 'var(--link-font) !important',
        fontWeight: 'bolder',
        marginLeft: 'calc(var(--espaco-padrao) * 1)',
      }
    })
}

export const useStyles = () => makeStyles();