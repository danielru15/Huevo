import { createContext, useState, useEffect } from "react";
export { useContext } from "react";
import { db} from '../firebase'
import { collection,onSnapshot, orderBy, query,addDoc,doc, getDocs,updateDoc,deleteDoc,setDoc} from "firebase/firestore";

export const DatosContext = createContext()

export const DatosProvider = ({ children }) => {
    const [Nombre, setNombre] = useState('')
    const [Dia, setDia] = useState('')
    const [Tarea, setTarea] = useState('')
    const [Score, setScore] = useState('')
    const [option, setOption] = useState('')
    const [Realizado, setRealizado] = useState(false)
    const [datos, setDatos] = useState([])
    const [datosA, setDatosA] = useState([])

// Crear Tarea
    const CrearTarea = async (option) => {
       
        try {
            await addDoc(collection(db, option), {
                Nombre:Nombre,
                Dia:Dia,
                Tarea:Tarea,
                Realizado:Realizado,
                option:option
            })
            alert('Tarea Creada')
            
        } catch (error) {
            console.log(error)
        }
    }
// Actualizar Tarea
    const ActualizarTarea = async (option,id) => {
        const taskDocRef = doc(db, option, id)
       try {
        await updateDoc(taskDocRef, {
            Nombre:Nombre,
            Dia:Dia,
            Tarea:Tarea,
            Realizado:Realizado
        })
            alert('Tarea Actualizada')
       } catch (error) {
        console.log(error)
       }
    }
// Eliminar Tarea
const EliminarTarea = async (id) => {
    const taskDocRef = doc(db, 'AgencyMarketing', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
}

//Eliminar todas las tareas

const EliminarAllTarea = async (datos, datab) => {
await datos.forEach(element => {
  const taskDocRef = doc(db,datab,element.id)
  try{
     deleteDoc(taskDocRef)
  } catch (err) {
    alert(err)
  }
  
})
}

const EliminarTareaA = async (id) => {
    const taskDocRef = doc(db, 'AgencyProjects', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
}
 // Mostrar Datos
 useEffect(() => {
    const AgencyMarketing = query(collection(db, 'AgencyMarketing'),orderBy("Nombre", "asc"), orderBy("Dia") )
    const Ab = query(collection(db, 'AgencyProjects'),orderBy("Nombre", "asc" ), orderBy("Dia", "asc"))

    onSnapshot(AgencyMarketing, (querySnapshot) => {
      setDatos(querySnapshot.docs.map(doc => ({
        id: doc.id,
        Nombre:doc.data().Nombre,
        Dia:doc.data().Dia,
        Tarea:doc.data().Tarea,
        Score:doc.data().Score,
        Realizado:doc.data().Realizado,
        option:doc.data().option
      })))
    })  
    
    onSnapshot(Ab, (querySnapshot) => {
        setDatosA(querySnapshot.docs.map(doc => ({
          id: doc.id,
          Nombre:doc.data().Nombre,
          Dia:doc.data().Dia,
          Tarea:doc.data().Tarea,
          Score:doc.data().Score,
          Realizado:doc.data().Realizado,
          option:doc.data().option
        })))
      })   
  },[])
  
    return (
        <DatosContext.Provider value={{
          EliminarAllTarea,
            datosA,
            datos,
            option, 
            setOption,
            Nombre, 
            setNombre,
            Dia, 
            setDia,
            Tarea, 
            setTarea,
            Score, 
            setScore,
            Realizado, 
            setRealizado,
            CrearTarea,
            ActualizarTarea,
            EliminarTareaA,
            EliminarTarea}}>
            {children}
        </DatosContext.Provider>
    )
}