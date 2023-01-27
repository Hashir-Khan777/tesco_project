import React from 'react'
import {motion} from "framer-motion"
const NavigationOpen = ({childern}) => {
    const sideLeft={
        hidden:{
            x:"10em",
            opacity:0
        },
        visible:{
            x:"200em",
            opacity:1,
            transition:{
                duration:0.4
            }
        },
        exit:{

        }
    }
  return (
    <motion.div variants={sideLeft} initial="hidden" animate="visible">
        {childern}

    </motion.div>
  )
}

export default NavigationOpen