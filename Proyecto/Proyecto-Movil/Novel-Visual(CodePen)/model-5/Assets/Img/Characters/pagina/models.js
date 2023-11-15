const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

// Modelo de Curso
const courseSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  imagen: String,
  students: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Hace referencia al modelo User
      },
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // Hace referencia al mismo modelo Course
      },
      status: String,
    },
  ],
});

const inscripcionCursoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  status: String,
});

const questionSchema = new mongoose.Schema({
  curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Suponiendo que tengas un modelo de cursos llamado 'Course'
  },
  textoPregunta: String,
  alternativas: [
    {
      textoAlternativa: String,
      correcta: Boolean,
    },
  ],
});

const resultadoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Hace referencia al modelo User
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Hace referencia al modelo Course
  },
  aprobado: Boolean,
});


const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);
const InscripcionCurso = mongoose.model('InscripcionCurso', inscripcionCursoSchema);
const Question = mongoose.model('Question', questionSchema);
const Resultado = mongoose.model('Resultado', resultadoSchema);

module.exports = { User, Course, InscripcionCurso, Question, Resultado };
