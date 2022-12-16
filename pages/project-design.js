import React, {useContext} from 'react'
import InformeCard from '../components/InformeCard';
import { Button, Typography } from "@mui/material"
import { useRouter } from "next/router";
import { DatosContext } from "../context/useContext"


const projectDesign = () => {
  const {datosA, EliminarTareaA,ActualizarTarea} = useContext(DatosContext)
  const router = useRouter();
  
  return (
    <>
    <Typography variant='h4'>Agency 606 Projects Design</Typography>
      <InformeCard  
        EliminarTarea={EliminarTareaA}
        ActualizarTarea={ActualizarTarea}
        datos={datosA}
      />
    </>
  )
}

export default projectDesign