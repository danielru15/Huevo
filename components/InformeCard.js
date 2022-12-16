import React, {useState} from 'react'
import { useRef } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography, Grid, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow , TextField, Button} from '@mui/material';;
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from "next/router";
import Grafico from './Grafico';

const InformeCard = ({datos,EliminarTarea}) => {
  const router = useRouter();
  const [Filtro, setFiltrar] = useState()
    const tableRef = useRef(null);
    //Total actividades
    let Total_Tareas = Filtro?Filtro.length: datos.length
    let Total_Tareas_Realizadas = Filtro?Filtro.filter(item => item.Realizado === true).length:datos.filter(item => item.Realizado === true).length
    let Total_Tareas_pendientes = Filtro?Filtro.filter(item => item.Realizado === false).length:datos.filter(item => item.Realizado === false).length
    let porcent_Tareas_Realizadas = (Total_Tareas_Realizadas/Total_Tareas)*100
    let porcent_Tareas_Pendientes = (Total_Tareas_pendientes/Total_Tareas) * 100
     
    
  
  return (
    <>
    <Grid container spacing={1} marginTop={2} marginBottom={4} >
    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
      <Grafico porcent_Tareas_Realizadas={porcent_Tareas_Realizadas} porcent_Tareas_Pendientes={porcent_Tareas_Pendientes}/>
    </Grid>
    </Grid>
    <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <CardContent>
                <Typography>Total Tareas</Typography>
                <Typography>{Total_Tareas}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <CardContent>
                <Typography>Total Tareas Realizadas</Typography>
                <Typography color={'green'}>{Total_Tareas_Realizadas}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <CardContent>
                <Typography>Total Tareas Pendientes</Typography>
                <Typography color={'red'}>{Total_Tareas_pendientes}</Typography>
              </CardContent>
            </Card>
  
          </Grid>
        </Grid>
        <Button
        variant="contained"
        onClick={() => router.push("/CrearTarea")}
      >Crear Tarea</Button>
        <TextField fullWidth margin="dense"   onChange={e => setFiltrar(datos.filter((dato) => dato.Nombre.toLowerCase().includes(e.target.value.toLocaleLowerCase())) )} label="Buscar" />
        <TableContainer>
        <Table l={{width:"max-content"}} aria-label="simple table" ref={tableRef}>
          <TableHead>
            <TableRow>
              <TableCell>actions</TableCell>
              <TableCell style={{position: 'sticky',left: 0,background: 'white',zIndex: 800,}}>Nombre</TableCell>
              <TableCell>Dia</TableCell>
              <TableCell>Tarea</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Realizado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Filtro?Filtro.map(dato => (
                <TableRow key={dato.id}>
                  <TableCell>
                    <ButtonGroup>
                    <IconButton aria-label="eliminar">
                      <DeleteIcon onClick={() => EliminarTarea(dato.id)} color="error"/>
                    </IconButton>
                    <IconButton aria-label="edit">
                       <EditIcon  onClick={() => router.push(`/${dato.id}`)}/>
                     </IconButton>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell style={{
                          position: 'sticky',
                          left: 0,
                          background: 'white',
                          zIndex: 800,
                  }}>{dato.Nombre}</TableCell>
                  <TableCell>{dato.Dia}</TableCell>
                  <TableCell>{dato.Tarea}</TableCell>
                  <TableCell>{dato.Score}</TableCell>
                  <TableCell>{dato.Realizado === true ? 'Completada' : 'Por completar' }</TableCell>
                </TableRow>
              ))
              : 
              datos.map(dato => (
                <TableRow key={dato.id}>
                  <TableCell>
                    <ButtonGroup>
                    <IconButton aria-label="eliminar">
                      <DeleteIcon onClick={() => EliminarTarea(dato.id)} color="error"/>
                    </IconButton>
                    <IconButton aria-label="edit">
                       <EditIcon  onClick={() => router.push(`/${dato.id}`)}/>
                     </IconButton>
                    </ButtonGroup>
                  </TableCell>
                  <TableCell style={{
                          position: 'sticky',
                          left: 0,
                          background: 'white',
                          zIndex: 800,
                  }}>{dato.Nombre}</TableCell>
                  <TableCell>{dato.Dia}</TableCell>
                  <TableCell>{dato.Tarea}</TableCell>
                  <TableCell>{dato.Score}</TableCell>
                  <TableCell>{dato.Realizado === true ? 'Completada' : 'Por completar' }</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
    
    
  )
}

export default InformeCard