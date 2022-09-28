import React, {useContext, memo} from "react"
import { UserContext } from "../App"
import { ACTIONS } from "../App"

const Account = props => {
    const userContext = useContext(UserContext)
    console.log('account rerendered')

    return (
        <>
            <h1>Account</h1>
            <p>Hello {userContext.userState.userName}</p>
            <button onClick={() => userContext.userDispatch({type: ACTIONS.CHANGE_USERNAME, data: {newUsername: 'FUKA INNOVATIONS'} })}>Change username to FUKA VISIONS</button>
        </>
    )
}

export default memo(Account)