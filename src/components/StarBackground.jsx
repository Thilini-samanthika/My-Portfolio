import { useMemo } from 'react';
export default function StarBackground(){
 const stars=useMemo(()=>Array.from({length:36},(_,i)=>({left:`${(i*73.3)%100}%`,top:`${(i*41.7)%100}%`,delay:`${(i%9)*.35}s`,size:i%5===0?3:2})),[]);
 return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">{stars.map((s,i)=><span key={i} className="portfolio-star absolute rounded-full bg-indigo-500/45 dark:bg-white/60" style={{left:s.left,top:s.top,width:s.size,height:s.size,animationDelay:s.delay}}/>)}</div>;
}
