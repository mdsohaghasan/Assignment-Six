const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // searchField.value = '';

    const url = `https://openapi.programming-hero.com//phones?search=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
        .catch(error => alert(error));

}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (data.length == 0) {
        console.log('NO RESULT FOUND');
        // alert("NO RESULT FOUND");
        const showError = document.getElementById('search-result');
        const errorSection = document.createElement('div');
        errorSection.innerHTML = `
          <div>
             <h2 class="text-amber-600">NO RESULT FOUND</h2>
          </div>`;
        showError.appendChild(errorSection);

    }
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
    // console.log(phoneId);
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
    phoneDetails.textContent = '';
    const detailsSection = document.createElement('div');
    detailsSection.innerHTML = `
         
        <div class="m-5 ">
        <h2>phone details</h2>
        <div class="flex flex-row">
            <div class="w-3/5">
                <dl>
                    <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4   sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Phone Name</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${details.name}</dd>
                    </div>

                    <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Release Date</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${details.releaseDate}</dd>
                    </div>
                    
                    <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Storage</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${details.storage}</dd>
                    </div>

                    <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Display Size</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${details.displaySize}</dd>
                    </div>

                    <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">ChipSet</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${details.chipSet}</dd>
                    </div>

                    <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Memory</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${details.memory}</dd>
                    </div>

                    <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Brand</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${details.brand}</dd>
                    </div>

                    <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">Sensors</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${details.sensors[0]}</dd>
                    </div>

                </dl>
            </div>
            <div class="w-2/5">
                <img class="w-full" src="" alt="">
            </div>
        </div>
        </div>
          `;
    phoneDetails.appendChild(detailsSection);
    // console.log(data.data.mainFeatures)
}