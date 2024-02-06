import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import { UsersPropsType } from "./UsersContainer";
import avatar from "./../../assets/image/avatar.jpg";

export class Users extends React.Component<UsersPropsType> {
  constructor(props: UsersPropsType) {
    super(props);
  }

  componentDidMount(): void {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.carrentPage}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items)
        this.props.setTotalCount(res.data.totalCount)
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((res) => this.props.setUsers(res.data.items));
  };

  render(): React.ReactNode {
    let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
      <section className={s.container}>
        <div className={s.pages}>
          {pages.map((p) => {
            return (
              <span
                className={this.props.carrentPage === p ? s.selectedPage : ""}
                onClick={() => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>

        {this.props.users.map((u) => {
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
