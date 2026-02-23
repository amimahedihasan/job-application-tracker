let rejectedList = [];
let interviewList = [];
let currentStatus = 'all'



let total = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
let countJobs = document.getElementById('count-jobs');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const filteredSection = document.getElementById('filtered-section');

const allCardSection = document.getElementById('all-cards');
// const totalJobs = allCardSection.children.length;
//  console.log(allCardSection.children.length)

const mainContainer = document.querySelector('main');

function calculateCount() {
    const currentTotal = allCardSection.children.length;
    // let total = allCardSection.children.length;
    total.innerText = currentTotal;
    // countJobs.innerText = allCardSection.children.length;


    if (currentStatus === 'interview-filter-btn') {
        countJobs.innerText = `${interviewList.length} of ${currentTotal}`;
    }
    else if (currentStatus === 'rejected-filter-btn') {
        countJobs.innerText = `${rejectedList.length} of ${currentTotal}`;
    }
    else {
        countJobs.innerText = currentTotal;
    }

    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}


calculateCount();
