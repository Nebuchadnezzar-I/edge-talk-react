export const SwipeNext = (container: React.RefObject<HTMLDivElement>) => {
    return new Promise((resolve) => {
        if (!container.current) return;
        container.current.scrollBy({
            left: container.current.clientWidth,
            behavior: "smooth",
        });
        setTimeout(() => resolve(1), 240);
    });
}

export const SwipePrev = (container: React.RefObject<HTMLDivElement>) => {
    return new Promise((resolve) => {
        if (!container.current) return;
        container.current.scrollBy({
            left: -container.current.clientWidth,
            behavior: "smooth",
        });
        setTimeout(() => resolve(1), 240);
    });
}
