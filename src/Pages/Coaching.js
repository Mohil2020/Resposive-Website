
import Logo from "../Components/Logo/Logo";
import Steps from "../Components/Steps/Steps";
import Working1 from "../Components/working1/Working1";

import Prices from "./Prices";


function Coaching() {
    return(
        <div>
             <div className="pt-4 p-4" style={{backgroundColor:'#E5E6E1'}}>
                <h1> 
                   Coaching
                </h1>
            </div>
            <Steps></Steps>
            {/* <Working></Working> */}
          <Working1></Working1>
            <Logo></Logo>
            <Prices></Prices>
            
            
        </div>
    )
    
}

export default Coaching;