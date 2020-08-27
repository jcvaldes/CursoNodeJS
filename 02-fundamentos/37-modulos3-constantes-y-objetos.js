export const unaTarea = "nombre tarea"

export const miObjeto = {
  tarea1: unaTarea,
  tarea2: 'otra tarea'
}

// export const crearTarea = (tarea, urgencia) => {
//   return `La tarea ${tarea} tiene urgencia ${urgencia}`
// }
// export const tareaCompletada = () => {
//   return `La tarea se completo`
// }
const crearTarea = (tarea, urgencia) => {
  return `La tarea ${tarea} tiene urgencia ${urgencia}`
}
const tareaCompletada = () => {
  return `La tarea se completo`
}

export const misFunciones = {
  crearTarea, 
  tareaCompletada
}