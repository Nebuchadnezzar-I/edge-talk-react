export const swipeContainerNext = (
    refContainer: React.RefObject<HTMLDivElement>
) => {
    if (!refContainer.current) return;

    const container = refContainer.current;
    const containerWidth = container.offsetWidth; // Use offsetWidth instead of window.innerWidth
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    const nextScrollPosition = Math.min(
        container.scrollLeft + containerWidth,
        maxScrollLeft
    );

    container.scrollTo({
        left: nextScrollPosition,
        behavior: 'smooth',
    });
};

export const swipeContainerPrev = (
    refContainer: React.RefObject<HTMLDivElement>
) => {
    if (!refContainer.current) return;

    const container = refContainer.current;
    const containerWidth = container.offsetWidth; // Use offsetWidth instead of window.innerWidth
    const prevScrollPosition = Math.max(
        container.scrollLeft - containerWidth,
        0
    );

    container.scrollTo({
        left: prevScrollPosition,
        behavior: 'smooth',
    });
};
