import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import { UsersPropsType } from "./UsersContainer";
import avatar from "./../../assets/image/avatar.jpg";

export class Users extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
    if (this.props.usersPage.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((res) => this.props.setUsers(res.data.items));
    }
  }
  render(): React.ReactNode {
    return (
      <section className={s.Music}>
        {this.props.usersPage.users.map((u) => {
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
                        this.props.unFollow(u.id);
                      }}
                    >
                      Follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(u.id);
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
  }
}
