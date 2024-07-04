const root: HTMLElement = document.getElementById('root') as HTMLDivElement;

console.log(root);

const anchorTags = (): string => {
  let result: string = `<a href="#">메뉴</a>`;
  return result;
};

const liTags = (children: string): string => {
  let result: string = `<li>${children}</li>`;
  return result;
};

root.innerHTML = `
<ul>
  ${liTags(anchorTags())}
  ${liTags(anchorTags())}
  ${liTags(anchorTags())}
</ul>
`;
