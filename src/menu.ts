const root: HTMLElement = document.getElementById('root') as HTMLDivElement;

console.log(root);

const anchorTags = (href: string, text: string): string => {
  let result: string = `<a href="#${href}">${text}</a>`;
  return result;
};

const liTags = (children: string): string => {
  let result: string = `<li>${children}</li>`;
  return result;
};

root.innerHTML = `
<ul>
  ${liTags(anchorTags('Menu1', '피자'))}
  ${liTags(anchorTags('Menu2', '치킨'))}
  ${liTags(anchorTags('Menu3', '버거'))}
</ul>
`;
