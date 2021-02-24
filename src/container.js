import ContainerLeft from './containerLeft';
import ContainerRight from './containerRight';
import './css/container.css'

const container =() => 
    <div className="container">
        <ContainerLeft></ContainerLeft>
        <ContainerRight></ContainerRight>
    </div>

export default container;