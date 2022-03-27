btn.onclick = ()=>{
    let data = 'hello'
    let page = window.open('http://localhost:9999','frank')
    page.postMessage(data,'http://localhost:9999')
}
window.addEventListener('message', (e) => {
    console.log('a.com')
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





