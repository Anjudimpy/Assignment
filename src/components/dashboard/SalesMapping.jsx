import Card from "./Card";
import CardHeader from "./CardHeader";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const countryColors = {
  840: "#F5A623", // USA
  76: "#FF4D6D", // Brazil
  156: "#7C4DFF", // China
  356: "#00A6A6", // India
  360: "#00C896", // Indonesia
  180: "#5B8DEF", // DR Congo
};

function SalesMapping() {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-3">
      <CardHeader title="Sales Mapping by Country" />

      <div className="rounded-xl bg-page-bg">
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{
            scale: 155,
          }}
          style={{
            width: "100%",
            height: "220px",
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const id = Number(geo.id);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={countryColors[id] || "#E8E8E8"}
                    stroke="#FFFFFF"
                    strokeWidth={0.4}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        fill: countryColors[id] || "#D1D5DB",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </Card>
  );
}

export default SalesMapping;