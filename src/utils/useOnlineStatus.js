import { useState ,useEffect } from "react";

const useOnlineStatus = () => {

    const [onslineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
    },[]);

    return onslineStatus;
};

export default useOnlineStatus;