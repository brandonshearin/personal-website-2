import { StaticImageData } from "next/image";
import mom from "../../public/mom-grainy-4x5.jpeg";

export type PostType = {
  slug: string;
  title: string;
  date: string;
  imgSrc: StaticImageData;
  text: string;
};

export const posts: Record<string, PostType> = {
  "1": {
    slug: "1",
    title: "the cost of things",
    date: "june 23, 2024",
    imgSrc: mom,
    text: `my mom doesn't like lines, and waiting in lines, and money is often one of the primary ways she evaluates things. we went for ice cream the other night and the first remark was a scathing condescension of the line, of its length, of the way it wound through the parking lot, and of the brainless morons who were complicit in standing in such a line. her second remark was to wonder how much cash the place was making on an evening when the town had such a remarkable taste for ice cream. \n
i think its pretty common to be this way, to use money as a way to judge a thing or to describe it.  there are probably more interesting ways to participate in life than by considering the costs of things. my blind spot is almost certainly drink, rather than money. how does drink distort a man's idea of his company?  there was a Hemingway scene i recently read in "the sun also rises" where the narrator is in a restaurant with his homies, but truly he is disgusted and hateful of his companions but he begins drinking and everyone becomes really nice. everyone becomes really nice due to the poison he has taken that has fogged his perception.  the role that alcohol plays in sustaining mediocre or bad relationships is very interesting.\n
for this reason i can understand and admire someone who gives up alcohol.  but im not ready to give up meat.  the cheese burger, the fried chicken, i have yet to be humbled by the world in such a way that i can see the path for no meat but i'm closer now to seeing that it could be possible.\n`,
  },
  "2": {
    slug: "2",
    title: "still thinking about the cost of things",
    date: "june 23, 2024",
    imgSrc: mom,
    text: `there's something sad about the way everything is paid for today. i think it takes a lot of energy to think about it all. dad said his grandma only had one bill for electricity. one of the only times in the year when she had to throw some coins at someone was for electricity...  her family grew its own food and made its clothes and they just didn't have a culture of buying hundreds and hundreds of items. the more money you have the more time you spend administering it.  do expenses.  open new accounts.  wait for sales and bargains and deals.  pay bills and monitor bills and split venmo's and change phone lines and compare uber to lyft. budget. plan. save. do taxes. get a job. get fired and be unemployed. collect unemployment then get hired again. get promoted and get more money. work all day. money money money.  go to college. pick a major. pick one that makes money though. then spend it. then go to grad school. and optimize and strategize there too.  have income. have income tax. look at the compound interest. robinhood, insurance.  move to a place with a lower cost of living.  jesus christ.\n
    i understand why people want to make money so badly in america, in san francisco. here it is very scary to be poor. there is not so much help if you slip, and there is a lot of danger.  when i run through san francisco's most depressed neighborhood, i see the misery and i smell it and when i was unemployed a couple of years ago, if i didn't have a family, it is hard to guess how low i could've sunk living in that expensive hell hole with no paycheck.  unemployment didn't cover half my rent that i was already splitting three ways with my roommates. so unemployment didn't cover ⅙ of rent.\n
    we need this money because on some ancient level there is fear of that grim depression of being stranded and trapped in a place like what you can see in that part of SF.  and because we have no skills anymore.  we can't make clothes or grow food.  we just buy things. the corporations with their factories and newspapers pump plastic and metal out of the earth and sell us garbage and the smart college educated people are exploited by the big capitalists too. because they are working hard and using their attention and intelligence to invent great stories and advertisements that undermine our self esteem.  and that makes us hunger for more things to buy.  more clothes.  and then instagram is invented and it is truly, amazingly brainless and in there i see a false sliver of a wider reality and i am left feeling without the friends or the travels or the tastes of my very impressive online acquaintances.\n
    `,
  },
  "3": {
    slug: "3",
    title: "jazz",
    date: "june 26, 2024",
    imgSrc: mom,
    text: `i saw a jazz show last night with my parents.  the unc music faculty banded together and jammed in Hill Hall.  five or so teachers.  the piano man would really be gettin his kicks and he'd pass it over to the drummer and they'd both be diggin it and then the two wind instruments would jump in and blast on top some.  the conversation that the instruments had with each other, the nods that the musicians urged each other on with, the rise and fall and swing, the speeding up and slowing down, the body language and excitement of the band, their mouth scrunching and chin thrusting.  and the moments when the audience is collectively enthralled and they clap or laugh or hold their breath or release it. you don't know about that from listening to a recording. the recording doesn't translate well to real life.  if you just had the recording, you might not even realize that music can look like that when it is shared to a room with people.\n
    jazz can sound kinda chaotic like every musician in the band is thinking something slightly different.  the solos they take are really exciting for me and in those moments the idea that jazz is an american invention is evoked in me.  to witness the individual bandmate lurch up and get his turn and really give it to the audience and create something, and he might not start out knowing exactly what he's gonna do and where he's gonna go but if he finds it and stays there and brings the listeners along with him it can be an energy like a flood in the body.\n
    `,
  },
  "4": {
    slug: "4",
    title: "cross country",
    date: "june 29, 2024",
    imgSrc: mom,
    text: `a resplendent day visiting winston salem.  i walked through reynolda gardens with a friend.  the june heat hung heavy and pressed us into the earth where we belong.  we were protected from the sun by thick trees that stood quiet and still in the unmoving air. the park was empty even though it was saturday.  the gardens were holding up strong but the fields were yellowing and dry.  we sat on a bench beside the thick, primordial pond in the forest and a lot of good vibes came to me. memories from running there in high school.  \n
    i had a lot of fun on that team.  running around on hot late-summer days after being cooped up at a desk all day. after a whole day spent with my bony ass on those wooden high school seats, and a series of adults telling me what the facts are about chemistry or spanish, running feels good. it felt good to roam and explore by foot for a change, when everything else in life was done behind the wheel of a car.  the older teammates shared with the younger ones secret routes, secret creeks to cross and bridges to jump off of and abandoned houses to explore and where to steal popsicles.  that knowledge transfer between classes was a beautiful thing. reynolda possesses a power and a charm due to the history i have there. i wonder how many places i will love in this life.`,
  },
};
