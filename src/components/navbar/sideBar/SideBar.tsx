import { SideBarDateType } from "../../../redux/state"


type SideBarPropsType = {
    sideBarDate: SideBarDateType[]
}

export const SideBar = (props: SideBarPropsType) => {


    const friendsList = props.sideBarDate.map(el => <li key={el.id}>{el.name}</li>)

    return (
        <section>
            <h1>
                FRIENDS
            </h1>
            <ul>
                {friendsList}
            </ul>
        </section>
    )
}