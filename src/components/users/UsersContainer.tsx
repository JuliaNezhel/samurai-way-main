import s from './Users.module.css'
import { connect } from 'react-redux';
import { followAC, setUsersAC } from '../../redux/users-reduser';
import { unFollowAC } from './../../redux/users-reduser';
import { Users } from './Users';

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)