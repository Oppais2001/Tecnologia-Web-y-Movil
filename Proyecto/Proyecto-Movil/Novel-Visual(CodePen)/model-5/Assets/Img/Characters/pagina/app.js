const mongoose = require('mongoose');
const express = require('express');
const validUrl = require('valid-url'); 
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10; // Número de rondas de hashing (ajustable)
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cursosController = require('./public/cursosController');
const path = require('path');
const multer = require('multer'); // Middleware para procesar la carga de imágenes
const { User, Course, InscripcionCurso,Question } = require('./models');

// Conecta a la base de datos MongoDB
mongoose.connect('mongodb+srv://Berserk:Bersek1106@cluster0.krd1u.mongodb.net/Cursos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conexión a MongoDB establecida con éxito');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error en la conexión a MongoDB: ${err}`);
});

// Resto del código (seguir usando tu código anterior)

// Configura express-session
app.use(session({
  secret: 'tu_secreto',
  resave: false,
  saveUninitialized: true,
}));

// Configura connect-flash
app.use(flash());

// Configura Passport.js
passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email }).exec();
      if (!user) {
        return done(null, false, { message: 'Credenciales inválidas' });
      }

      // Compara la contraseña proporcionada con la contraseña encriptada en la base de datos
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return done(null, false, { message: 'Credenciales inválidas' });
      }

      // Asigna el rol del usuario
      user.role = 'user'; // Asegúrate de establecer el rol según tu lógica

      console.log('Usuario encontrado:', user);
      console.log('Rol del usuario:', user.role);

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
});

// Conecta a la base de datos MongoDB
mongoose.connect('mongodb+srv://Berserk:Bersek1106@cluster0.krd1u.mongodb.net/Cursos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conexión a MongoDB establecida con éxito');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error en la conexión a MongoDB: ${err}`);
});

// Funciones de middleware para autenticación
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('Usuario autenticado, permite el acceso');
    return next();
  }
  console.log('Usuario no autenticado, redirige a la página de inicio de sesión');
  res.redirect('/');
}

function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    console.log('Usuario administrador, permite el acceso');
    return next();
  }
  console.log('Usuario no administrador, redirige a la página de acceso denegado');
  res.redirect('/acceso-denegado');
}

// Rutas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  // Consulta la base de datos para obtener todos los cursos
  Course.find()
    .then((cursos) => {
      console.log('Cursos encontrados:', cursos);
      // Renderiza la vista 'index' y pasa la lista de cursos a la vista
      res.render('index', { cursos: cursos });
    })
    .catch((error) => {
      console.error('Error al obtener los cursos:', error);
      // Manejo de error, muestra una lista vacía
      res.render('index', { cursos: [] });
    });
});
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/ingresar-cursos', ensureAuthenticated, ensureAdmin, (req, res) => {
    // Esta ruta está protegida y solo los administradores pueden acceder a ella.
    res.render('ingresarcurso'); // Renderiza la vista de ingreso de cursos
  });

  app.get('/perfil', ensureAuthenticated, (req, res) => {
    // Consulta la base de datos para obtener todos los cursos
    Course.find()
      .then((cursos) => {
        console.log('Cursos disponibles:', cursos);
        const isAdmin = req.user.role === 'admin';
        console.log(`Usuario autenticado como: ${req.user.username}, Rol: ${req.user.role}`);
        res.render('perfil', { usuario: req.user, cursos: cursos, isAdmin });// Pasa la lista de cursos a la vista de perfil
      })
      .catch((error) => {
        console.error('Error al obtener los cursos:', error);
        const isAdmin = req.user.role === 'admin';
        console.log(`Usuario autenticado como: ${req.user.username}, Rol: ${req.user.role}`);
        res.render('perfil', { usuario: req.user, cursos: cursos, isAdmin });
      });
  });

app.get('/registro', (req, res) => {
  res.render('registro');
});

app.get('/acceso-denegado', (req, res) => {
  console.log('Ruta de acceso denegado');
  res.status(403).send('Acceso denegado');
});

  // Ruta para mostrar los cursos disponibles para eliminar
  app.get('/eliminar-cursos', ensureAuthenticated, ensureAdmin,cursosController.obtenerCursosDisponibles);


app.post('/login', passport.authenticate('local', {
  successRedirect: '/perfil',
  failureRedirect: '/',
  failureFlash: true,
}));
app.post('/registro', (req, res) => {
  const { username, email, password } = req.body;

  // Genera un hash de la contraseña
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Error al crear el hash de la contraseña:', err);
      return res.redirect('/');
    }

    // Crea un nuevo usuario con la contraseña encriptada
    const newUser = new User({
      username: username,
      email: email,
      password: hash,
      role: 'user', // Asegúrate de establecer el rol como 'user' aquí
    });

    newUser.save()
      .then(result => {
        console.log('Usuario guardado con éxito:', result);
        res.redirect('/perfil');
      })
      .catch(err => {
        console.error('Error al guardar el nuevo usuario:', err);
        res.redirect('/');
      });
  });
});

