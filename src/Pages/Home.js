import Business from "../Components/Business/Business";
import Client from "../Components/Client/Client";
import Helping from "../Components/Helping/Helping";
import Sliders from "../Components/Sliders/Sliders";
import Steps from "../Components/Steps/Steps";
import Working from "../Components/Working/Working";
import Logo from "../Components/Logo/Logo";
// import Contact from "./Contact";

function Home() {
    return (
        
        
        <div>
            <div className="pt-4 p-4" style={{backgroundColor:'#E5E6E1'}}>
                <h1> 
                   Home
                </h1>
            </div>
            <Sliders></Sliders>
            <Business></Business>
            <Helping></Helping>
            <Steps></Steps>
            <Working></Working>
            <Client></Client>
            <Logo></Logo>
            {/* <Contact></Contact> */}
        </div>
    )

}

export default Home;