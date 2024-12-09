export const MoveToNextWindow = () => {
    const container = document.querySelector('.carousel');
    const scrollAmount = window.innerWidth;
    container?.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

export const MoveToPrevWindow = () => {
    const container = document.querySelector('.carousel');
    const scrollAmount = window.innerWidth;
    container?.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}
