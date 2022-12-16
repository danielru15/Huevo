import { FormGroup, FormLabel,Box,TextField, Switch , Button, FormControl, Select, MenuItem} from '@mui/material'
import React, {useEffect} from 'react'
import {useContext} from 'react'
import { DatosContext } from "../context/useContext"
import { useRouter } from "next/router";

const Form = () => {
  const {push, query} = useRouter();
    const {Nombre, 
      option, 
      setOption,
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
    datos,
    ActualizarTarea,
  datosA} = useContext(DatosContext)


      useEffect(() => {
        if(query.id) {
          const enc = datos.find(dato => dato.id === query.id) || datosA.find(dato => dato.id === query.id)
          setNombre(enc.Nombre)
          setDia(enc.Dia)
          setTarea(enc.Tarea)
          setScore(enc.Score)
          setRealizado(enc.Realizado)
          setOption(enc.option)
        }

      }, [])
      
      const handleSubmit = (e) => {
        let id = query.id
        e.preventDefault()
        if(!query.id){
        if(option !== null || option !== ''){
          CrearTarea(option)
        }
    }else{
      ActualizarTarea(option,id)
    }
    }
      
  return (
    <form onSubmit={handleSubmit}>
        <FormGroup>
            <FormLabel>Crear Tareas</FormLabel>
            <Box sx={{ "& > :not(style)": { m: 1 } }} noValidate autoComplete="off">
                <TextField   label="Nombre" value={Nombre} onChange={e => setNombre(e.target.value)}/>
                <TextField   label="Dia" type="date" value={Dia} onChange={e => setDia(e.target.value)}/>
                <TextField   label="Tarea" value={Tarea} onChange={e => setTarea(e.target.value)}/>
                <TextField   label="score"value={Score} onChange={e => setScore(e.target.value)}/>
                <Switch label="Realizado" value={Realizado} onChange={e => setRealizado(true)}/>
                <FormControl>
                  <Select
                    value={option}
                    onChange={e => setOption(e.target.value)}
                  >
                  <MenuItem  key={"AgencyProjectsMarketing"} value={"AgencyMarketing"}>Agency 606 Projects Marketing</MenuItem>
                  <MenuItem  key={"AgencyProjectsDesign"} value={"AgencyProjects"}>Agency 606 Projects Design </MenuItem> 
                  
                  </Select>
                  </FormControl>
            </Box>
        </FormGroup>
        <br/>
        <Button variant="contained" type="submit">
        {query.id ? 'Actualizar Tarea' : 'Crear Tarea'}
      </Button>
    </form>
  )
}

export default Form