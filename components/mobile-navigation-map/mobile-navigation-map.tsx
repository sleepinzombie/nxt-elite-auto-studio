"use client";

import { Circle, MapContainer, TileLayer } from "react-leaflet";

const brussels: [number, number] = [50.8503, 4.3517];

const MobileNavigationMap = () => <MapContainer attributionControl center={brussels} className="mobile-navigation-map" dragging={false} keyboard={false} scrollWheelZoom={false} touchZoom={false} zoom={8} zoomControl={false}><TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /><Circle center={brussels} pathOptions={{ color: "var(--color-gold)", fillColor: "var(--color-gold)", fillOpacity: .14, weight: 1 }} radius={65000} /></MapContainer>;

export default MobileNavigationMap;
