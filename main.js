let items = [
  {
    id: "20180119",
    name: "Depression",
    imgur: "jw96vci",
    time: 2.3,
    twitter: "954100933096435712"
  },
  {
    id: "20180105",
    name: "迎春",
    imgur: "1qSHdJq",
    time: 3.8,
    twitter: "948932127252361219"
  },
  {
    id: "20171220",
    name: "Send",
    imgur: "Q1lxbP9",
    time: 1.5,
    twitter: "943134320339779585"
  },
  {
    id: "20171201",
    name: "Accelerator",
    imgur: "GWGVyqo",
    time: 1.0,
    twitter: "936273726139637760"
  },
  {
    id: "20171128",
    name: "Pasta",
    imgur: "pFcOKty",
    time: 1.8,
    twitter: "935165514115977216"
  },
  {
    id: "20171114",
    name: "Chain of Pain",
    imgur: "2WT2YoA",
    time: 1.0,
    twitter: "930090313988718592"
  },
  {
    id: "20171031",
    name: "Happy Halloween!",
    imgur: "RBhrZ3y",
    time: 3.7,
    twitter: "925017213173559296"
  },
  {
    id: "20171010",
    name: "Candy Storm",
    imgur: "SZGGtFj",
    time: 1.2,
    twitter: "917407376021504000"
  },
  {
    id: "20171003",
    name: "Particle Racer 2",
    imgur: "PeEU9RJ",
    time: 0.9,
    twitter: "914897309221003264"
  },
  {
    id: "20170922",
    name: "Particle Racer",
    imgur: "elRk0li",
    time: 1.2,
    twitter: "910931550102884352"
  }
];

items.map( ( item, index ) => {
  let a = document.createElement( "a" );
  container.appendChild( a );
  a.href = "https://github.com/fms-cat-eom/" + item.id;

  if ( index === 0 ) {
    a.style.gridColumn = "1 / 3";
    a.style.gridRow = "1 / 3";
  }

  let img = document.createElement( "img" );
  a.appendChild( img );
  img.src = "https://i.imgur.com/" + item.imgur + ".gif";
} );

let wipScroll = 0.0;
let wipPlay = false;

let wipUpdate = () => {
  if ( wipPlay ) {
    let v = ( +new Date() % 100 ) < 50
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
  let y = event.deltaY;
  wipScroll = Math.min( Math.max( wipScroll + y * 0.0001, 0.0 ), 1.0 );
} );