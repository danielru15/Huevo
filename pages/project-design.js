import React, {useContext} from 'react'
import { Button, ButtonGroup } from "@mui/material"
import { useRouter } from "next/router";
import { DataGrid} from '@mui/x-data-grid';
import { DatosContext } from "../context/useContext"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const projectDesign = () => {
  const {datosA, EliminarTareaA} = useContext(DatosContext)
  console.log(datosA)
  const router = useRouter();
  const columns = [
    {headerName: "Acciones", width:200, type:"actions", renderCell:(params)=> <ButtonGroup>
    <IconButton aria-label="eliminar">
     <DeleteIcon onClick={() => EliminarTareaA(params.id)} color="error"/>
   </IconButton>
   <IconButton aria-label="edit">
     <EditIcon  onClick={() => router.push(`/${params.row.id}`)}/>
   </IconButton>
 </ButtonGroup>},
    {field:"Nombre", headerName: "Nombre", width:300},
    {field:"Dia", headerName: "Dia", width:300},
    {field:"Tarea", headerName: "tarea", width:700},
    {field:"Score", headerName: "Score", width:200},
    {field:"Realizado", headerName: "Realizado", width:100},
  ]
  return (
    <div>
      <p>
      Agency 606 Projects Design
      </p>
      <Button
        variant="contained"
        onClick={() => router.push("/CrearTarea")}
      >Crear Tarea</Button>
      <br />
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid 
        rows={datosA}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}   
      />           
    </div>
    </div>
  )
}

export default projectDesign