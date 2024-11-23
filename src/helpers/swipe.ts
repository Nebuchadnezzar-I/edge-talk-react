export const swipeContainerNext = (
    refContainer: React.RefObject<HTMLDivElement>
) => {
    if (!refContainer.current) return;
    refContainer.current.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth',
    });
};

export const swipeContainerPrev = (
    refContainer: React.RefObject<HTMLDivElement>
) => {
    if (!refContainer.current) return;
    refContainer.current.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth',
    });
};
