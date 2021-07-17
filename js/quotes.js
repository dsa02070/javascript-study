const quotes = [{
        quote: "위인이나 위인의 조건에 대한 논쟁으로 시간을 낭비말라. 스스로 위인이 되라.",
        author: "마르쿠스 아우렐리우스",
    },
    {
        quote: "인생은 하나의 치명적 통증이며 아주 전염성이 강한 통증이다.",
        author: "올리버 웬델 홈스",
    },
    {
        quote: "만물은 변화다. 우리의 삶이란 우리의 생각이 변화를 만드는 (과정)이다.",
        author: "마르쿠스 아우렐리우스",
    },
    {
        quote: "인생은 거울과 같으니, 비친 것을 밖에서 들여다 보기 보다 먼저 자신의 내면을 살펴야 한다.",
        author: "월리 '페이머스' 아모스",
    },
    {
        quote: "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
        author: "벤 스타인",
    },
    {
        quote: "모두가 오래 살고 싶어 하지만 아무도 늙고 싶어 하지는 않는다.",
        author: "벤자민 프랭클린",
    },
    {
        quote: "젊은이들은 세월이 어떻게 생각하고 느끼는지 알턱이 없다. 그러나 노인이 젊은 시절을 망각하는 것은 죄이다.",
        author: "조앤 K. 롤링",
    },
    {
        quote: "우리가 노력 없이 얻는 거의 유일한 것은 노년이다.",
        author: "글로리아 피처",
    },
    {
        quote: "행복한 삶의 비밀은 올바른 관계를 형성하고 그것에 올바른 가치를 매기는 것이다.",
        author: "노먼 토머스",
    },
    {
        quote: "인생에는 서두르는 것 말고도 더 많은 것이 있다.",
        author: "마하트마 간디",
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

let randomQuote = Math.floor(Math.random() * quotes.length);
console.log(quotes.length)
console.log(quotes[randomQuote].quote)

quote.innerText = quotes[randomQuote].quote
author.innerText = quotes[randomQuote].author