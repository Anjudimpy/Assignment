import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import Card from "./Card";
import CardHeader from "./CardHeader";

const data = [
  { name: "Jan", services: 40, volume: 35 },
  { name: "Feb", services: 45, volume: 40 },
  { name: "Mar", services: 18, volume: 42 },
  { name: "Apr", services: 20, volume: 33 },
  { name: "May", services: 18, volume: 25 },
  { name: "Jun", services: 28, volume: 18 },
];

function VolumeVsService() {
  return (
    <Card className="col-span-12 md:col-span-6 lg:col-span-3">
      <CardHeader title="Volume vs Service Level" />

      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap="45%"
          >
            <XAxis hide />
            <YAxis hide />
            <Tooltip cursor={false} />

            <Bar
              dataKey="services"
              stackId="a"
              fill="#25D998"
              radius={[0, 0, 4, 4]}
              barSize={10}
            />

            <Bar
              dataKey="volume"
              stackId="a"
              fill="#2F80ED"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "18px",
              }}
              formatter={(value) => {
                if (value === "volume")
                  return (
                    <span style={{ color: "#64748B" }}>
                      Volume
                      <br />
                      <strong style={{ color: "#0F172A" }}>1,135</strong>
                    </span>
                  );

                return (
                  <span style={{ color: "#64748B" }}>
                    Services
                    <br />
                    <strong style={{ color: "#0F172A" }}>635</strong>
                  </span>
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default VolumeVsService;