import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./Chart.scss"

const data = [
  { name: 'Jan', Total: 200, },
  { name: 'Feb', Total: 210, },
  { name: 'Mar', Total: 290, },
  { name: 'Apr', Total: 200, },
  { name: 'May', Total: 218, },
  { name: 'June', Total: 250, },
];

function Chart() {
  return (
    // <div>
      <div className="chart">
        <ResponsiveContainer width="100%" className="diagram">
          <AreaChart
            // width={100}
            // height={250}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" className="chartGrid" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      // <p>Last 6 months (Revenue)</p> 
    // </div> 
  )
}

export default Chart