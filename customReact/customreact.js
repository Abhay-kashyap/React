function customRender(reactElement,Container){
// const domElement=document.createElement(reactElement.type);
// domElement.innerHTML=reactElement.children;
// domElement.setAttribute('href',reactElement.props.href);
// domElement.setAttribute('target',reactElement.props.target);
// Container.appendChild(domElement);
const domElement=document.createElement(reactElement.type);
domElement.innerHTML=reactElement.children;
const props=reactElement.props;
for (const prop in props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
}
Container.appendChild(domElement)
}
// function customRender2(reactElement2,Container2){
// const domElement=document.createElement(reactElement2.type);
// domElement.innerHTML=reactElement2.children;
// domElement.setAttribute('src',reactElement2.props.src);
// domElement.setAttribute('alt',reactElement2.props.alt);
// domElement.setAttribute('height',reactElement2.props.height);
// domElement.setAttribute('width',reactElement2.props.width)
// Container2.appendChild(domElement)
// }
const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',

    },
    children: "Click me to visit google"
}
// const reactElement2={
//     type:'img',
//     props:{
//         src:'https://cdn-imgix.headout.com/tour/19364/TOUR-IMAGE/a0f87f7e-434d-4c3c-9584-f7ee351d5f64-10432-dubai-img-worlds-of-adventure---uae-resident-offer-01.jpg?auto=format&w=713.0666666666667&h=458.4&q=90&fit=crop&ar=14%3A9&crop=faces',
//         alt:'spiderman',
//         height:'300px',
//         width:'400px'
//     },
//     children:'this is image'
// }
const mainContainer=document.getElementById('root');

customRender(reactElement,mainContainer);

// customRender2(reactElement2,mainContainer);