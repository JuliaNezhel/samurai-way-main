import { UserType } from "../../redux/users-reduser";
import s from "./Users.module.css";
import { v1 } from "uuid";
import axios from "axios";
import { UsersPropsType } from "./UsersContainer";
import avatar from "./../../assets/image/avatar.jpg";

export const Users = (props: UsersPropsType) => {
  if (props.usersPage.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => props.setUsers(res.data.items));
  }

  return (
    <section className={s.Music}>
      {props.usersPage.users.map((u) => {
        return (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : avatar}
                  className={s.userPhoto}
                />
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
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                </span>
              </span>
            </span>
          </div>
        );
      })}
    </section>
  );
};
