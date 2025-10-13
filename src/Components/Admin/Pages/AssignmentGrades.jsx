import axios from "axios";
import { ClipboardList } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AssignmentGrades = () => {
  const [gradeCount, setGradeCount] = useState(0);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const res = await axios.get(
          "https://lms-server-henna.vercel.app/submit-assignment"
        );
        const assignments = res.data.result || [];
        const graded = assignments.filter(
          (assignment) => assignment.mark && assignment.mark > 0
        );
        setGradeCount(graded.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAssignment();
  }, []);
  return (
    <div className="bg-base-100 shadow-lg p-4 md:p-6 rounded-xl md:rounded-2xl border border-base-300 hover:shadow-xl transition">
      <ClipboardList className="text-[#F16623]" size={24} />
      <h3 className="font-semibold mt-2 md:mt-3 text-base md:text-lg">
        Assignments Graded
      </h3>
      <p className="text-xl md:text-2xl font-bold mt-1 md:mt-2">{gradeCount}</p>
    </div>
  );
};

export default AssignmentGrades;
