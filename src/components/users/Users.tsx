import { UserType } from '../../redux/users-reduser'
import s from './Users.module.css'
import { v1 } from 'uuid';

export const Users = (props: { users: UserType[] }) => {
  //   props.setUsers( [
  //     {
  //         id: v1(),
  //         photoUrl: 'd',
  //         fullName: "Antonio",
  //         status: 'It is cool!',
  //         followed: true,
  //         location: {
  //             city: 'Parish',
  //             country: 'France'
  //         }
  //     },
  //     {
  //         id: v1(),
  //         photoUrl: 'd',
  //         fullName: "Merry",
  //         status: 'you are beautiful!',
  //         followed: true,
  //         location: {
  //             city: 'Italy',
  //             country: 'Rom'

  //         }
  //     },
  // ],)
 if (props.users.length === 0) {
  
 }

  return (
    <section className={s.Music}>
      {
        props.users.map((u) => {
          return <div key={u.id}>
            <span>
              <div>
                <img src={u.photoUrl} className={s.userPhoto} />
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => { }}>Follow</button>
                  : <button onClick={() => { u.id }} >Unfollow</button>}
              </div>
              <span>
                <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>
                </span>
              </span>
            </span>

          </div>
        })}
    </section>
  )
}