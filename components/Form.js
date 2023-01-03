import { FormGroup, FormLabel,Box,TextField, Switch , Button, FormControl, Select, MenuItem, InputLabel} from '@mui/material'
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
      Realizado, 
      setRealizado,
      CrearTarea,
    datos,
    ActualizarTarea,
  datosA} = useContext(DatosContext)


  console.log(Realizado)
      useEffect(() => {
        if(query.id) {
          const enc = datos.find(dato => dato.id === query.id) || datosA.find(dato => dato.id === query.id)
          setNombre(enc.Nombre)
          setDia(enc.Dia)
          setTarea(enc.Tarea)
          setRealizado(enc.Realizado)
          setOption(enc.option)
        }else if (!query.id){
          setNombre("")
          setDia("")
          setTarea("")
          setRealizado("")
          setOption(false)
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
                <Box sx={{ width: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Seleccione</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    value={Dia}
                    onChange={e => setDia(e.target.value)}
                    required
                  >
                  <MenuItem  key={"Lunes"} value={"Lunes"}>Lunes</MenuItem>
                  <MenuItem  key={"Martes"} value={"Martes"}>Martes</MenuItem>
                  <MenuItem  key={"Miercoles"} value={"Miercoles"}>Miercoles</MenuItem>
                  <MenuItem  key={"Jueves"} value={"Jueves"}>Jueves</MenuItem> 
                  <MenuItem  key={"Viernes"} value={"Viernes"}>Viernes</MenuItem>
                  <MenuItem  key={"Sabado"} value={"Sabado"}>Sabado</MenuItem>  
                  <MenuItem  key={"Domingo"} value={"Domingo"}>Domingo</MenuItem>  
                  </Select>
                  </FormControl>
                  </Box>
                <TextField   label="Tarea" value={Tarea} onChange={e => setTarea(e.target.value)} required/>
                <Switch label="Realizado" value={Realizado} checked={Realizado} onChange={() => setRealizado(value => !value)}/>
                <Box sx={{ width: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Seleccione</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    value={option}
                    onChange={e => setOption(e.target.value)}
                    required
                  >
                  <MenuItem  key={"AgencyProjectsMarketing"} value={"AgencyMarketing"}>Agency 606 Projects Marketing</MenuItem>
                  <MenuItem  key={"AgencyProjectsDesign"} value={"AgencyProjects"}>Agency 606 Projects Design </MenuItem> 
                  
                  </Select>
                  </FormControl>
                  </Box>
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