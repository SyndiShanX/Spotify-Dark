const root = document.querySelector(':root');
const colors = [
  '#ff0000', '#E81700', '#D12E00', '#B94600', '#A25D00', '#8B7400', '#748B00', '#5DA200', 
  '#46B900', '#2ED100', '#17E800', '#00ff00', '#17FF00', '#2EFF00', '#46FF00', '#5DFF00', 
  '#74FF00', '#8BFF00', '#A2FF00', '#B9FF00', '#D1FF00', '#E8FF00', '#ffff00', '#E8FF17', 
  '#D1FF2E', '#B9FF46', '#A2FF5D', '#8BFF74', '#74FF8B', '#5DFFA2', '#46FFB9', '#2EFFD1', 
  '#17FFE8', '#00ffff', '#17E8E8', '#2ED1D1', '#46B9B9', '#5DA2A2', '#748B8B', '#8B7474', 
  '#A25D5D', '#B94646', '#D12E2E', '#E81717'
];

(async function rainbow(interval = 100) {
  while (true) {
    for (const color of colors) {
      root.style.setProperty('--spice-button-active', color);
      await new Promise(resolve => setTimeout(resolve, interval));
    }
  }
})();