
// document.getElementById('blog').addEventListener('click', function () {
//     console.log('blog clicked');
//     // window.location.href = ''
// })

// get input use  function 
function getInputValueId(id) {
    return parseFloat(document.getElementById(id).value);
}

// toFixed function id by function 
function donateType(amout) {
    return `${amout.toFixed(2)}`
}

const noakhaliDonation = document.getElementById('noakhali-donation');
noakhaliDonation.addEventListener('click', function () {

    // const addMoneyDonation = parseFloat(document.getElementById('noakhali-input').value);


    // use function one done
    const addMoneyDonation = getInputValueId('noakhali-input');

    const totalBalance = parseFloat(document.getElementById('noakhali-donation-balance').innerText);

    if (addMoneyDonation <= 0 || isNaN(addMoneyDonation) || addMoneyDonation == '') {
        alert('Invalid Donation Amount');
        return;
    }

    const remainingAccountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (addMoneyDonation > remainingAccountBalance) {
        alert('Not Saficient Balance');
        return
    }
    else {
        document.getElementById('my_modal_5').showModal();
    }

    const newBalance = totalBalance + addMoneyDonation;

    document.getElementById('noakhali-donation-balance').innerText = newBalance.toFixed(2);


    const remainingAccountBalanceNumber = remainingAccountBalance - addMoneyDonation;


    document.getElementById('account-balance').innerText = remainingAccountBalanceNumber.toFixed(2);

    const noakhaliTitle = document.getElementById('noakhali-title').innerText;

    // History button element
    const historyDetails = document.createElement('div');
    historyDetails.className = 'bg-white p-4 rounded-md border-2 mb-4  border gray-600';

    historyDetails.innerHTML = `
    <p class="text-xl text-gray-500 pt-2"> ${donateType(addMoneyDonation)} Taka is Donated for ${noakhaliTitle}</p>
    
    <p class="text-xl text-gray-500 pt-4 pb-8">Date: ${new Date().toString()} </p>
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyDetails, historyContainer.firstChild);
})


// Cumilla / Feni donation

const cumillaDonation = document.getElementById('cumilla-donation');
cumillaDonation.addEventListener('click', function () {

    // const addMoneyDonation = parseFloat(document.getElementById('noakhali-input').value);


    // use function one done
    const addMoneyDonation = getInputValueId('cumilla-input');

    const totalBalance = parseFloat(document.getElementById('cumilla-donation-balance').innerText);

    if (addMoneyDonation <= 0 || isNaN(addMoneyDonation) || addMoneyDonation == '') {
        alert('Invalid Donation Amount');
        return;
    }

    const remainingAccountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (addMoneyDonation > remainingAccountBalance) {
        alert('Not Saficient Balance');
        return
    }
    else {
        document.getElementById('my_modal_5').showModal();
    }

    const newBalance = totalBalance + addMoneyDonation;

    document.getElementById('cumilla-donation-balance').innerText = newBalance.toFixed(2);


    const remainingAccountBalanceNumber = remainingAccountBalance - addMoneyDonation;


    document.getElementById('account-balance').innerText = remainingAccountBalanceNumber.toFixed(2);

    const cumillaTitle = document.getElementById('cumilla-title').innerText;

    // History button element
    const historyDetails = document.createElement('div');
    historyDetails.className = 'bg-white p-4 rounded-md border-2 mb-4  border gray-600';

    historyDetails.innerHTML = `
    <p class="text-xl text-gray-500 pt-2"> ${donateType(addMoneyDonation)} Taka is Donated for ${cumillaTitle}</p>
    
    <p class="text-xl text-gray-500 pt-4 pb-8">Date: ${new Date().toString()} </p>
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyDetails, historyContainer.firstChild);
});


// Quota / Health Section 
const healthDonation = document.getElementById('health-donation');
healthDonation.addEventListener('click', function () {

    // const addMoneyDonation = parseFloat(document.getElementById('noakhali-input').value);


    // use function one done
    const addMoneyDonation = getInputValueId('health-input');

    const totalBalance = parseFloat(document.getElementById('noakhali-donation-balance').innerText);

    if (addMoneyDonation <= 0 || isNaN(addMoneyDonation) || addMoneyDonation == '') {
        alert('Invalid Donation Amount');
        return;
    }

    const remainingAccountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (addMoneyDonation > remainingAccountBalance) {
        alert('Not Saficient Balance');
        return
    }
    else {
        document.getElementById('my_modal_5').showModal();
    }

    const newBalance = totalBalance + addMoneyDonation;

    document.getElementById('health-donation-balance').innerText = newBalance.toFixed(2);


    const remainingAccountBalanceNumber = remainingAccountBalance - addMoneyDonation;


    document.getElementById('account-balance').innerText = remainingAccountBalanceNumber.toFixed(2);

    const healthTitle = document.getElementById('health-title').innerText;

    // History button element
    const historyDetails = document.createElement('div');
    historyDetails.className = 'bg-white p-4 rounded-md border-2 mb-4  border gray-600';

    historyDetails.innerHTML = `
    <p class="text-xl text-gray-500 pt-2"> ${donateType(addMoneyDonation)} Taka is Donated for ${healthTitle}</p>
    
    <p class="text-xl text-gray-500 pt-4 pb-8">Date: ${new Date().toString()} </p>
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyDetails, historyContainer.firstChild);
})



// history  button

const historybtn = document.getElementById('history-btn');
const donationbtn = document.getElementById('donation-btn');

historybtn.addEventListener('click', function () {
    historybtn.classList.add(
        'bg-lime-300',
    );

    historybtn.classList.remove(
        'text-gray-600',
        'bg-white'
    );
    donationbtn.classList.remove(
        'bg-lime-300'
    );
    donationbtn.classList.add('text-gray-600');

    document.getElementById('history-details').classList.remove('hidden');
    document.getElementById('main-section').classList.add('hidden');
    // document.getElementById('footer').classList.add('hidden');
});

donationbtn.addEventListener('click', function () {
    donationbtn.classList.add(
        'bg-lime-300',
        'text-black'
    );
    historybtn.classList.remove(
        'bg-lime-300'
    );

    document.getElementById('history-details').classList.add('hidden');
    document.getElementById('main-section').classList.remove('hidden');
    document.getElementById('footer').classList.remove('hidden');
})


// function make() {
//     document.getElementById('my_modal_5').showModal();
// }