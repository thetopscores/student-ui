import { Card, CardContent, CardHeader } from "../../components/ui/card";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex">
      {/* Left Section: Main Dashboard */}
      <div className="w-3/4 p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Mathletics</h1>

        <div className="space-y-6">
          {/* Activities Section */}
          <Card className="bg-orange-100 shadow-md">
            <CardHeader>
              <h2 className="text-xl font-bold text-orange-700">Activities</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Explore and complete new activities!
              </p>
            </CardContent>
          </Card>

          {/* Challenges Section */}
          <Card className="bg-green-100 shadow-md">
            <CardHeader>
              <h2 className="text-xl font-bold text-green-700">Challenges</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Take on exciting challenges to earn rewards.
              </p>
            </CardContent>
          </Card>

          {/* Skill Quests Section */}
          <Card className="bg-yellow-100 shadow-md">
            <CardHeader>
              <h2 className="text-xl font-bold text-yellow-700">
                Skill Quests
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Sharpen your skills with quests.</p>
            </CardContent>
          </Card>

          {/* Assessments Section */}
          <Card className="bg-blue-100 shadow-md">
            <CardHeader>
              <h2 className="text-xl font-bold text-blue-700">Assessments</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Check your knowledge with assessments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Section: Profile Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6">
        <div className="text-center">
          <img
            src="/image/avatar/boy-1.jpg"
            alt="Avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">Dalton</h2>
          <p className="text-gray-600">Grade 5</p>
          <p className="text-gray-600">Carlingford West Public School</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold">Points this week</h3>
            <p className="text-3xl font-bold text-blue-600">620</p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-700">
              Questions answered this week:{" "}
              <span className="font-bold">50</span>
            </p>
            <p className="text-gray-700">
              Questions answered this year:{" "}
              <span className="font-bold">640</span>
            </p>
            <p className="text-gray-700">
              Gold bars earned this year: <span className="font-bold">8</span>
            </p>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow">
              View My Awards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
