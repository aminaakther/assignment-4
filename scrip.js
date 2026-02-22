let intervewlist =[]
let rejectlist = []


let total=document.getElementById('total');
let intervewCount= document.getElementById('intervewCount');
let rejectCount = document.getElementById('rejectCount');
// console.log(total)
// console.log(intervewCount)
// console.log(rejectCount)


const allCardSection = document.getElementById('allCards');


const allfilterbtn = document.getElementById('all-filter-btn')
const Interviewfilterbtn = document.getElementById('Interview-filter-btn')
const Rejectedfilterbtn = document.getElementById('Rejected-filter-btn')

const maincontainer = document.querySelector('main')
console.log(maincontainer)
// console.log(allCardSection.children.length);
intervewlist.push({name:'man 1'})
function calculateCount (){
    total.innerText=allCardSection.children.length
    intervewCount.innerText=intervewlist.length
    rejectCount.innerText=rejectlist.length
}
calculateCount()




function toggleStyle(id){

  // remove active style
  allfilterbtn.classList.remove('bg-blue-500','text-white');
  Interviewfilterbtn.classList.remove('bg-blue-500','text-white');
  Rejectedfilterbtn.classList.remove('bg-blue-500','text-white');

  // add default style
  allfilterbtn.classList.add('bg-gray-300','text-black');
  Interviewfilterbtn.classList.add('bg-gray-300','text-black');
  Rejectedfilterbtn.classList.add('bg-gray-300','text-black');

  // select clicked button
  const selected = document.getElementById(id);

  // remove default style from selected
  selected.classList.remove('bg-gray-300','text-black');

  // add active style
  selected.classList.add('bg-blue-500','text-white');
}



mainContainer.addEventListener('click', function(event){
    // console.log(event.target.parentNode.parentNode);
    const parentNode=event.target.parentNode.parentNode;
    const mobailName =parentNode.querySelector('.mobile-name')
    console.log(mobailName)
});



