
const Info = ({ info }) => {
    console.log(info.nome)
  return (
    <div className='task'>
        <h3>{info.nome}</h3>
    </div>
  )
}

export default Info