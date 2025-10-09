import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import ErrorPage from "../../Pages/ErrorPage";

const PrivateCourseRoute = ({ courseId, children }) => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    if (!userEmail) return;
    const checkEnrollment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/check-enrollment?email=${userEmail}&courseId=${courseId}`
        );
        setIsEnrolled(res.data.enrolled);
      } catch (error) {
        console.error(error);
        setIsEnrolled(false);
      }
    };

    checkEnrollment();
  }, [userEmail, courseId]);
  return isEnrolled ? children : <ErrorPage></ErrorPage>;
};

export default PrivateCourseRoute;
