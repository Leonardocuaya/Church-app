import React from 'react';
import { motion } from 'framer-motion';
import { Music, BookOpen, Brush, PlusCircle } from 'lucide-react';

const Activities = () => {
  const activityCategories = [
    { name: 'Rol de Músicos', icon: Music, description: 'Organiza los turnos y playlists para cada servicio.' },
    { name: 'Peticiones de Oración', icon: BookOpen, description: 'Gestiona motivos de oración y asigna oradores aleatoriamente.' },
    { name: 'Rol de Aseo', icon: Brush, description: 'Asigna turnos de limpieza por familia de forma aleatoria.' },
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
        Gestión de Actividades
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
        Aquí podrás dar de alta y organizar todas las actividades de la iglesia de forma dinámica y sencilla.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activityCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          >
            <category.icon className="w-16 h-16 text-red-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.name}</h3>
            <p className="text-gray-600 mb-6">{category.description}</p>
            <motion.button
              className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlusCircle className="w-5 h-5" />
              Gestionar
            </motion.button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-4">¿Tienes una nueva actividad en mente?</h3>
        <p className="text-lg text-gray-600 mb-6">
          ¡Puedes agregarla fácilmente y empezar a organizarla!
        </p>
        <motion.button
          className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PlusCircle className="w-6 h-6" />
          Crear Nueva Actividad
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Activities;