import { UserType } from "../../redux/users-reduser";
import s from "./Users.module.css";
import { v1 } from "uuid";
import axios from "axios";
import { UsersPropsType } from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
  // debugger;
  if (props.usersPage.users.length === 0) {
    props.setUsers([
      {
        id: v1(),
        photos: {
          large: "",
          small: "",
        },
        name: "Antonio",
        status: "It is cool!",
        followed: true,
        location: {
          city: "Parish",
          country: "France",
        },
      },
      {
        id: v1(),
        photos: {
          large: "",
          small: "",
        },
        name: "Merry",
        status: "you are beautiful!",
        followed: true,
        location: {
          city: "Italy",
          country: "Rom",
        },
      },
    ]);
  }

  // if (props.usersPage.users.length === 0) {
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res =>  res)
  // }

  return (
    <section className={s.Music}>
      {props.usersPage.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.photos.small} className={s.userPhoto} />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unFollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                )}
              </div>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>
                </span>
              </span>
            </span>
          </div>
        );
      })}
    </section>
  );
};
