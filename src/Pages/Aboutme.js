import Client from "../Components/Client/Client";
import Helping from "../Components/Helping/Helping";
import Work2 from "../Components/Work2/Work2";
import Working from "../Components/Working/Working";

function Aboutme() {
    return(
       <div>
            <div className="pt-4 p-4" style={{backgroundColor:'#E5E6E1'}}>
                <h1> 
                   About me
                </h1>
            </div>


            <Helping></Helping>
            {/* <Working></Working> */}
            <Work2></Work2>
            <Client></Client>
       </div> 
    )
}

export default Aboutme;