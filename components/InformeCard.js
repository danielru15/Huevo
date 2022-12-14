import React, {useState} from 'react'

const InformeCard = ({datos}) => {
    const Nombre = [...new Set(datos.map((Val) => Val.Nombre))];

    //Total actividades
    let Total_Contratado = filtro?filtro.reduce(
        (sum, value) => typeof value.ValorTotalContratado === "number"? sum + value.ValorTotalContratado: sum, 0):datosMaestro.reduce(
          (sum, value) => typeof value.ValorTotalContratado === "number"? sum + value.ValorTotalContratado: sum, 0)
          
  return (
    <div>InformeCard</div>
  )
}

export default InformeCard