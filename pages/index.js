import React, {useContext} from 'react'
import InformeCard from '../components/InformeCard';
import {  Typography } from "@mui/material"
import { useRouter } from "next/router";

import { DatosContext } from "../context/useContext"



export default function Home() {
  const {datos, EliminarTarea,ActualizarTarea} = useContext(DatosContext)
  

  return (
    <>
    <Typography variant='h4'>Agency 606 Projects Marketing</Typography>
      <InformeCard  
        datos={datos}
        EliminarTarea={EliminarTarea}
        ActualizarTarea={ActualizarTarea}
      />
    </>
  )
}
