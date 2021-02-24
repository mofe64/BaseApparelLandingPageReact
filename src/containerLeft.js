import Headings from './containerLeftHeadings';
import Paragraph from './containerLeftParagraph';
import Search from './containerLeftSearch'
import './css/container-left.css'

const ContainerLeft = ()=> 
    <div className="container-left">
        <Headings></Headings>
        <Paragraph></Paragraph>
        <Search></Search>
    </div>

export default ContainerLeft;