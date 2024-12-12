import './components/header';
import './global.css';
import './view/c1';
import './view/c2';
import './view/c3';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
    <header-component></header-component>
    <div class="carousel l2-max-height-nav">
        <c1-layout></c1-layout>
        <c2-layout></c2-layout>
        <c3-layout></c3-layout>
    </div>
</div>
`;
