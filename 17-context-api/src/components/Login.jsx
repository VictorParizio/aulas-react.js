

export default function Login({login}) {
    return (
        <>
            <button onClick={()=>{
                login('Antônio')
            }} >Login</button>
        </>
    )
}