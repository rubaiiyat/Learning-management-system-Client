import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";
import ErrorPage from "../../Pages/ErrorPage";

const PrivateCourseRoute = ({ courseId, children }) => {
  const { user, loading } = useContext(AuthContext);
  const userEmail = user?.email;
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    if (!userEmail) return;
    const checkEnrollment = async () => {
      try {
        setChecking(true);
        const res = await axios.get(
          `http://localhost:3000/check-enrollment?email=${userEmail}&courseId=${courseId}`
        );
        setIsEnrolled(res.data.enrolled);
      } catch (error) {
        console.error(error);
        setIsEnrolled(false);
      } finally {
        setChecking(false);
      }
    };

    checkEnrollment();
  }, [userEmail, courseId]);

  if (loading || checking) return <p></p>;
  if (!isEnrolled) {
    return <ErrorPage></ErrorPage>;
  }
  return children;
};

export default PrivateCourseRoute;
