import FormInput from "./FormInput"

const FormLogin = () => {
    return (
        <div className="bg-white flex flex-col p-5 rounded h-fit w-96">
            <div className="text-center">
            <h2 className="font-bold">Halaman Login</h2>
            <h6 className="text-gray-500">Silahkan masukan data Anda</h6>
            </div>
            <FormInput />
        </div>
    )
}

export default FormLogin;