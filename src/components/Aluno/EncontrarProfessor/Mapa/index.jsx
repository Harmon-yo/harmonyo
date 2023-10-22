import React from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import userIcon from '../../../../imgs/user-map-marker.png';
import "./style.css";

const iconPerson = new L.Icon({
    iconUrl: userIcon,
    iconRetinaUrl: userIcon,
    iconSize: new L.Point(60, 60),
    className: 'leaflet-div-icon'
});

const userLocation = {
    lat: -23.5580209,
    lng: -46.6616788
}

function Mapa() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<div>
        <Button onClick={handleOpen}>
            <MapIcon />
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="mapa-modal-titulo"
            aria-describedby="mapa-modal-descricao">
            <Box className="modal-container">
                <Typography className="modal-container-title" variant="h5">
                    Professores próximos
                </Typography>
                <Box className="modal-map-container">

                    <MapContainer id="map" center={[userLocation.lat, userLocation.lng]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-23.5580209, -46.6616788]} icon={iconPerson}>
                            <Popup>
                                Você está aqui!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Box>
            </Box>
        </Modal>
    </div>)
}

export default Mapa;