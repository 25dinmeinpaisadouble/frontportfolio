export default function About() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">About Me</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8" data-aos="fade-up">
          <p className="text-lg text-gray-700 mb-6">
            Just a big foodie tbh.
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
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Bachelor of Computer Science</h4>
                <p className="text-gray-600">University of New South Wales</p>
                <p className="text-gray-500">2022 - 2025</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
