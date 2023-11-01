

type SideBarPropsType = {
    sideBarDate: SideBarDateType[]
}

export type SideBarDateType = {
    name: string
    id: number
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