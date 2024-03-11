import { SideBarPageType } from "../../../redux/sideBar-reducer";

type SideBarPropsType = {
  sideBarDate: SideBarPageType;
};

export const SideBar = (props: SideBarPropsType) => {
  const friendsList = props.sideBarDate.sideBarDate.map((el) => (
    <li key={el.id}>{el.name}</li>
  ));

  return (
    <section>
      <h1>FRIENDS</h1>
      <ul>{friendsList}</ul>
    </section>
  );
};
