//Este componente será el encargado de manejar el control para llevar correctamente al componente de contacto
import { use, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollHandler() {
  const { pathname, hash } = useLocation();
  useEffect(()=>{
    if(hash){
      const element = document.getElementById(hash.substring(1));
      if(element){
        setTimeout(()=>{
          element.scrollIntoView({behavior: 'smooth'});
        },100);
      }
    }else{
      window.scrollTo({ top:0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}