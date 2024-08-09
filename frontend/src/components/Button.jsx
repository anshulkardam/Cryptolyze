export const Button = ({text}) => {
    return <div>
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none hover:shadow-blue-500 hover:transition hover:duration-200 hover:shadow-md font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2">{text}</button>
    </div>
}