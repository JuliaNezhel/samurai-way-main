import React from "react";
import s from "./Users.module.css";
import avatar from "./../../assets/image/avatar.jpg";
import { UserType } from "../../redux/users-reduser";
import { NavLink } from "react-router-dom";

type UType = {
  carrentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChanged: (p: number) => void;
  users: UserType[];
  follow: (userId: number) => void;
  unFollow: (userId: number) => void;
  isFetching?: any;
  toggIsFollowingProgress: (isFollowingProgress: boolean, u: number) => void;
  followingInProgress: number[];
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
              key={p}
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
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : avatar}
                    className={s.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unFollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
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
