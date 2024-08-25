
interface Props {
    id:string,
    children:number[]
}

type ReadonlyProps = Readonly<Props>

let  p5:ReadonlyProps ={
    id:'',
    children:[1]
}

// p5.id='2'