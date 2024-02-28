import { Articles } from '../../components/Articles'
import './Main.css'
import data from '../../data/data.json'


export function Main(){
    return(
        <div className="Main">
            <Articles data ={data}/>
        </div>
    )
}