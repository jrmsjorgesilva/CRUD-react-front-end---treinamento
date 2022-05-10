
const List = ({ list }) => {
    return(
        <div className='task'>
            <h3>Item da Lista {list.id}: {list.categoria}</h3>
        </div>
    )
}

export default List