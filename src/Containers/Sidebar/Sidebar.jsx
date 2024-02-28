import './Sidebar.css'
import data from '../../data/data.json'
import { Topics } from '../../components/Topics'

export function Sidebar(){
    // console.log(data);
    return(
        <div className="Sidebar">
            <nav>
                <Topics data ={data} />
            </nav>
        </div>
    )
}

