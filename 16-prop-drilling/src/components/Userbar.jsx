import Login from "./Login"
export default function Userbar({usuario, login}) {
    return (
        <>
            <hr />
            Usuário: {usuario}
            <hr />
            <Login login={login}/>
        </>
    )
}