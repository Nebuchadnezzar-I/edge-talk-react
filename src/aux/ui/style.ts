export function GenerateCSS(styles: any) {
    let css = '';
    for (const selector in styles) {
        css += `${selector === 'host' ? ':host' : `.${selector}`} {`;
        for (const property in styles[selector]) {
            const kebabCaseProperty = property
                .replace(/([A-Z])/g, '-$1')
                .toLowerCase();
            css += `${kebabCaseProperty}: ${styles[selector][property]};`;
        }
        css += '}';
    }
    return css;
}
