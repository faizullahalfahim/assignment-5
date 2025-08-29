Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

W-1:
 getElementById দিয়ে যেকোন ইউনিক id কে ধরে। যখন শুধু মাত্র একটা কিছুতে আমরা ধরবো তখন এইটা ইউজ করব। এটা সবসময় একটা element রিটার্ন করে। 

 getElementByClassName দিয়ে ওই নামে ক্লাস থাকা সব element কে ধরে। একাধিক element একি নামে থাকলে আমার এটা ইউজ করব। DOM এ নতুন কোন এলিমেন্ট যুক্ত হলে বা বাদ গেলে এটা নিজে নিজেই আপডেট হয়। 

 querySelector দিয়ে সিলেক্ট করা একাধিক এলিমেন্ট থাকলে প্রথম এলিমেন্ট কে ধরে এটি একটি এলিমেন্ট রিটার্ন করে। 
 
 querySelectorAll দিয়ে সিলেক্ট করা একি নামের সব এলিমেন্ট কে ধরে। DOM এ কোন কিছু যুক্ত হলে বা বাদ গেলে এটা নিজে নিজে আপডেট হয় না। 

Q-2: How do you create and insert a new element into the DOM?

W-2: 
 শুরুতে const div = document.createElement ("div") এভাবে একটা এলিমেন্ট ক্রিয়েট করতে হয়। এবং সেখানে যাবতীয় কাজ করে document.appendChild(div) দিয়ে DOM এ এন্ট্রি করাতে হয়। 

Q-3:
 What is Event Bubbling and how does it work?

W-3: যখন আমরা কোন একটা ইলিমেন্টকে event দেই। সেটা শুধু মাত্র তার পর্যন্ত সীমাবদ্ধ থাকে না। বরঞ্চ তার প্যারেন্ট এলিমেন্ট গ্র্যান্ড প্যারেন্ট এমিমেন্ট হয়ে root পর্যন্ত চলে যায়।

 এটি যেভাবে কাজ করেঃ 
 যদি আমরা html লিখি 
 <div id="parent">
 <button id="child">more<button>
 </div> 
 তারপর যদি js লিখি। 
 
 document.getElementbyId("child").addEventListener("click",function(){
    console.log ("child clicked");
 });
 document.getElementbyId("parent").addEventListener("click",function(){
    console.log ("parent clicked");
 });
 document.body.addEventListener("click",function(){
    console.log ("body clicked");
 });

 এখন যদি আমি child বাটনে ক্লিক করি। তাহলে আউটপুট আসবে 
 child clicked
 parent clicked
 body clicked
 মানে এখানে event প্রথমে child কে ধরেছে তারপর parent কে বাবল করছে। তারপর body তে গিয়েছে 

Q-4 
  What is Event Delegation in JavaScript? Why is it useful?

W-4
 Event Delegation হলো এমন একটি মেথড যেখানে আমরা child element এ আলাদা আলাদা event.listener না দিয়ে একটা parent element এ event listener দেই। তারপর event bubbling এর মাধ্যমে parent এ event ধরা হয়। আর event.target ইউজ করে বুঝা যায় কোন child কে event ধরছে। 
 এটা ইউজফুল এই জন্য যে এটা ব্যাবহারের মাধ্যমে অনেক গুলো child element থাকলেও একটা event.listener দিয়ে ধরতে পারি। আবার dom e যদি কোন নতুন element এড হয়। তাইলে সেটা নতুন করে লিখতে হয় না। 

Q-5
 What is the difference between preventDefault() and stopPropagation() methods?

W-5
 preventDefault() কোন এলিমেন্ট এর ডেফল্ট একশন থামিয়ে দেয়। eventBubbling করে বন্ধ করে না। 
 কিনত stopPropagation() eventBublling কে থামিয়ে দেয়। 