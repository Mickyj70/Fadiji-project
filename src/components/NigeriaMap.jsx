// src/components/NigeriaMap.tsx
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as topojson from "topojson-client";
import nigeriaTopoJSON from "../../public/nigeria-states.json";

const NigeriaMap = ({ onStateClick, selectedState, stateData }) => {
  // Convert TopoJSON → GeoJSON
  const nigeriaGeoJSON = topojson.feature(
    nigeriaTopoJSON,
    nigeriaTopoJSON.objects.NGA_adm1 // 👈 replace with actual object name from your file
  );

  // Style function
  const style = (feature) => {
    const stateName =
      feature.properties.NAME_1 ||
      feature.properties.name ||
      feature.properties.NAME;

    const data = stateData[stateName];

    if (selectedState === stateName) {
      return {
        fillColor: "#10b981",
        weight: 2,
        color: "black",
        fillOpacity: 0.7,
      };
    }

    if (data) {
      if (data.is_relevant && data.label === "1") {
        return {
          fillColor: data.score > 0.8 ? "#ef4444" : "#f97316",
          weight: 1,
          color: "black",
          fillOpacity: 0.6,
        };
      }
    }

    return {
      fillColor: "#e5e7eb",
      weight: 1,
      color: "black",
      fillOpacity: 0.5,
    };
  };

  // Event handlers
  const onEachFeature = (feature, layer) => {
    const stateName =
      feature.properties.NAME_1 ||
      feature.properties.name ||
      feature.properties.NAME;

    layer.on({
      click: () => onStateClick && onStateClick(stateName),
    });

    if (stateData[stateName]) {
      const d = stateData[stateName];
      layer.bindTooltip(
        `<strong>${stateName}</strong><br/>
        Relevance: ${d.is_relevant ? "Yes" : "No"}<br/>
        Score: ${(d.score * 100).toFixed(1)}%<br/>
        Lassa Related: ${d.label === "1" ? "Yes" : "No"}`
      );
    } else {
      layer.bindTooltip(`<strong>${stateName}</strong><br/>Loading`);
    }
  };

  return (
    <div className="w-full h-full flex flex-col text-black dark:text-white">
      <h3 className="text-lg font-semibold mb-2">
        Nigeria Lassa Fever Surveillance Map
      </h3>

      {/* ✅ Legend Section */}
      <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-800 dark:text-white">
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded bg-red-500 inline-block"></span>
          <span>High Risk (&gt;80%)</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded bg-orange-500 inline-block"></span>
          <span>Moderate Risk (≤80%)</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded bg-gray-300 inline-block"></span>
          <span>No Data / Not Relevant</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded bg-emerald-500 inline-block"></span>
          <span>Selected State</span>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1">
        <MapContainer
          style={{ height: "450px", width: "100%", borderRadius: "0.5rem" }}
          center={[9.082, 8.6753]}
          zoom={6}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <GeoJSON
            data={nigeriaGeoJSON}
            style={style}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default NigeriaMap;
