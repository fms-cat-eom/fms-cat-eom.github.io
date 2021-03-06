const items = [
  {
    id: "20181026",
    name: "tukareta",
    imgur: "OHXQGit",
    twitter: "1055848684410159109"
  },
  {
    id: "20181012",
    name: "DeltaTime Multiplier x0.0",
    imgur: "ojBV1nv",
    twitter: "1050450536720293889"
  },
  {
    id: "20180928",
    name: "Diversity",
    imgur: "iIHBVHR",
    twitter: "1045758800009945088"
  },
  {
    id: "20180914",
    name: "The Okonomiyaki Shitpost",
    imgur: "YgLp06K",
    twitter: "1040258456945664001"
  },
  {
    id: "20180831",
    name: "Summer Is Gone",
    imgur: "AxlMMbt",
    twitter: "1035298175085502464"
  },
  {
    id: "20180803",
    name: "Trail 3",
    imgur: "QbhnLFN",
    twitter: "1025124374993547264"
  },
  {
    id: "20180720",
    name: "Trail 2",
    imgur: "3zzztEd",
    twitter: "1020112614628577280"
  },
  {
    id: "20180706",
    name: "Trail",
    imgur: "K3EjBq9",
    twitter: "1014950212496838656"
  },
  {
    id: "20180622",
    name: "Voxel Tunnel",
    imgur: "syCoTld",
    twitter: "1009866433692483584"
  },
  {
    id: "20180608",
    name: "TouchDesigner Experiment",
    imgur: "IyKF3CJ",
    twitter: "1005054748196626432"
  },
  {
    id: "20180525",
    name: "Instance",
    imgur: "VeOGW9I",
    twitter: "999681191862153216"
  },
  {
    id: "201804511",
    name: "The Simpler Solution",
    imgur: "Zg3K709",
    twitter: "994611292248854528"
  },
  {
    id: "20180427",
    name: "Disorder",
    imgur: "oqumTJI",
    twitter: "989519912828715009"
  },
  {
    id: "20180413",
    name: "Triangle Jellyfish",
    imgur: "mjfYcQE",
    twitter: "984452497157767168"
  },
  {
    id: "20180330",
    name: "Deadline",
    imgur: "5lUwI8v",
    twitter: "979706867151667201"
  },
  {
    id: "20180316",
    name: "Vec",
    imgur: "18R058N",
    twitter: "974312063978766336"
  },
  {
    id: "20180302",
    name: "Starfield 2048",
    imgur: "yeQFNgC",
    twitter: "969230505768992770"
  },
  {
    id: "20180216",
    name: "Theta",
    imgur: "qcV2K6T",
    twitter: "964164978927312896"
  },
  {
    id: "20180202",
    name: "Procedure",
    imgur: "OtYkeUQ",
    twitter: "959086299096297472"
  },
  {
    id: "20180119",
    name: "Depression",
    imgur: "jw96vci",
    twitter: "954100933096435712"
  },
  {
    id: "20180105",
    name: "迎春",
    imgur: "1qSHdJq",
    twitter: "948932127252361219"
  },
  {
    id: "20171220",
    name: "Send",
    imgur: "Q1lxbP9",
    twitter: "943134320339779585"
  },
  {
    id: "20171201",
    name: "Accelerator",
    imgur: "GWGVyqo",
    twitter: "936273726139637760"
  },
  {
    id: "20171128",
    name: "Pasta",
    imgur: "pFcOKty",
    twitter: "935165514115977216"
  },
  {
    id: "20171114",
    name: "Chain of Pain",
    imgur: "2WT2YoA",
    twitter: "930090313988718592"
  },
  {
    id: "20171031",
    name: "Happy Halloween!",
    imgur: "RBhrZ3y",
    twitter: "925017213173559296"
  },
  {
    id: "20171010",
    name: "Candy Storm",
    imgur: "SZGGtFj",
    twitter: "917407376021504000"
  },
  {
    id: "20171003",
    name: "Particle Racer 2",
    imgur: "PeEU9RJ",
    twitter: "914897309221003264"
  },
  {
    id: "20170922",
    name: "Particle Racer",
    imgur: "elRk0li",
    twitter: "910931550102884352"
  },
  {
    id: "20170905",
    name: "Instinct",
    imgur: "XUYySeN",
    twitter: "904741403967733760"
  },
  {
    id: "20170822",
    name: "Particloscope",
    imgur: "HUKi8j6",
    twitter: "899651131298664448"
  },
  {
    id: "20170808",
    name: "Block-matching experiment",
    imgur: "2k2XQ2k",
    twitter: "894577434737098752"
  },
  {
    id: "20170725",
    name: "Advanced Vertex Deformer",
    imgur: "f6xwEki",
    twitter: "889501092463075328"
  },
];

items.map( ( item, index ) => {
  const a = document.createElement( "a" );
  container.appendChild( a );
  a.href = "https://github.com/fms-cat-eom/" + item.id;

  if ( index === 0 ) {
    a.style.gridColumn = "span 2";
    a.style.gridRow = "span 2";
  }

  const img = document.createElement( "img" );
  a.appendChild( img );
  img.src = "https://i.imgur.com/" + item.imgur + ".gif";
} );

let wipScroll = 0.0;
let wipPlay = false;

const wipUpdate = () => {
  if ( wipPlay ) {
    const v = ( +new Date() % 100 ) < 50
    wip.src = "images/wip" + ( v ? "1" : "2" ) + ".png";
    wip.style.bottom = "0px";
    wip.style.width = ( 128.0 + 32.0 * Math.random() ) + "px";
    wip.style.transform = "rotate(" + ( Math.random() * 20.0 - 15.0 ) + "deg)";
  } else {
    wip.src = "images/wip0.png";
    wip.style.bottom = ( -60.0 * ( 1.0 - wipScroll ) ) + "px";
    wip.style.width = "96px";
    wip.style.transform = "rotate(" + ( 10.0 - 15.0 * wipScroll ) + "deg)";
  }

  requestAnimationFrame( wipUpdate );
};
wipUpdate();

wip.addEventListener( "mouseenter", () => {
  wipPlay = true;
} );

wip.addEventListener( "mouseleave", () => {
  wipPlay = false;
} );

window.addEventListener( "wheel", ( event ) => {
  const y = event.deltaY;
  wipScroll = Math.min( Math.max( wipScroll + y * 0.0001, 0.0 ), 1.0 );
} );