import React, { useRef, useEffect } from 'react';

function MyComponent() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus(); // This will focus the input when the component mounts
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Focus me on mount" />
        </div>
    );
}

export default MyComponent;
