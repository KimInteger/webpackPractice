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

const basicData: BasicData = {
  Menu1: '파인애플피자',
  Menu2: '고추바사삭순살치킨',
  Menu3: '빅맥버거',
  Menu4: '참깨라면',
};

interface BasicData {
  Menu1: '파인애플피자';
  Menu2: '고추바사삭순살치킨';
  Menu3: '빅맥버거';
  Menu4: '참깨라면';
}

const totalElement = (object: BasicData): string => {
  let result: string = '';
  // liTags(anchorTags(`${object.Menu1}`, object.Menu1));

  for (let key in object) {
    let value = object[key as keyof BasicData];
    result += liTags(anchorTags(key, value));
  }

  return result;
};

root.innerHTML = `
<ul>
  ${totalElement(basicData)}
</ul>
`;

//---------------------------------------------------------------------------------
// * HTML을 대신해서 만든 HTML 작성 코드
// * React, CSR방식. 위는 렌더링용 코드.
