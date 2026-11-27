import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LessonsMaterials from './pages/instructor/LessonsMaterials';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import StudentDashboard from './pages/student/StudentDashboard';
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import CreateCourse from './pages/instructor/CreateCourse';
import MyCourses from './pages/instructor/MyCourses';
import Quizzes from './pages/instructor/Quizzes';
import Assignments from './pages/instructor/Assignments';
import EnrolledStudents from './pages/instructor/EnrolledStudents';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageStudents from './pages/admin/ManageStudents';
import ManageInstructors from './pages/admin/ManageInstructors';
import ManageCourses from './pages/admin/ManageCourses';
import BrowseCourses from './pages/student/BrowseCourses';
import StudentMyCourses from './pages/student/MyCourses';
import StudentAssignments from './pages/student/Assignments';
import StudentQuizzes from './pages/student/Quizzes';
import MyProgress from './pages/student/MyProgress';
import Profile from './pages/student/Profile';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/instructor" element={<InstructorDashboard />} />

       <Route path="/instructor/create-course" element={<CreateCourse />} />

       <Route path="/instructor/my-courses" element={<MyCourses />} />

       <Route path="/instructor/lessons" element={<LessonsMaterials />} />

      <Route path="/instructor/assignments" element={<Assignments />} />
    
      <Route path="/instructor/quizzes" element={<Quizzes />} />

      <Route path="/instructor/students" element={<EnrolledStudents />} />
          
      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="/admin/students" element={<ManageStudents />} />

      <Route path="/admin/instructors" element={<ManageInstructors />} />

      <Route path="/admin/courses" element={<ManageCourses />} />

<Route path="/student/browse-courses" element={<BrowseCourses />} />
<Route path="/student/my-courses" element={<StudentMyCourses />} />
<Route path="/student/assignments" element={<StudentAssignments />} />
<Route path="/student/quizzes" element={<StudentQuizzes />} />
<Route path="/student/progress" element={<MyProgress />} />
<Route path="/student/profile" element={<Profile />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;