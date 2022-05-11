import { FaTimes } from 'react-icons/fa'

const List = ({ list, deleteList }) => {
    return(
        <div className='task'>
            <h3>Item da Lista: {list} 
                <FaTimes style={{ color: 'red' }} onClick={() => deleteList(list)} />
            </h3>
        </div>
    )
}

export default List