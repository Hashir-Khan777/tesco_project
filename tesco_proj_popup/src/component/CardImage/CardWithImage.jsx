import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import {motion} from "framer-motion"

import './cardwithimage.css'
const CardWithImage = ({imagePath,totalNumber,labelCard}) => {
    const[rotaion,setRotaion]=useState(0)
  return (
    <div className='card-item-container'>
                <motion.div className='card-item-main'
                initial={{y:10, opacity: 0 }}
                animate={{y:0, opacity: 1,
                  transition:{
                    duration:0.4
                  }
                 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5}} >
                    <motion.div animate={{rotate:360,transition:{duration:0.3}}} onClick={()=>setRotaion(rotaion+360)} className='image-div'>
                        <figure>
                            <img src={imagePath} alt='' className='image-card'/>
                        </figure>

                    </motion.div>
                    <div className='number-container'>
                        <Typography style={{fontSize:"3em",color:"grey",paddingRight:"0.3em"}} className="typography-number">{totalNumber}</Typography>

                    </div>

                </motion.div>
               
                    <Typography padding={2} color="grey">{labelCard}</Typography>

                

            </div>
  )
}

export default CardWithImage