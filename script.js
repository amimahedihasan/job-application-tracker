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

function toggleStyle(id) {
    // console.log("click",id);

    // all btn color same
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')


    allFilterBtn.classList.add('bg-white', 'text-[#64748B]')
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]')
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]')

    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove('bg-white', 'text-[#64748B]')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

    if (id === 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
    } else if (id === 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    } else if (id === 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected();
    }
    calculateCount();

}

mainContainer.addEventListener('click', function (event) {



    // console.log(event.target.classList.contains('interview-btn'));
    if (event.target.classList.contains('interview-btn')) {
        // console.log(event.target.parentNode.parentNode)
        const parentNode = event.target.parentNode.parentNode;
        const cardH = parentNode.querySelector('.card-h').innerText;
        const cardP = parentNode.querySelector('.card-p').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        // const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        // console.log(cardH, cardP, jobType, status, notes)

        parentNode.querySelector('.status').innerText = 'INTERVIEW'
        const cardInfo = {
            cardH,
            cardP,
            jobType,
            status: 'INTERVIEW',
            notes
        }


        // console.log(cardInfo);

        const interviewExist = interviewList.find(item => item.cardH === cardInfo.cardH);
        if (!interviewExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(item => item.cardH != cardInfo.cardH)

        if (currentStatus === 'rejected-filter-btn') {
            renderRejected();
        }
        calculateCount();

        // console.log(interviewList)
    } else if (event.target.classList.contains('rejected-btn')) {
        // console.log(event.target.parentNode.parentNode)
        const parentNode = event.target.parentNode.parentNode;
        const cardH = parentNode.querySelector('.card-h').innerText;
        const cardP = parentNode.querySelector('.card-p').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        // const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        // console.log(cardH, cardP, jobType, status, notes)

        parentNode.querySelector('.status').innerText = 'REJECTED'
        const cardInfo = {
            cardH,
            cardP,
            jobType,
            status: 'REJECTED',
            notes
        }


        // console.log(cardInfo);

        const rejectedExist = rejectedList.find(item => item.cardH === cardInfo.cardH);
        if (!rejectedExist) {
            rejectedList.push(cardInfo);
        }


        interviewList = interviewList.filter(item => item.cardH != cardInfo.cardH)

        if (currentStatus === 'interview-filter-btn') {
            renderInterview();
        }
        calculateCount();
        // renderInterview();

        // console.log(interviewList)
    }
    else if (event.target.closest('#delete-btn')) {
        const card = event.target.closest('.full-card');
        if (!card) {
            return;
        }
        const title = card.querySelector('.card-h')?.innerText.trim();
        if (!title) {
            return;
        }

        card.remove();

        interviewList = interviewList.filter(item => item.cardH.trim() !== title);
        rejectedList = rejectedList.filter(item => item.cardH.trim() !== title);

        if (currentStatus === 'interview-filter-btn') {
            renderInterview();
        } else if (currentStatus === 'rejected-filter-btn') {
            renderRejected();
        }

        calculateCount();


    }
})



