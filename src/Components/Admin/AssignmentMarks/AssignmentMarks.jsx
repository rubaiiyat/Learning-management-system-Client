import React, { useEffect, useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import toast from "react-hot-toast";

const AssignmentMarks = () => {
  const [assignments, setAssignments] = useState([]);
  const [selected, setSelected] = useState(null);
  const [mark, setMark] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const res = await axios.get("http://localhost:3000/submit-assignment");
      const pendingAssignments = res.data.result.filter(
        (a) => a.status === "Pending" || a.mark == 0
      );
      setAssignments(pendingAssignments);
    } catch (error) {
      console.error(error);
    }
  };

  const handleView = (assignment) => {
    setSelected(assignment);
    setMark(assignment.mark || "");
    setStatus(assignment.status);
  };

  const handleClose = () => {
    setSelected(null);
    setMark("");
    setStatus("Pending");
  };

  const handleSetMark = async () => {
    if (mark === "" || mark < 0) {
      toast.error("Please enter a valid mark (0 or higher).");
      return;
    }
    try {
      await axios.put(
        `http://localhost:3000/set-mark/assignment/${selected._id}`,
        { mark: Number(mark), status }
      );
      setAssignments(assignments.filter((a) => a._id !== selected._id));
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 md:p-8  ">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#F16623]">
        Pending Assignments
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#F16623] text-white">
            <tr>
              <th className="text-left py-3 px-4">Assignment Name</th>
              <th className="text-left py-3 px-4">User Email</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr
                key={a._id}
                className="border-b hover:bg-base-200 transition-all duration-200"
              >
                <td className="py-3 px-4">{a.assignmentName}</td>
                <td className="py-3 px-4">{a.userEmail}</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    a.status === "Pending" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {a.status}
                </td>

                <td className="py-3 px-4">
                  <button
                    className="bg-[#F16623] text-white px-4 py-2 rounded-md hover:bg-[#e85a0f] transition cursor-pointer"
                    onClick={() => handleView(a)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            {assignments.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No pending assignments
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-center items-center  p-4 overflow-auto">
          <div className="rounded-xl shadow-xl w-full max-w-lg p-6 relative bg-base-300">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={handleClose}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-[#F16623] text-center">
              Update Assignment
            </h2>

            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Assignment Name
              </label>
              <input
                type="text"
                value={selected.assignmentName}
                readOnly
                className="input input-bordered w-full  cursor-not-allowed"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">User Email</label>
              <input
                type="text"
                value={selected.userEmail}
                readOnly
                className="input input-bordered w-full  cursor-not-allowed"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Assignment Content
              </label>
              <textarea
                value={selected.assignmentLink}
                readOnly
                className="textarea textarea-bordered w-full h-32 resize-none"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Mark</label>
              <input
                type="number"
                value={mark}
                onChange={(e) => setMark(e.target.value)}
                className="input input-bordered w-full"
                min={0}
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="input input-bordered w-full cursor-pointer"
              >
                <option value="Pending">Pending</option>
                <option value="Complete">Complete</option>
              </select>
            </div>

            <button
              className="w-full bg-[#F16623] text-white py-2 rounded-md hover:bg-[#fc6d25] transition cursor-pointer"
              onClick={handleSetMark}
            >
              Set Mark & Update Status
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentMarks;
