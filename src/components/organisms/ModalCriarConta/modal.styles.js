
const makeStyles = () => {

    return (
        {
            background: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                position: 'absolute',
                alignItems: 'center',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70%',
                height: '70%',
                bgcolor: 'white',
                border: '1px solid #000',
                boxShadow: 24,
              },

              titulo: {
                fontWeight: 'bolder',
                fontSize: '50px'
              },

              subtitulo: {
                fontSize: '24px'
              },

              boxCards: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '60%',
                height: '40%',
              },

              card: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                width: '41%',
                height:'100%',
                p: '2%',
                background: '#FFFFFF',
                border: '2px solid #1DB954',
                boxShadow: '4px 2px 10px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '10px'
              },

              tituloCard: {
                fontWeight: 'bolder',
                fontSize: '32px',
                textTransform: 'none',
                color: '#1DB954'
              },

              subtituloCard: {
                fontWeight: 'bolder',
                fontSize: '24px',
                textTransform: 'none',
                color: '#848484'
              },
        })
}

export const useStyles = () => makeStyles();