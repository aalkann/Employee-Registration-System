import Navbar from "../../component/Navbar/Navbar"
import ServiceCard from "../../component/Service Card/ServiceCard"

export default function HomePage(){
    return <div>
        <Navbar></Navbar>
        <ServiceCard title={"Employees"} url={'/monitoring'} />
        <ServiceCard title={"Registration"} url={'/registration'}/>
    </div>
}