import axios from "axios";
import { Users } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const RegisterdStudents = () => {
  const [registerd, setRegistered] = useState(0);
  const [enrolled, setEnrolled] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        const users = res.data.result || [];

        setRegistered(users.length);

        const totalEnrolled = users.reduce((sum, user) => {
          return sum + (user.enrolledCourse ? user.enrolledCourse.length : 0);
        }, 0);

        setEnrolled(totalEnrolled);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);
  console.log(enrolled);
  return (
    <div className="bg-base-100 shadow-lg p-4 md:p-6 rounded-xl md:rounded-2xl border border-base-300 hover:shadow-xl transition">
      <Users className="text-[#F16623]" size={24} />
      <h3 className="font-semibold mt-2 md:mt-3 text-base md:text-lg">
        Enrolled Students
      </h3>
      <p className="text-xl md:text-2xl font-bold mt-1 md:mt-2">{enrolled}</p>
    </div>
  );
};

export default RegisterdStudents;
