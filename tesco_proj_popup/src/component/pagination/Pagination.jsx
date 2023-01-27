import React, { useEffect, useState } from 'react'
import {Pagination} from '@mui/material'
import service from '../../services'
import { resultCellData } from '../../utils/fakedata/fakedata'
import { topicsCellData } from '../../utils/fakedata/fakedata'
const PaginationAdd = ({setProducts,rawData}) => {
    const pageSize=4
    const[pagination,setPagination]=useState({
        count:0,
        from:0,
        to:pageSize,
        raw:rawData
       
    })
    // console.log(pagination.raw)
    useEffect(()=>{
        service.getData({from:pagination.from,to:pagination.to,raw:pagination.raw}).then(response=>{
            setPagination({...pagination,count:response.count})
            setProducts(response.data)
            
        })
    },[pagination.from,pagination.to])

    const handlePageChange=(even,page)=>{
        const from=(page-1)*pageSize
        const to=(page-1)*pageSize+pageSize
        setPagination({...pagination,from:from,to:to})

    }
  return (
    <>
    <Pagination
    count={Math.ceil(pagination.count/pageSize)}
    onChange={handlePageChange}
    />
    </>
  )
}

export default PaginationAdd