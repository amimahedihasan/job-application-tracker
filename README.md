## Answers to Questions

### 1️ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
**Ans:**

* **getElementById** → শুধু একটা id দিয়ে একটা নির্দিষ্ট element খুঁজে দেয়।
* **getElementsByClassName** → একই class নামের সব element খুঁজে একটি **HTMLCollection** দেয়।
* **querySelector** → CSS selector দিয়ে খুঁজে, প্রথম যেটা মিলবে শুধু সেটাই রিটার্ন করে।
* **querySelectorAll** → CSS selector দিয়ে খুঁজে, সব মিলে যাওয়া element এর **NodeList** দেয়।


### 2️ How do you create and insert a new element into the DOM?

**Ans:**

১. প্রথমে `createElement()` দিয়ে নতুন element বানাই।
২. তারপর `innerText` / `innerHTML` দিয়ে কনটেন্ট দেই।
৩. এরপর `appendChild()` বা `append()` দিয়ে DOM এ যোগ করি।

মানে  **Create → Modify → Append**


### 3️ What is Event Bubbling? And how does it work?

**Ans:**

Event Bubbling মানে হলো —
যখন কোনো element এ click করি, প্রথমে সেই element এ event হয়,
তারপর ধাপে ধাপে তার parent → তার parent → এভাবে একদম root পর্যন্ত যায়।

মানে **নিচ থেকে উপরে event যাওয়া = Event Bubbling**



### 4️ What is Event Delegation in JavaScript? Why is it useful?

**Ans:**

Event Delegation মানে হলো —
অনেকগুলো child element এ আলাদা আলাদা event না দিয়ে,
একটা common parent এর উপর event লাগানো।

 কেন useful?

* কম code লাগে
* performance ভালো
* নতুন (dynamic) element এও কাজ করে


### 5️ What is the difference between preventDefault() and stopPropagation() methods?

**Ans:**

* **preventDefault()** → Browser এর default behavior বন্ধ করে।
  (যেমন: form submit হলে page reload বন্ধ করা)

* **stopPropagation()** → Event এর bubbling বন্ধ করে দেয়।
  (মানে event উপরে parent এ যাবে না)



### Auther
- **নাম:** [Md. Mahedi Hasan]
- **GitHub Repository:** [https://github.com/amimahedihasan/job-application-tracker.git]
- **live link:** [https://amimahedihasan.github.io/job-application-tracker/]

