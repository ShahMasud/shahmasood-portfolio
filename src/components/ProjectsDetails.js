import img1 from "../assets/images/zimo-1.png"
import tiger1 from "../assets/images/tiger1.png"
import hopiumbet from "../assets/images/hopiumbet-1.png"
import melo from "../assets/images/melo-1.png"
import kereks from "../assets/images/kereks-1.png"

const ProjectsDetails =[
    {title:"THE EMPIRE OF TIGER", desc:"The Empire of Tiger: Exclusive NFT haven with captivating hand-drawn art on Ethereum's blockchain. Join a community of investors for unique themes like 'Outlaws' and 'Black Souls.' Elevate investments with distinct elite gangsters, merging artistry and technology in a creative NFT collection.", skills:"ReactJS/Bootstrap/CSS", link:"https://theempireoftiger.netlify.app/", img: tiger1},
    {title:"LUV", desc:"LUV is a user-friendly website that lets you earn rewards by putting your cryptocurrencies to work. It's easy – just choose the coins you want to stake, and LUV takes care of the rest. You can watch your earnings grow on a dashboard. LUV makes crypto more exciting and accessible, helping you embrace the future of finance.", skills:"ReactJS/Bootstrap/CSS", link:"https://stakev3.luvprotocol.com/", img:melo },
    {title:"HOPIUMBET", desc:"A revolutionary platform entries - sellers world wide. Connecting users from accross the globe to facilitate life's most important personal transactions.", skills:"Mern Stack/Material UI", link:"http://185.193.126.26:3000/" , img: hopiumbet}
]

const ProjectsDetails2 =[
    {title:"ZIMO PRO", desc:"A revolutionary platform entries - sellers world wide. Connecting users from accross the globe to facilitate lif's most important personal transactions.", skills:"NextJS/Tailwind CSS", link:"https://zimopro.com/", img: img1},
    {title:"KEREKS STAKING", desc:"Kereks Staking is a Next.js website introducing Solana's blockchain finance with visuals and real-time staking. It offers an interactive introduction to Solana's blockchain finance. Explore it for an engaging glimpse into decentralized finance's potential. ", skills:"NextJS/Material UI/CSS", img:kereks},
]

const ProjectsDetails3 =[
    ...ProjectsDetails,
    ...ProjectsDetails2
]
export {ProjectsDetails, ProjectsDetails2, ProjectsDetails3};