// Configura multer para manejar la carga de imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/cursos'); // Directorio donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
    },
  });
  
  const upload = multer({ storage: storage });
  
  // Ruta para mostrar el formulario de ingreso de cursos
  app.get('/agregar-curso', (req, res) => {
    res.render('nuevo-curso'); // Renderiza la vista con el formulario
  });





  // app.post('/curso/:cursoId/formulario', ensureAuthenticated, (req, res) => {
  //   const cursoId = req.params.cursoId;
  //   const respuestasUsuario = req.body; // Obtén las respuestas del usuario desde req.body
  
  //   // Consulta la base de datos para obtener las respuestas correctas relacionadas con el curso
  //   Question.find({ curso: cursoId })
  //     .then((preguntas) => {
  //       // Calcula la cantidad de preguntas acertadas
  //       let cantidadAcertadas = 0;
  //       for (const pregunta of preguntas) {
  //         const respuestaCorrecta = pregunta.alternativas.find((alt) => alt.correcta);
  //         const respuestaUsuario = respuestasUsuario[pregunta._id.toString()]; // Suponiendo que las respuestas del usuario se envían en el body con las claves como IDs de preguntas
  
  //         if (respuestaCorrecta && respuestaCorrecta._id.toString() === respuestaUsuario) {
  //           cantidadAcertadas++;
  //         }
  //       }
  
  //       // Calcula el porcentaje de respuestas correctas
  //       const totalPreguntas = preguntas.length;
  //       const porcentajeAciertos = (cantidadAcertadas / totalPreguntas) * 100;
  
  //       // Establece un umbral para aprobar el curso (por ejemplo, 60%)
  //       const umbralAprobacion = 60;
  
  //       // Determina el estado del curso (aprobado o reprobado)
  //       const estadoCurso = porcentajeAciertos >= umbralAprobacion ? 'Aprobado' : 'Reprobado';
  
  //       // Renderiza la página de resultados y pasa los datos
  //       res.render('resultados', {
  //         cantidadAcertadas,
  //         porcentajeAciertos,
  //         estadoCurso,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error al obtener preguntas:', error);
  //       // Manejo de error, redirige o muestra un mensaje de error según tu preferencia
  //       res.redirect('/perfil'); // Por ejemplo, redirige al perfil
  //     });
  // });

  app.post('/eliminar-curso/:id',ensureAuthenticated, ensureAdmin, cursosController.eliminarCurso);
  
  // Ruta para manejar el envío del formulario
  app.post('/guardar-curso', ensureAuthenticated, ensureAdmin, (req, res) => {
    // Obtener los datos del nuevo curso desde el cuerpo de la solicitud (req.body)
    const { nombre, descripcion, imgurl } = req.body;
  
    // Verificar si la URL de la imagen es válida
    if (!validUrl.isUri(imgurl)) {
      console.error('URL de imagen no válida:', imgurl);
      // Manejo de error, redirige o muestra un mensaje de error según tu preferencia
      res.redirect('/perfil'); // Por ejemplo, redirige al perfil
      return;
    }
  
    // Crear un nuevo documento de curso
    const newCourse = new Course({
      nombre: nombre,
      descripcion: descripcion,
      imagen: imgurl, // Utiliza el valor de imgurl como la URL de la imagen
    });
  
    // Guardar el nuevo curso en la base de datos
    newCourse.save()
      .then((course) => {
        console.log('Curso guardado con éxito:', course);
        res.redirect('/perfil'); // Redirige al perfil después de agregar el curso
      })
      .catch((error) => {
        console.error('Error al guardar el curso:', error);
        // Manejo de error, redirige o muestra un mensaje de error según tu preferencia
        res.redirect('/perfil'); // Por ejemplo, redirige al perfil
      });
  });

  app.post('/eliminar-curso',ensureAuthenticated, ensureAdmin, (req, res) => {
    // Lógica para eliminar un curso
    // Puedes acceder a datos relevantes, como el ID del curso a eliminar, a través de req.body o req.params
  
    // Realiza la lógica para eliminar el curso
  
    // Envía una respuesta de vuelta, si es necesario
    res.send('Curso eliminado con éxito'); // Esto es solo un ejemplo
  });

  app.post('/inscribirse', ensureAuthenticated, async (req, res) => {
    try {
      const cursoId = req.body.cursoId; // Obtener el ID del curso desde el formulario
      const usuarioId = req.user._id; // Obtener el ID del usuario desde Passport
  
      // Supongamos que tienes un modelo llamado InscripcionCurso en tu base de datos
      const InscripcionCurso = mongoose.model('InscripcionCurso');
  
      // Verifica si el usuario ya está inscrito en el curso
      const inscripcion = await InscripcionCurso.findOne({ usuario: usuarioId, curso: cursoId }).exec();
  
      if (inscripcion) {
        console.log('El usuario ya está inscrito en este curso');
        // Puedes manejar esto como desees, por ejemplo, mostrando un mensaje al usuario
        return res.redirect('/cursos-disponibles');
      }
  
      // Si el usuario no está inscrito, crea una nueva inscripción
      const nuevaInscripcion = new InscripcionCurso({
        usuario: usuarioId,
        curso: cursoId,
        estado: 'en curso', // Establece el estado inicial, por ejemplo, "en curso"
      });
  
      await nuevaInscripcion.save();
      console.log('Inscripción exitosa');
      // Puedes redirigir al usuario a la página de "Cursos Disponibles" o mostrar un mensaje de éxito
      res.redirect('/cursos-disponibles');
    } catch (error) {
      console.error('Error al inscribirse:', error);
      // Manejo de error, redirige o muestra un mensaje de error
      res.redirect('/cursos-disponibles');
    }
  });

  app.get('/curso/:cursoId/formulario', ensureAuthenticated, async (req, res) => {
    try {
      const cursoId = req.params.cursoId;
      
      // Consulta la base de datos para obtener las preguntas relacionadas con el curso
      const preguntas = await Question.find({ curso: cursoId });
    
      // Renderiza el formulario con las preguntas
      res.render('formularios/ciencias', { cursoId, preguntas });
    } catch (error) {
      console.error('Error al obtener preguntas:', error);
      // Manejo de error, redirige o muestra un mensaje de error según tu preferencia
      res.redirect('/perfil'); // Por ejemplo, redirige al perfil
    }
  });
  
  // Ruta para procesar el formulario
  app.get('/curso/:cursoId/formulario', ensureAuthenticated, async (req, res) => {
    try {
      const cursoId = req.params.cursoId;
      
      // Consulta la base de datos para obtener las preguntas relacionadas con el curso
      const preguntas = await Question.find({ curso: cursoId }).exec();
  
      // Renderiza el formulario con las preguntas
      res.render('formularios/ciencias', { cursoId, preguntas });
    } catch (error) {
      console.error('Error al obtener preguntas:', error);
      // Manejo de error, redirige o muestra un mensaje de error según tu preferencia
      res.redirect('/perfil'); // Por ejemplo, redirige al perfil
    }
  });
  
  // Ruta para procesar el formulario
  // app.post('/curso/:cursoId/formulario', ensureAuthenticated, async (req, res) => {
  //   try {
  //     const cursoId = req.params.cursoId;
  //     const respuestasUsuario = req.body;
  
  //     // Consulta la base de datos para obtener las respuestas correctas relacionadas con el curso
  //     const preguntas = await Question.find({ curso: cursoId }).exec();
  
  //     // Calcula si el usuario aprobó el curso
  //     const puntajeMinimo = 70;
  //     let puntajeUsuario = 0;
  
  //     for (const pregunta of preguntas) {
  //       const respuestaCorrecta = pregunta.alternativas.find((alt) => alt.correcta);
  //       const respuestaUsuario = respuestasUsuario[pregunta._id.toString()];
  
  //       if (respuestaCorrecta && respuestaCorrecta._id.toString() === respuestaUsuario) {
  //         puntajeUsuario++;
  //       }
  //     }
  

  //     const aprobado = (puntajeUsuario / preguntas.length) * 100 >= puntajeMinimo;

  //     // Redirige al usuario a una página que muestre el resultado
  //     if (aprobado) {
  //       // El usuario aprobó el curso
  //       res.render('resultados', { aprobado: true });
  //     } else {
  //       // El usuario no aprobó el curso
  //       res.render('resultados', { aprobado: false });
  //     }
  //   } catch (error) {
  //     console.error('Error al procesar el formulario:', error);
  //     // Manejo de error, redirige o muestra un mensaje de error según tu preferencia
  //     res.redirect('/perfil'); // Por ejemplo, redirige al perfil
  //   }
  // });
  
//   // En tu ruta que muestra los resultados
// app.get('/resultados', (req, res) => {
//   const aprobado = true; // Determina si el usuario aprobó o no
//   res.render('resultados', { aprobado: aprobado });
// });


  app.get('/cerrar-sesion', (req, res) => {
    req.logout((err) => {
      if (err) {
        console.error(err);
      }
      res.redirect('/'); // Redirige al usuario a la página de inicio después de cerrar sesión
    });
  });
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
