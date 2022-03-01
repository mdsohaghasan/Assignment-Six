const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        console.log(data);
        const section = document.createElement('div');
        section.innerHTML = `
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                            <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                                <div class="group relative" onclick="loadPhoneDetails('${data.slug}')">
                                    <div 
                                        class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img src="${data.image}"
                                            class="w-full h-full object-center object-cover">
                                    </div>
                                    <h3 class="mt-6 text-sm text-gray-500">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            ${data.brand}
                                        </a>
                                    </h3>
                                    
                                    <p class="text-base font-semibold text-gray-900">${data.phone_name}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
        `;
        searchResult.appendChild(section);


    });
}

const loadPhoneDetails = phoneId => {
    console.log(phoneId);
    const url = `
       https://openapi.programming-hero.com/api/phone/${phoneId}
    `;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data.mainFeatures));
}

const displayPhoneDetails = details => {
    console.log(details);
    const phoneDetails = document.getElementById('phone-details');
    const detailsSection = document.createElement('div');
    detailsSection.innerHTML = `
         
                <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">Phone Details</h3>
                        <p class="text-base font-semibold text-gray-900">${data.mainFeatures.displaySize}</p>
                    </div>
                    <div class="px-4 py-5 sm:px-6">
                      <img src="" alt="" class="w-1/2">
                    </div>
                    <div class="border-t border-gray-200">
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3     sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Full name</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">vvvv</dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Application for</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${data.storage}</dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Salary expectation</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
                            </div>
                        </dl>
                    </div>
                </div>

          `;
    phoneDetails.appendChild(detailsSection);

}