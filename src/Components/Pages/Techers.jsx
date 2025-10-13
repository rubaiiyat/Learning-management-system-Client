import React from "react";

const teachers = [
  {
    id: 1,
    name: "Chester Bennington",
    category: "IELTS",
    skills: ["Speaking", "Writing"],
    image:
      "https://www.etonline.com/sites/default/files/styles/dist_rss/public/brightcove/videos/images/posters/1242911076001_5529626596001_et-chesterbennington-080217-hulu_1.jpg",
    experience: "15 years",
    rating: 4.9,
    students: 5200,
  },
  {
    id: 2,
    name: "Amy Lee",
    category: "IELTS",
    skills: ["Writing", "Reading"],
    image:
      "https://www.rollingstone.com/wp-content/uploads/2020/11/AMY-LEE-SHOOT-SET-1812020-finalc.jpg",
    experience: "18 years",
    rating: 5.0,
    students: 6000,
  },
  {
    id: 3,
    name: "Kurt Cobain",
    category: "TOEFL",
    skills: ["Listening", "Reading"],
    image:
      "https://dversepoets.com/wp-content/uploads/2024/01/img_7606.jpg?w=1024",
    experience: "12 years",
    rating: 4.8,
    students: 3800,
  },
  {
    id: 4,
    name: "Emily Armstrong",
    category: "Duolingo",
    skills: ["Listening", "Speaking"],
    image:
      "https://i.namu.wiki/i/4YsEOri51go4YiptaROhM5ej0GfXNio4nv4qPG-I7hiZarC4Xk6IpHiV6wk9An5blav5W6zI-u408HziM1xtSA.webp",
    experience: "10 years",
    rating: 4.9,
    students: 4800,
  },
  {
    id: 5,
    name: "John Lennon",
    category: "SAT",
    skills: ["Writing", "Speaking"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kcWGxme7kiPX8goYfeuqx0yeEpbe7dIvwljqnaxQFIEwfJn7Yxk90hJIwN1Ri5qUAOI&usqp=CAU",
    experience: "20 years",
    rating: 5.0,
    students: 6500,
  },

  {
    id: 6,
    name: "Avril Lavigne",
    category: "PTE",
    skills: ["Speaking", "Reading"],
    image:
      "https://58v76y8z87lo.hellomagazine.com/horizon/landscape/09de1a802677-avril-lavigne.jpg",
    experience: "8 years",
    rating: 4.8,
    students: 4200,
  },
];

const Teachers = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Meet Our <span className="text-[#F16623]">Legendary Teachers</span>
        </h1>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col transition-shadow duration-300 hover:shadow-xl"
          >
            {/* Teacher Image */}
            <div className="relative">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-48 lg:h-56 object-cover"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F16623] to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                {teacher.category}
              </div>
            </div>

            {/* Teacher Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {teacher.name}
              </h2>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-[#F16623]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {teacher.experience}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-[#F16623]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {teacher.students.toLocaleString()}+
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {teacher.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button className="mt-auto w-full bg-gradient-to-r from-[#F16623] to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-orange-500 hover:to-[#F16623] transition-all duration-300 shadow-md hover:shadow-lg">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button className="bg-white text-[#F16623] border-2 border-[#F16623] px-8 py-3 rounded-xl font-semibold hover:bg-[#F16623] hover:text-white transition-all duration-300 transform hover:scale-105">
          Load More Teachers
        </button>
      </div>
    </div>
  );
};

export default Teachers;
