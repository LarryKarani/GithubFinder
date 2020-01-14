import React, { useContext } from 'react';
import UserItem from './UsersItem';
import Spinner from '../layout/layout/Spinner';
import GithubContext from '../../contex/github/githubContex'

const Users = ( ) => {

    const githubContex = useContext(GithubContext)

    const { users, loading } = githubContex

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );

    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
