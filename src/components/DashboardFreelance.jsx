import React, { useEffect, useState } from 'react'; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FF8042', '#FF6363'];

/* ---------- Évolution de tes compétences principales ---------- */
const evolutionData = [
  { year: '2019', 'ASP.NET': 5, React: 4, Docker: 2 },
  { year: '2020', 'ASP.NET': 15, React: 10, Docker: 6 },
  { year: '2021', 'ASP.NET': 30, React: 18, Docker: 12 },
  { year: '2022', 'ASP.NET': 45, React: 28, Docker: 20 },
  { year: '2023', 'ASP.NET': 65, React: 40, Docker: 30 },
  { year: '2024', 'ASP.NET': 80, React: 55, Docker: 45 }
];

/* ---------- Répartition actuelle de ta stack technique ---------- */
const pieData = [
  { name: 'ASP.NET / C#', value: 38 },
  { name: 'React', value: 25 },
  { name: 'Docker / DevOps', value: 20 },
  { name: 'Azure & Cloud', value: 17 }
];

/* ---------- Compétences transversales (soft & meta skills) ---------- */
const radarData = [
  { subject: 'Communication', A: 88 },
  { subject: 'Résolution de problèmes', A: 92 },
  { subject: 'Architecture .NET', A: 90 },
  { subject: 'DevOps & CI/CD', A: 86 },
  { subject: 'Azure Cloud', A: 85 }
];


const DashboardFreelance = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `{
        user(login: \"bravovaldes\") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }`;

      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const json = await res.json();
      const weeks = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
      const recentWeeks = weeks.slice(-30);
      setContributions(recentWeeks);
    };

    fetchContributions();
  }, []);

  return (
    <div className="bg-white text-white min-h-screen p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {/* Évolution de vos compétences */}
      {/* Évolution de vos compétences */}
<div className="bg-neutral-900 p-3 md:p-4 rounded-xl shadow flex flex-col items-center justify-center">
  <h2 className="text-sm font-semibold mb-4 text-center">
    Évolution de mes compétences
  </h2>

  <ResponsiveContainer width="90%" height={200}>
    <LineChart data={evolutionData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis dataKey="year" stroke="#ccc" />
      {/* max 100 pour laisser un peu de marge */}
      <YAxis domain={[0, 100]} stroke="#ccc" />      
      <Tooltip />
      <Legend />

      {/* nouvelles courbes */}
      <Line type="monotone" dataKey="ASP.NET" stroke="#00C49F" strokeWidth={2} />
      <Line type="monotone" dataKey="React"   stroke="#0088FE" strokeWidth={2} />
      <Line type="monotone" dataKey="Docker"  stroke="#FF8042" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
</div>


      {/* Répartition de vos stacks */}
      <div className="bg-neutral-900 p-3 md:p-4 rounded-xl shadow flex flex-col items-center justify-center">
        <h2 className="text-sm font-semibold mb-4 text-center">Répartition de mes stacks</h2>
        <ResponsiveContainer width="90%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Compétences transversales */}
      <div className="bg-neutral-900 p-3 md:p-4 rounded-xl shadow flex flex-col items-center justify-center">
        <h2 className="text-sm font-semibold mb-4 text-center">Compétences transversales</h2>
        <ResponsiveContainer width="90%" height={220}>
          <RadarChart outerRadius={80} data={radarData}>
            <PolarGrid stroke="#444" />
            <PolarAngleAxis dataKey="subject" stroke="#ccc" />
            <Radar name="Profil" dataKey="A" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Contributions GitHub */}
      <div className="bg-neutral-900 p-3 md:p-4 rounded-xl shadow flex flex-col items-center justify-center">
        <h2 className="text-sm font-semibold mb-4 text-center">Contributions GitHub</h2>
        <div className="overflow-x-auto">
          <div className="grid grid-rows-7 grid-flow-col gap-1">
            {contributions.map((week, i) =>
              week.contributionDays.map((day, j) => (
                <div
                  key={`${i}-${j}`}
                  title={`${day.date} - ${day.contributionCount} contributions`}
                  className="rounded-sm bg-opacity-80"
                  style={{
                    backgroundColor: day.color,
                    width: window.innerWidth < 768 ? '8px' : '12px',
                    height: window.innerWidth < 768 ? '8px' : '12px'
                  }}
                ></div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFreelance;