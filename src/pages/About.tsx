export default function About() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">About Me</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8" data-aos="fade-up">
          <p className="text-lg text-gray-700 mb-6">
            Big foodie.
          </p>
          
          <p className="text-lg text-gray-700">
            Other than that.. I like 2000's Bollywood comedy movies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">HCL Technologies</h4>
                <p className="text-gray-600">Support Engineer</p>
                <p className="text-gray-500">March-2022 to Nov-2022</p>
              </li>
              <li>
                {/* <h4 className="font-semibold">Software Developer Intern</h4>
                <p className="text-gray-600">Google</p>
                <p className="text-gray-500">Jan-2024 to Mar-2024</p> */}
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-right">
            <h3 className="text-xl font-bold">Education </h3>
            <h4 className="mb-4 text-sm font-normal leading-none text-gray-400"> University of New South Wales</h4>

            {/* add timeline thing */}
            <ol className="ml-6 relative border-s border-blue-100"> 
              <li className="ms-4 mb-5">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <h3 className="text-lg font-medium text-gray-900">Bachelor of Quantum Engineering/ Compsci</h3>
                <p className="text-sm font-normal text-gray-500">2022 (Feb) - 2022 (Dec)</p>
                <text className="mb-1 text-sm font-normal leading-none text-gray-400"></text>
                <h5 className="mb-4 text-xs font-normal leading-none text-gray-400"> Switched </h5>
              </li>

              <li className="ms-4 mb-5">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <h3 className="text-lg font-medium text-gray-900">Bachelor of Software Engineering</h3>
                <p className="text-sm font-normal text-gray-500">2023 (Feb) - 2023 (Dec)</p>
                <text className="mb-1 text-sm font-normal leading-none text-gray-400"></text>
                <h5 className="mb-4 text-xs font-normal leading-none text-gray-400"> Switched </h5>
              </li>

              <li className="ms-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                <h3 className="text-lg font-medium text-gray-900">Bachelor of Computer Science</h3>
                <p className="text-sm font-normal text-gray-500">2024 (Feb) - 2025</p>
                <text className="mb-1 text-sm font-normal leading-none text-gray-400"></text>
                <h5 className="mb-4 text-xs font-normal leading-none text-gray-400"> Completion end of 2025 </h5>

              </li>
                
            </ol>
          </div>

        </div>
      </div>
    </div>
  );
}
