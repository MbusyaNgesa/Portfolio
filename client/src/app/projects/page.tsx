export default function Projects() {
  return (
    <div>
      <div>Projects</div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          {/*Card 1 */}
          <div className="p-6 max-w-md border rounded-lg shadow-lg">
            <h1 className="font-bold text-md">Eventlify</h1>
            <p className="mt-2 text-gray-700">
              A web based events listing platform that incorporates vendors,
              ticket system and two admin dashboards
            </p>
            <div className="mt-4">
              <ul className="flex space-x-3 text-sm text-gray-600">
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Express</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>

          {/*Card 2*/}
          <div className="p-6 max-w-md border rounded-lg shadow-lg">
            <h1 className="font-bold text-md">CookR</h1>
            <p className="mt-2 text-gray-700">
              A web based events listing platform that incorporates vendors,
              ticket system and two admin dashboards
            </p>
            <div className="mt-4">
              <ul className="flex space-x-3 text-sm text-gray-600">
                <li>NextJS</li>
                <li>Typescript</li>
                <li>Express</li>
                <li>NodeJS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
