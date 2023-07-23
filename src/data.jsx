import { sculptureList } from './data'

export default function Gallery() {
  let index = 0;


  function handleClick() {
    index = index + 1; 
  }

  let sculpture = sculptureList[index]

  console.log(sculptureList)

  return(
    <>
    <button onClick={handleClick}>
      Next
    </button>
    <h2>
      <i>{sculpture.name}</i>by{sculpture.artist}
    </h2>
    <h3>
      <img 
      src={sculpture.url} 
      alt={sculpture.alt} />
    </h3>
    <p>
      {sculpture.description}
    </p>
    </>
  )
}
