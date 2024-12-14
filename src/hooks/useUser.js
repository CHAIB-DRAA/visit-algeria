// hooks/useUser.js
import { useState, useEffect } from "react";
import getUserById from "@/actions/getUserById";

export default function useUser(userId) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const userData = await getUserById(userId);
                setUser(userData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [userId]);

    return { user, loading, error };
}
