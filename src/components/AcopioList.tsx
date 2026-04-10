import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrección para los iconos de Leaflet en React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Cambio de 'let' a 'const' para seguir las mejores prácticas de clean code
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Datos de ejemplo basados en los puntos críticos de la CDMX mencionados en el proyecto
const centrosAcopio = [
  { id: 1, nombre: "Punto EcoRuta - Centro Histórico", lat: 19.4326, lng: -99.1332 },
  { id: 2, nombre: "Punto EcoRuta - PILARES", lat: 19.4194, lng: -99.1473 },
];

function AcopioList() {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <div className="bg-green-600 p-3 text-white font-bold">Puntos de Acopio Cercanos</div>
      <div style={{ height: '300px', width: '100%' }}>
        <MapContainer center={[19.4326, -99.1332]} zoom={13} scrollWheelZoom={false} style={{ height: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {centrosAcopio.map(centro => (
            <Marker key={centro.id} position={[centro.lat, centro.lng]}>
              <Popup>
                <strong>{centro.nombre}</strong><br />
                Punto oficial de la red EcoRuta.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default AcopioList;