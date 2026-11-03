import {motion,useReducedMotion} from 'framer-motion';
export default function Reveal({children,className=''}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.5}}>{children}</motion.div>}
