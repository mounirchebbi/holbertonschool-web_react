// Import the subjects namespace
import './subjects/index';

// Test the namespace functionality
const teacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe'
};

const cppSubject = new Subjects.Cpp();
cppSubject.setTeacher(teacher);

console.log('Task 4: Subjects namespace loaded successfully');
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher()); 