import { Award, BookOpen } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";

const UserAssignmentMarks = () => {
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const [averageMark, setAverageMark] = useState(0);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get("http://localhost:3000/submit-assignment");

        const userAssignments = res.data.result.filter(
          (a) => a.userEmail === user.email && a.status === "Complete"
        );
        setAssignments(userAssignments);

        if (userAssignments.length > 0) {
          const totalMarks = userAssignments.reduce(
            (sum, a) => sum + (a.mark > 100 ? 100 : a.mark),
            0
          );
          setAverageMark((totalMarks / userAssignments.length).toFixed(2));
        } else {
          setAverageMark(0);
        }
      } catch (error) {
        console.error("Failed to fetch assignments:", error);
      }
    };

    if (user?.email) {
      fetchAssignments();
    }
  }, [user]);

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-base-content flex items-center gap-2">
          <BookOpen className="text-[#F16623]" /> Assignment Marks
        </h2>
        <Award className="text-[#F16623]" />
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border border-base-300 rounded-lg">
          <thead>
            <tr className="bg-[#F16623] text-white">
              <th className="p-3 text-left rounded-tl-lg">#</th>
              <th className="p-3 text-left">Assignment</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left rounded-tr-lg">Marks (%)</th>
            </tr>
          </thead>
          <tbody>
            {assignments.length > 0 ? (
              assignments.map((a, index) => (
                <tr
                  key={a._id}
                  className="border-b border-base-300 hover:bg-base-100 transition text-base-content"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{a.assignmentName}</td>
                  <td
                    className={`p-3 font-semibold ${
                      a.status === "Pending" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {a.status}
                  </td>
                  <td
                    className={`p-3 font-semibold ${
                      a.mark >= 80
                        ? "text-green-500"
                        : a.mark >= 50
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {a.mark > 100 ? 100 : a.mark}%
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-3 text-center text-gray-500">
                  No assignments found.
                </td>
              </tr>
            )}
            {assignments.length > 0 && (
              <tr className="bg-base-200 font-semibold">
                <td colSpan={3} className="p-3 text-right">
                  Average Mark:
                </td>
                <td className="p-3 text-left">{averageMark}%</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAssignmentMarks;
