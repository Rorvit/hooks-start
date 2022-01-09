import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCallback } from "react";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary m-2" onClick={onLogOut}>
            LogOut
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}
const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.getItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary m-2"
                onClick={() => setState(!state)}
            >
                initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />{" "}
        </>
    );
};

export default MemoWithUseCallbackExample;
