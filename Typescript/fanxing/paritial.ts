


interface Props{
    id:string,
    children:number[]
}


type PartialProps = Partial<Props>

let  p1:Props ={
    id:'',
    children:[1]
}

let p2 :PartialProps = {

}

let p3:PartialProps = {

    children:[1,2,3]
}

let p4:PartialProps = {

    id:'1'
}