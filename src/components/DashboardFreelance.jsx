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

const evolutionData = [
  { year: '2019', React: 5, 'Spring Boot': 3, Firebase: 2 },
  { year: '2020', React: 15, 'Spring Boot': 10, Firebase: 6 },
  { year: '2021', React: 25, 'Spring Boot': 20, Firebase: 14 },
  { year: '2022', React: 40, 'Spring Boot': 30, Firebase: 20 },
  { year: '2023', React: 60, 'Spring Boot': 45, Firebase: 30 },
  { year: '2024', React: 80, 'Spring Boot': 65, Firebase: 45 }
];

const pieData = [
  { name: 'React', value: 35 },
  { name: 'Spring Boot', value: 30 },
  { name: 'Docker', value: 20 },
  { name: 'Firebase', value: 15 }
];

const radarData = [
  { subject: 'Communication', A: 85 },
  { subject: 'Résolution de problèmes', A: 90 },
  { subject: 'DevSecOps', A: 75 },
  { subject: 'Design UI/UX', A: 70 },
  { subject: 'Logique Frontend', A: 80 }
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
      <div className="bg-neutral-900 p-3 md:p-4 rounded-xl shadow flex flex-col items-center justify-center">
        <h2 className="text-sm font-semibold mb-4 text-center">Évolution de vos compétences</h2>
        <ResponsiveContainer width="90%" height={200}>
          <LineChart data={evolutionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="year" stroke="#ccc" />
            <YAxis domain={[0, 80]} stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="React" stroke="#0088FE" strokeWidth={2} />
            <Line type="monotone" dataKey="Spring Boot" stroke="#00C49F" strokeWidth={2} />
            <Line type="monotone" dataKey="Firebase" stroke="#FF8042" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Répartition de vos stacks */}
      <div className="bg-neutral-900 p-3 md:p-4 rounded-xl shadow flex flex-col items-center justify-center">
        <h2 className="text-sm font-semibold mb-4 text-center">Répartition de vos stacks</h2>
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