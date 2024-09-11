(function storyFetch() {

    // set json variables
    var s1_json_1 = `2024-09-09T18:37:56`;
    var s1_json_2 = `https://www.unrigged.ca/wp-content/uploads/2024/09/why-i-pressed-trudeau-on-genocide_66df4e76c1a3b-scaled.webp`;
    var s1_json_3 = `https://www.unrigged.ca/why-i-pressed-trudeau-on-genocide/`;
    var s1_json_4 = `Why I pressed Trudeau on genocide`;
    var s1_json_5 = `The Independent`;

    var s2_json_1 = `2024-09-09T13:40:46`;
    var s2_json_2 = `https://www.unrigged.ca/wp-content/uploads/2024/09/manitoba-ndp-doubles-down-on-failed-tough-on-crime-agenda_66defadf3dbe8-scaled.webp`;
    var s2_json_3 = `https://www.unrigged.ca/manitoba-ndp-doubles-down-on-failed-tough-on-crime-agenda/`;
    var s2_json_4 = `Manitoba NDP doubles down on failed â€˜tough-on-crimeâ€™ agenda`;
    var s2_json_5 = `Canadian Dimension`;

    var s3_json_1 = `2024-09-09T00:00:00`;
    var s3_json_2 = `https://www.unrigged.ca/wp-content/uploads/2024/09/another-pipeline-battle-brews-in-northern-b-c_66df42afe59d4.png`;
    var s3_json_3 = `https://www.unrigged.ca/another-pipeline-battle-brews-in-northern-b-c/`;
    var s3_json_4 = `Another pipeline battle brews in northern B.C.`;
    var s3_json_5 = `Ricochet`;

    var s4_json_1 = `2024-09-06T01:42:27`;
    var s4_json_2 = `https://www.unrigged.ca/wp-content/uploads/2024/09/far-right-media-outlet-linked-to-secret-russian-influence-campaign-produced-50-videos-focused-on-canada_66da5e0402bd1-scaled.webp`;
    var s4_json_3 = `https://www.unrigged.ca/far-right-media-outlet-linked-to-secret-russian-influence-campaign-produced-50-videos-focused-on-canada/`;
    var s4_json_4 = `Far-Right Media Outlet Linked to Secret Russian Influence Campaign Produced 50+ Videos Focused onÂ Canada`;
    var s4_json_5 = `PressProgress`;

    var s5_json_1 = `2024-09-04T17:47:13`;
    var s5_json_2 = `https://www.unrigged.ca/wp-content/uploads/2024/09/canadian-mega-landlord-using-ai-pricing-scheme-as-it-massively-hikes-rents_66d8a60f54342-scaled.webp`;
    var s5_json_3 = `https://www.unrigged.ca/canadian-mega-landlord-using-ai-pricing-scheme-as-it-massively-hikes-rents/`;
    var s5_json_4 = `Canadian mega landlord using AI â€˜pricing schemeâ€™ as it massively hikes rents`;
    var s5_json_5 = `The Breach`;


    const s1_array = [s1_json_1, s1_json_2, s1_json_3, s1_json_4, s1_json_5]
    const s2_array = [s2_json_1, s2_json_2, s2_json_3, s2_json_4, s2_json_5]
    const s3_array = [s3_json_1, s3_json_2, s3_json_3, s3_json_4, s3_json_5]
    const s4_array = [s4_json_1, s4_json_2, s4_json_3, s4_json_4, s4_json_5]
    const s5_array = [s5_json_1, s5_json_2, s5_json_3, s5_json_4, s5_json_5]

    const full_array = [s1_array, s2_array, s3_array, s4_array, s5_array]

    // get parent div, attach container for story flex element to exist on
    const parentElem = document.querySelector(".unrigged-embed")
    const wpWidgetContent = document.createElement('div');
    wpWidgetContent.classList.add('embed-div');
    parentElem.appendChild(wpWidgetContent)
    let ur_src = document.querySelector(".unrigged-embed").getAttribute("data-src");

    let ur_utm = "";
    if (ur_src == null || ur_src == true) {
        pass
    } else {
        ur_utm = `?utm_src=${ur_src}`
    }



    // data font attr
    let ur_font = document.querySelector(".unrigged-embed").getAttribute("data-font");

    if (ur_font === "false") {
    } else {
        loadFont()
    }

    function loadFont() {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap";
        let link2 = document.createElement('link')
        link2.rel = "preconnect";
        link2.href = "https://fonts.googleapis.com";
        let link3 = document.createElement("link")
        link3.rel = "preconnect"
        link3.href = "https://fonts.gstatic.com"        
        link3.setAttribute('crossorigin',""); 
        //append the google font link hrefs to head of page 
        document.getElementsByTagName("head")[0].appendChild(link2);
        document.getElementsByTagName("head")[0].appendChild(link3);
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    //Add styles to dom
    /*let link4 = document.createElement("link")
    link4.rel = "stylesheet";
    link4.href = "//external.unrigged.ca/js/assets/embed-styles.css"
    link4.setAttribute('crossorigin',""); 
    document.getElementsByTagName("head")[0].appendChild(link4);*/

    // Create style element 	
    const styleElem = document.createElement('style');
    document.head.appendChild(styleElem);

    // Add CSS rules to the style element
    styleElem.sheet.insertRule('.embed-div img { width: 100%;height: 150px; object-fit: cover; border-radius: 0.5rem 0.5rem 0 0;}');
    styleElem.sheet.insertRule('.embed-div {font-family: Arial, sans-serif; width: 100%; display: flex; gap: 1rem; flex-wrap: wrap; font-family: Lora; font-size: 1rem;font-weight: 700;}');
    styleElem.sheet.insertRule('.embed-unrigged-post-flex {flex: 1 0 200px;text-decoration: none;color: black;display: flex;flex-direction: column-reverse;justify-content: flex-end;gap: 0.125rem;transition: 0.3s;border: 1px solid #c9c9c9;border-radius: 0.5rem;}');

    styleElem.sheet.insertRule('.embed-unrigged-post-flex:hover {backdrop-filter: brightness(0.8);}');
    styleElem.sheet.insertRule('.embed-unrigged-post-flex:hover {backdrop-filter: brightness(0.8);}');
    styleElem.sheet.insertRule('.embed-unrigged-post-flex div {padding: 0 0.5rem 0.5rem;}');
    styleElem.sheet.insertRule('div.embed-unrigged-item-cat-title {font-family: "Work Sans";font-weight: 400;padding: 0.125rem 0.5rem 0;}');
    styleElem.sheet.insertRule('.embed-unrigged-logo {max-height: 150px; display: block; margin: auto; padding: 1rem 0;}');
    styleElem.sheet.insertRule('.embed-unrigged-read-more {font-family: Lora;font-weight: 700;text-align: center;padding: 1rem 0;}');


    //Add Unrigged Logo
    const logoURL = 'https://external.unrigged.ca/js/assets/cropped-unrigged_logo_nautical.png'
    let logo = document.createElement("img")
    logo.setAttribute("src", logoURL)
    logo.classList.add("embed-unrigged-logo")
    logo.style.maxWidth = "250px"
    parentElem.insertBefore(logo,wpWidgetContent)

    //Add Read More to Bottom of the container
    const readMore = document.createElement("div")
    readMore.classList.add("embed-unrigged-read-more")
    readMore.innerHTML = "Read more on <a href='https://unrigged.ca'>Unrigged.ca</a>"
    parentElem.appendChild(readMore)
    
    //Create Elements based on array data

    full_array.forEach(post => {
        // create container
        const postContainer = document.createElement('a');
        postContainer.classList.add("embed-unrigged-post-flex")
        // item content
        const postTitle = post[3];
        const postLink = (post[2] + ur_utm);
        const postItem = document.createElement('div');
    // Item Text and image
        const postItemCat = document.createElement("div");
        postItemCat.classList.add("embed-unrigged-item-cat-title");
        const postImgLink = post[1]
        const postCat = post[4]
        postItemCat.innerHTML = postCat
        postContainer.setAttribute("href", postLink)
        postContainer.setAttribute("target","_blank")
        postItem.innerHTML = postTitle
        const postImg = document.createElement("img")
        postImg.setAttribute('src', postImgLink)
        // append set 
        postContainer.appendChild(postItem);
        postContainer.appendChild(postItemCat);
        postContainer.appendChild(postImg);
        wpWidgetContent.appendChild(postContainer);
    });

})();
