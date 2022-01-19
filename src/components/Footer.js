import React from "react";
import { SocialIcon } from "react-social-icons";

export default function footer(){
        return (
                
<div className="bg-gray-100 pt-2 ">
   <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl">
      <div className="mt-2">© Copyright 2020. All Rights Reserved.</div>
      <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          					
				
		    
                <SocialIcon url="https://github.com/roshenfdo95" className="mx-1 cursor-pointer" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    				
                <SocialIcon url="https://www.linkedin.com/in/roshen-fernando-930197181/" className="mx-1 cursor-pointer" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}  />
                   
                <SocialIcon url="https://www.facebook.com" className="mx-1 cursor-pointer" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    
                <SocialIcon url="https://twitter.com/?lang=en" className="mx-1 cursor-pointer" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}  />
                    
        
      </div>
      
    </div>
  </div>
 
        )
}