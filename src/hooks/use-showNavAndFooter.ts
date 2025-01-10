import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

export function useHideComponents() {
    const hiddenRoutes = [
        "/login",
        "/register",
        "/payment/success",
        "/payment/failure",
    ];
    const pathname = usePathname();
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        const isHidden = hiddenRoutes.some((route) =>
            pathname.startsWith(route)
        );
        setShowComponent(!isHidden);
    }, [pathname, hiddenRoutes]);

    return showComponent;
}
