
    window.addEventListener('message', (e) => {
        console.log(e.origin)
        if(e.origin !== 'http://qq.com:8888')
        return;
        console.log('frank.com')
        console.log(e.data)
    })
    
    window.opener.postMessage('Nice to see you', 'http://qq.com:8888');

// const xml = new XMLHttpRequest()
// xml.open('GET', 'http://qq.com:8888/aa.js')
// // xml.withCredentials = true;
// xml.onreadystatechange = () => {
//     if (xml.readyState === 4 && xml.status === 200) {
//         console.log(xml.response)
//     }
// }
// xml.send();

// let script = document.createElement('script');
// let functionName = Math.random()
// script.src = `http://qq.com:8888/aa.js?functionName=${functionName}`
// document.head.appendChild(script)
// window[functionName] = (data)=>{
//     console.log(data)
// }
// function jsonp(url){
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement('script');
//         let functionName = Math.random();
//         script.src = `${url}?callback=${functionName}`
//         document.head.appendChild(script)
//         window[functionName] = (data)=>{
//             resolve(data)
//         }
//         script.onload = ()=>{
//             script.remove()
//         }
//         script.onerror = (err)=>{
//             reject(err)
//         }
//     })
// }
// jsonp('http://qq.com:8888/aa.js').then((data)=>{
//     console.log(data)
// })





