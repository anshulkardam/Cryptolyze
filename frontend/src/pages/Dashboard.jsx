import { useUser } from "@clerk/clerk-react"

export const Dashboard = () => {
    const { user } = useUser();
    console.log(user)
    return <div>
        <h1>Dashboard mf! {user?.firstName}</h1>
        </div>
}