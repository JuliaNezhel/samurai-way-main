import React, { useState } from "react";
import s from "./Users.module.css";
import avatar from "./../../assets/image/avatar.jpg";
import { UserType } from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

type UType = {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChanged: (p: number) => void;
  users: UserType[];
  follow: (userId: number) => void;
  unFollow: (userId: number) => void;
  isFetching?: any;
  toggleIsFollowingProgress: (isFollowingProgress: boolean, u: number) => void;
  followingInProgress: number[];
};

export const Users = (props: UType) => {
  let pageCount = Math.ceil(props.totalCount / props.pageSize);

  let pages: number[] = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  let [startIndexSl, setIndex] = useState(0);
  let [endIndexSl, setEndIndex] = useState(10);

  const pageSize = 10; // Количество кнопок пагинации, которые вы хотите отобразить одновременно
  const startIndex = (startIndexSl - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, pages.length);

  return (
    <section className={s.container}>
      <div className={s.pages}>
        {pages.slice(startIndexSl, endIndexSl).map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? s.selectedPage : ""}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
        {endIndex < pages.length && <span className={s.ellipsis} >...</span>}
        {endIndex < pages.length && (
          <span
            className={s.page}
            onClick={() => {
              props.onPageChanged(pages.length);
            }}
          >
            {pages.length}
          </span>
        )}
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
