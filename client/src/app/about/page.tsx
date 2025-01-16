export default function About() {
  const Certifications = [
    {
      cert: "Software Development Bootcamp",
      school: "Gomycode",
    },
    {
      cert: "Data Protection",
      school: "Strathmore University",
    },
    {
      cert: "Data Protection",
      school: "Strathmore University",
    },
  ];
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            Education
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            A journey of learning and growth through institutions and
            certifications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 h-full w-[3px] bg-gray-300"></div>

          {/* Degree */}
          <div className="relative flex items-start mb-12">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              🎓
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-gray-600">KCAU University</p>
              <p className="mt-2 text-sm text-gray-500">
                Graduated with a focus on software development and data
                analysis.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="relative flex items-start mb-12">
            <div className="flex-shrink-0 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              📜
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Certifications
              </h3>
              <ul className="mt-4 space-y-4">
                {Certifications.map((certificate, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${
                        index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                      }`}
                    ></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {certificate.cert}
                      </h4>
                      <p className="text-gray-600">{certificate.school}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="relative flex items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
              🛠️
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-bold text-gray-800">
                Skills Acquired
              </h3>
              <p className="mt-2 text-gray-600">
                Web development, backend technologies, data analysis, and
                project management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

    // <>
    //   <div className="max-w-4xl mx-auto px-4 py-10">
    //     <div className="text-center mb-16">
    //       <h1 className="text-4xl font-bold mb-4">EDUCATION</h1>
    //       <div className="border-b-2 border-gray-300 mb-6"></div>
    //     </div>
    //     <div>
    //       <h1 className="font-bold text-3xl">
    //         Mastery. Schools. Certifications.
    //       </h1>
    //     </div>

    //     <p className="mt-4">
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
    //       voluptate harum esse!
    //     </p>

    //     <div className="mt-5">
    //       <h1>Bachelor of Science in Information Technology</h1>
    //       <h1>KCAU University</h1>
    //     </div>

    //     <div className="mt-5">
    //       <h1 className="text-xl font-bold">Certifications</h1>
    //       {Certifications.map((certificate, index) => (
    //         <div key={index}>
    //           <ul className="p-3">
    //             <li className="relative">
    //               <span>{certificate.cert}</span>
    //               <div className="flex items-center mt-1">
    //                 <span className="h-6 w-[2px] bg-red-500 mr-2"></span>
    //                 <span>{certificate.school}</span>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>
    //       ))}
    //     </div>

    //     <div>Skills Acquired</div>
    //   </div>
    // </>
  );
}
