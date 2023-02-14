import React, {useContext} from 'react';
import {CurrentUserContext} from "./Context";

const UpdateAnObjectViaContext = () => {
    const {name, email} = useContext(CurrentUserContext);
    return (
        <form>
            <label htmlFor="username">
                username:
                {/*<input type="text" id={'username'} onChange={(e) => }/>*/}
            </label>
        </form>
    );
};

export default UpdateAnObjectViaContext;