// Array of marketing and PR affirmations
const affirmations = [
    "I am a master of building authentic connections.",
    "Every opportunity brings me closer to my goals.",
    "My marketing strategies are innovative and successful.",
    "I communicate effectively and with confidence.",
    "I attract clients who resonate with my message.",
    "Every PR challenge I face is an opportunity for growth.",
    "I am a natural storyteller and create engaging narratives.",
    "My personal brand grows stronger every day.",
    "I am confident in my ability to lead and inspire.",
    "My campaigns always exceed expectations.",
    "I am skilled at identifying and seizing market opportunities.",
    "My creativity drives my success.",
    "I build strong and lasting relationships with media contacts.",
    "Every interaction I have leaves a positive impact.",
    "I am an expert in my field and it shows.",
    "My ideas are fresh, relevant, and impactful.",
    "I thrive in dynamic and fast-paced environments.",
    "I am a strategic thinker with a keen eye for detail.",
    "My insights guide successful marketing decisions.",
    "I am proficient in leveraging data to drive results.",
    "I attract high-quality leads effortlessly.",
    "My approach to PR is innovative and effective.",
    "I am adept at turning challenges into opportunities.",
    "I am a go-to expert for marketing and PR advice.",
    "My campaigns resonate deeply with target audiences.",
    "I am a confident presenter and communicator.",
    "I create memorable and effective brand experiences.",
    "My networking skills open doors to new possibilities.",
    "I am constantly learning and growing in my field.",
    "My marketing efforts drive measurable success.",
    "I am a trendsetter in the marketing and PR industry.",
    "I build strong, trusting relationships with clients.",
    "My work always reflects my passion and dedication.",
    "I am a proactive problem solver.",
    "My campaigns are always well-received and impactful.",
    "I am recognized for my expertise and innovative ideas.",
    "My personal and professional growth is limitless.",
    "I am skilled at crafting compelling press releases.",
    "I build positive and lasting relationships with the media.",
    "My PR strategies are always ahead of the curve.",
    "I am effective at turning ideas into successful campaigns.",
    "My marketing tactics are both creative and effective.",
    "I am a master at capturing and retaining audience attention.",
    "My work brings value and success to my clients.",
    "I have a deep understanding of market trends.",
    "I am a leader in developing effective communication strategies.",
    "My ability to connect with people is unparalleled.",
    "I am adept at managing and growing brands.",
    "My marketing efforts always deliver outstanding results.",
    "I am confident in my skills and abilities.",
    "My strategic approach drives exceptional outcomes.",
    "I am skilled at creating engaging content.",
    "I build and nurture powerful business relationships.",
    "My PR efforts always generate positive coverage.",
    "I am a skilled negotiator and influencer.",
    "My marketing strategies are data-driven and successful.",
    "I am a proactive and innovative problem solver.",
    "My work is consistently of the highest quality.",
    "I am an expert in crafting persuasive pitches.",
    "My PR campaigns are always impactful and effective.",
    "I excel at managing public perception.",
    "My marketing knowledge is comprehensive and up-to-date.",
    "I am known for my exceptional creativity.",
    "My PR strategies always achieve desired results.",
    "I am adept at creating compelling brand narratives.",
    "My marketing campaigns consistently outperform expectations.",
    "I build strong, authentic connections with my audience.",
    "My skills in market research are exceptional.",
    "I am a master at developing successful marketing plans.",
    "My PR efforts always enhance brand reputation.",
    "I am skilled at identifying and leveraging market trends.",
    "My creativity knows no bounds.",
    "I am recognized for my expertise and success in marketing.",
    "My work in PR always drives positive media coverage.",
    "I am confident in my ability to influence and persuade.",
    "My marketing strategies are always innovative and effective.",
    "I am an expert at managing client expectations.",
    "My PR campaigns always generate buzz and excitement.",
    "I am skilled at building and maintaining client relationships.",
    "My work always reflects my high standards and professionalism.",
    "I am adept at crafting impactful marketing messages.",
    "My PR strategies are always timely and relevant.",
    "I am a leader in developing successful marketing tactics.",
    "My creativity drives successful marketing initiatives.",
    "I am an expert at creating engaging and persuasive content.",
    "My PR efforts always lead to enhanced brand visibility.",
    "I am confident in my ability to deliver results.",
    "My marketing campaigns are always on target.",
    "I am skilled at building and maintaining strong media relationships.",
    "My PR strategies are always creative and effective.",
    "I am an expert in developing impactful marketing strategies.",
    "My work consistently delivers outstanding results.",
    "I am a leader in creating successful PR campaigns.",
    "My marketing knowledge is extensive and always evolving.",
    "I am adept at managing and executing successful marketing initiatives.",
    "My PR efforts always lead to positive outcomes.",
    "I am a master at creating compelling and effective brand messages.",
    "My marketing strategies are always well-received and impactful.",
    "I am confident in my ability to drive marketing success.",
    "My PR campaigns are consistently innovative and effective.",
    "I am skilled at creating and executing successful marketing plans.",
    "My work always reflects my expertise and dedication.",
    "I am a leader in developing creative and effective marketing strategies.",
    "My PR efforts always generate positive results.",
    "I am adept at crafting compelling marketing narratives.",
    "My marketing knowledge is both broad and deep.",
    "I am skilled at building and maintaining strong client relationships.",
    "My PR strategies are always on point and effective.",
    "I am a master at creating impactful and engaging content.",
    "My marketing campaigns consistently deliver exceptional results.",
    "I am confident in my ability to achieve marketing goals.",
    "My PR efforts always enhance brand reputation and visibility.",
    "I am an expert at managing and executing successful marketing strategies.",
    "My work is always of the highest quality and effectiveness.",
    "I am a leader in creating innovative and successful PR campaigns.",
    "My marketing strategies always align with business goals.",
    "I am skilled at building and nurturing valuable business relationships.",
    "My PR efforts consistently generate positive media coverage.",
    "I am a master at developing and implementing successful marketing tactics.",
    "My work always reflects my passion and commitment to success.",
    "I am confident in my ability to drive positive outcomes for my clients.",
    "My PR campaigns are always creative, effective, and impactful.",
    "I am an expert at creating and executing successful brand strategies.",
    "My marketing knowledge is always current and comprehensive.",
    "I am skilled at managing client expectations and delivering results.",
    "My PR strategies consistently lead to enhanced brand visibility and reputation.",
    "I am a leader in creating compelling and effective marketing content.",
    "My work consistently drives exceptional marketing outcomes.",
    "I am confident in my ability to lead and innovate in the marketing and PR industry.",
    "My PR efforts always achieve desired results and exceed expectations.",
    "I am adept at crafting impactful marketing messages that resonate with audiences.",
    "My marketing campaigns are always innovative and successful.",
    "I am a master at building strong and authentic client relationships.",
    "My PR strategies are always timely, relevant, and effective.",
    "I am skilled at creating engaging content that drives results.",
    "My work always reflects my expertise and dedication to success.",
    "I am confident in my ability to create and execute successful marketing and PR strategies.",
    "My PR efforts always lead to positive and impactful media coverage.",
    "I am a leader in developing innovative and effective marketing campaigns.",
    "My marketing knowledge is both broad and deep, driving exceptional results.",
    "I am skilled at managing and executing successful PR initiatives.",
    "My work always enhances brand reputation and drives success.",
    "I am an expert at creating compelling and persuasive marketing content.",
    "My PR strategies consistently achieve desired outcomes and exceed expectations.",
    "I am confident in my ability to deliver outstanding results for my clients.",
    "My marketing campaigns are always creative, effective, and impactful.",
    "I am a master at building and maintaining strong and valuable media relationships.",
    "My PR efforts consistently lead to enhanced brand visibility and positive outcomes.",
    "I am skilled at creating and implementing successful marketing and PR strategies.",
    "My work always reflects my passion, expertise, and commitment to success.",
    "I am a leader in developing innovative and impactful marketing campaigns.",
    "My PR strategies are always effective and drive positive results.",
    "I am confident in my ability to create and execute successful marketing initiatives.",
    "My work consistently delivers exceptional outcomes and drives success."
];


// Function to randomly pick an affirmation
function getRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    return affirmations[randomIndex];
}

// Event listener for the 'Next Affirmation' button
document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault();
    const affirmationElement = document.querySelector('.affirmation');
    
    // Show spinner before showing the next affirmation
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block';
    
    setTimeout(() => {
        affirmationElement.textContent = getRandomAffirmation();
        spinner.style.display = 'none';
    }, 1000); // Delay for 1 second to simulate loading time
});

// Function to hide the spinner initially
window.onload = function() {
    document.querySelector('.spinner').style.display = 'none';
};

// Select the menu icon and the parent element containing the dropdown menu
const menuIcon = document.querySelector('.menu-icon');
const dropdownMenuContainer = document.querySelector('header');

// Check if elements are selected correctly
console.log(menuIcon, dropdownMenuContainer);

// Toggle the 'menu-active' class on the header when the menu icon is clicked
menuIcon.addEventListener('click', function() {
    dropdownMenuContainer.classList.toggle('menu-active');
});

