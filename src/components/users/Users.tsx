import React from "react";
import s from "./Users.module.css";
import avatar from "./../../assets/image/avatar.jpg";
import { UserType } from "../../redux/users-reduser";

type UType = {
  carrentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChanged: (p: number) => void;
  users: UserType[];
  follow: (userId: string) => void;
  unFollow: (userId: string) => void;
  isFetching?:any
};

export const Users = (props: UType) => {
  let pageCount = Math.ceil(props.totalCount / props.pageSize);

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
              className={props.carrentPage === p ? s.selectedPage : ""}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => {
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
