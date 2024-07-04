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
  Menu1: {
    name: '파인애플피자',
    backgroundColor: 'brown',
  },
  Menu2: {
    name: '고추바사삭순살치킨',
    backgroundColor: 'orange',
  },
  Menu3: {
    name: '빅맥버거',
    backgroundColor: 'yellow',
  },
  Menu4: {
    name: '김밥',
    backgroundColor: 'gray',
  },
  Menu5: {
    name: '신라면',
    backgroundColor: 'red',
  },
};

interface BasicData {
  Menu1: {
    name: '파인애플피자';
    backgroundColor: 'brown';
  };
  Menu2: {
    name: '고추바사삭순살치킨';
    backgroundColor: 'orange';
  };
  Menu3: {
    name: '빅맥버거';
    backgroundColor: 'yellow';
  };
  Menu4: {
    name: '김밥';
    backgroundColor: 'gray';
  };
  Menu5: {
    name: '신라면';
    backgroundColor: 'red';
  };
}

const totalElement = (object: BasicData): string => {
  let result: string = '';
  // liTags(anchorTags(`${object.Menu1}`, object.Menu1));

  for (let key in object) {
    let value = object[key as keyof BasicData].name;
    result += liTags(anchorTags(key, value));
  }

  return result;
};

root.innerHTML = `
<ul id="menu">
  ${totalElement(basicData)}
</ul>
<main id="main-target"></main>
`;

//---------------------------------------------------------------------------------
// * HTML을 대신해서 만든 HTML 작성 코드
// * React, CSR방식. 위는 렌더링용 코드.

const mainTarget = document.getElementById('main-target') as HTMLElement;

console.log(window.location.hash);

window.addEventListener('hashchange', (): void => {
  const hash = window.location.hash.substring(1);
  console.log(hash);

  mainTarget.innerHTML = `<h1>${basicData[hash as keyof BasicData].name}</h1>`;
  mainTarget.style.backgroundColor =
    basicData[hash as keyof BasicData].backgroundColor;
});
