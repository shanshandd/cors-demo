btn.onclick = ()=>{
    let data = 'hello'
    let page = window.open('http://frank.com:9999','frank')
    page.postMessage(data,'http://frank.com:9999')
}
window.addEventListener('message', (e) => {
    console.log('qq.com')
    console.log(e.data)
})

// const xml = new XMLHttpRequest()
// xml.open('GET', 'aa.json')
// xml.onreadystatechange = () => {
//     if (xml.readyState === 4 && xml.status === 200) {
//         console.log(xml.response)
//     }
// }

// xml.send();





