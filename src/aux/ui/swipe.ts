export const MoveToNextWindow = () => {
    const container = document.querySelector('.carousel');
    if (container) {
        const scrollAmount = window.innerWidth;
        const currentScrollLeft = container.scrollLeft;
        const newScrollLeft =
            Math.ceil(currentScrollLeft / scrollAmount) * scrollAmount;

        container.scrollTo({
            left: newScrollLeft + scrollAmount,
            behavior: 'smooth',
        });
    }
};

export const MoveToPrevWindow = () => {
    const container = document.querySelector('.carousel');
    if (container) {
        const scrollAmount = window.innerWidth;
        const currentScrollLeft = container.scrollLeft;

        const newScrollLeft =
            Math.round(currentScrollLeft / scrollAmount) * scrollAmount;

        container.scrollTo({
            left: newScrollLeft - scrollAmount,
            behavior: 'smooth',
        });
    }
};
