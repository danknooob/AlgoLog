import React from 'react'

export default function Dashboard() {
  return (
   <>
   <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Total Questions</h2>
          <p className="text-3xl font-bold">250</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Total Submissions</h2>
          <p className="text-3xl font-bold">500</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Streak</h2>
          <p className="text-3xl font-bold">30 days</p>
        </div>
      </div>
      {/* Chart */}
      <div className="mt-10 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Problems Solved On Gfg</h2>
        <p className="text-3xl font-bold">500</p>
        {/* Include your chart component here */}
        {/* Example: <Chart data={chartData} /> */}
      </div>
      <div className="mt-10 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Problems Solved On Leetcode</h2>
        <p className="text-3xl font-bold">500</p>
        {/* Include your chart component here */}
        {/* Example: <Chart data={chartData} /> */}
      </div>
      <div className="mt-10 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Problems Solved On Codechef</h2>
        <p className="text-3xl font-bold">500</p>
        {/* Include your chart component here */}
        {/* Example: <Chart data={chartData} /> */}
      </div>
      <div className="mt-10 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Problems Solved On Codeforces</h2>
        <p className="text-3xl font-bold">500</p>
        {/* Include your chart component here */}
        {/* Example: <Chart data={chartData} /> */}
      </div>
    </div>
   </>
  )
}
