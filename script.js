var users = [
    {
        pics:{
            profile:'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            cover:'https://images.unsplash.com/photo-1636208640803-6a443f9676d4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        messages:7,
        location:'delhi, india',
        name:'vanshika',
        age:27,
        interests:[
            {
                name:'music',
                i:' <i class="ri-music-2-line text-white"></i>'
            },
            {
                name:'writing',
                i:' <i class="ri-quill-pen-line text-white"></i>'
            },
        ],
        isFriend:false,
        bio:'i am  looking for an men who has their own business, that when i took divorce then i can get hid half property'
    },
    {
        pics:{
            profile:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            cover:'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        messages:18,
        location:'chandigarh, india',
        name:'kavya',
        age:22,
        interests:[
            {
                name:'writing',
                i:' <i class="ri-quill-pen-line text-white"></i>'
            },
        ],
        isFriend:false,
        bio:'i am  looking for an men who has their own business, that when i took divorce then i can get hid half property'
    },
    {
        pics:{
            profile:'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            cover:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        messages:7,
        location:'new york, america',
        name:'nitika',
        age:19,
        interests:[
            {
                name:'music',
                i:' <i class="ri-music-2-line text-white"></i>'
            },
            {
                name:'writing',
                i:' <i class="ri-quill-pen-line text-white"></i>'
            },
        ],
        isFriend:false,
        bio:'i am  looking for an men who has their own business, that when i took divorce then i can get hid half property'
    },
    {
        pics:{
            profile:'https://images.unsplash.com/photo-1578489758854-f134a358f08b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            cover:'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
        },
        messages:2,
        location:'bhopal, india',
        name:'kritika',
        age:26,
        interests:[
            {
                name:'music',
                i:' <i class="ri-music-2-line text-white"></i>'
            },
        ],
        isFriend:false,
        bio:'i am  looking for  an men who has their own business, that when i took divorce then i can get hid half property'
    },
]

function selectAll(query,parent = document) {
    return parent.querySelectorAll(query)
}
function select(query,parent = document) {
    return parent.querySelector(query)
}
// selecting all neccessary elements 
const currentCard = select('.current ')
const incomingCard = select('.incoming ')
const profile = select('.profile img')
const messages = select('.message')
const age =  select('.age ')
const locationElem = select('.location-p')
const interests = select('.interests')
const bio = select('.bio p')
const name = select('.name')
const btns = selectAll('.btns button')

let currentIndex = 0
let btnsDisabled = false
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btnsDisabled) {
        let work = btn.getAttribute('data-work')
        if(work == 'accept') {
            users[currentIndex].isFriend = true
        }  if(work == 'reject'){
            users[currentIndex].isFriend = false
        }
        btnsDisabled = true
        increaseIdx()
        setData()
        }
    })
})

function increaseIdx() {
    currentIndex = currentIndex == users.length - 1 ? 0 : currentIndex + 1
}


function toggleClasses(elem,c1,c2) {
    elem.classList.remove(c1)
    elem.classList.add(c2)
}

function imagesAimation() {
    let tl = gsap.timeline({
        onComplete(){
            const main = select('.current')
            const next = select('.incoming')
            toggleClasses(next,'incoming','current')
            toggleClasses(next,'z-[3]','z-[4]')
            toggleClasses(main,'z-[4]','z-[3]')
            toggleClasses(main,'current','incoming')
            let nextIdx = currentIndex == users.length - 1 ? 0 : currentIndex + 1
            select('.incoming img').src = users[nextIdx].pics.cover
            gsap.to(main,{
                scale:1,
                opacity:1,
                onComplete(){
                    btnsDisabled = false
                }
            })

        }
    })

    tl.to('.current',{
        scale:2,
        opacity:0,
        ease:Circ,
        duration:0.9,
       
    },'a')
    .from('.incoming',{
        scale:.9,
        opacity:0,
        ease:Circ,
        duration:1.3,
    },'a')
}
function setData(initial = false) {
    let idx =  currentIndex 
    let nextIdx = currentIndex == users.length - 1 ? 0 : currentIndex + 1
    if (initial) {
        select('img',select('.current')).src = users[currentIndex].pics.cover
        select('img',select('.incoming')).src =  users[idx == users.length - 1 ? 0 : idx  + 1].pics.cover
    } else {
        imagesAimation()
    }
     profile.src = users[currentIndex].pics.cover
    messages.innerHTML = users[idx].messages
    age.innerHTML = users[idx].age
    locationElem.innerHTML = users[idx].location
    name.innerHTML = users[idx].name
    let interestClutter = ''
    users[idx].interests.forEach(interest => {
        interestClutter += `<div class="int flex justify-center items-center gap-2  w-24 h-8 bg-white/30 rounded-full ">
        ${interest.i}
        <p class="text-sm font-semibold capitalize text-white ">${interest.name}</p>
        </div>`
    })
    interests.innerHTML = interestClutter
    bio.innerHTML = users[idx].bio  
    interestClutter = ''
    gsap.from('.element',{
        y:'100%',
        opacity:0,
        duration:1.2,
        color:'zinc',
        ease: Power2,
        stagger:0.06,
    })
}
 setData(true)

 function textAimate() {
     selectAll('.element').forEach(elem => {
         let div = document.createElement('div')
         div.classList.add('elem-parent','overflow-hidden')
         div.appendChild(elem)
         select('.details').appendChild(div)
        })
}

textAimate()