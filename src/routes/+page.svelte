<script>
    import Header from "../components/header.svelte";
    import { activePage } from "../components/header.js";
    import 'animate.css';
    function scrollToAbout() {
        const aboutSection = document.querySelector('#about');
        const headerHeight = document.querySelector('header').offsetHeight;
        const offset = 100;
        const scrollPosition = aboutSection.offsetTop - headerHeight - offset;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
        activePage.set('about');
    }

    // window.addEventListener('scroll', () => {
    //     const element = document.querySelector('.animate__backInRight');
    //     const distanceFromTop = element.getBoundingClientRect().top;

    //     if (distanceFromTop - window.innerHeight < 0) {
    //     element.classList.add('animate__animated', 'animate__infinite', 'animate__backInRight');
    //     } else {
    //     element.classList.remove('animate__animated', 'animate__infinite', 'animate__backInRight');
    //     }
    // });
</script>

<style>
    .active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        @apply bg-primary;
    }
    .box {
        box-shadow: 0 0 3px;
        @apply bg-transparent;
        transition: transform 0.5s;
    }
    .box:hover {
        content: "";
        transform: scale(1.2);
        box-shadow:0 0 15px var(--p)
    }

    .home-page {
        background-image: url("/src/components/wp2533041-dark-theme-wallpapers.jpg");
        background: transparent;
    }

</style>

<Header />

<title>Danny Schantz</title>

<div class="h-screen home-page" id="home">
    <div class="h-32"></div>
    <div class="ml-20 m-10 font-helvetica grid grid-cols-2 grid-rows-4">
        <div class="col-span-1">
            <h1 class="text-5xl mb-10 font-bold">
                <span class="">Danny Schantz</span>
            </h1>
            <h2 class="text-3xl whitespace-normal max-w-md">
                Chemical Engineering Student and Web Developer
            </h2>
            <button class="{activePage === 'about' ? 'active' : ''}" on:click={scrollToAbout}>
                <svg class="stroke-current animate-bounce animate-slow w-10 h-10 absolute left-20 bottom-10" stroke-width="2.0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"></path>
                </svg>
            </button>
        </div>
        <div class="col-span-1">
        
        </div>
    </div>
</div>

<div class="h-screen" id="about">
    <div class="max-w-4xl mx-auto rounded-2xl text-base grid grid-cols-5 grid-rows-3 mt-32 box font-helvetica">
        <img src="/src/components/IMG_9777.jpeg" class="h-32 w-36 col-start-1 col-end-2 row-start-1 row-end-2 rounded-2xl m-5" alt="me">
        <div class="text-3xl font-bold col-start-2 col-end-5 row-start-1 row-end-2 flex items-center justify-center">About me</div>
        <div class="col-start-1 col-end-6 row-start-2 row-end-4">
            <p class="text-start ml-5 mr-5 ">I am a student studying Chemical Engineering and Chemistry at Calvin University in Grand Rapids, Michigan. I also took a web development bootcamp from May 2023 - July 2023.</p>
            <p class="text-start m-5">I enjoy learning just about anything, and love being able to work on projects and solve problems. That is why I decided to learn web development, as it is an interesting and enjoyable way to spend time.</p>
            <p class="text-start m-5">Some of my hobbies include playing basketball, lifting weights, reading, and bouldering.</p>
            <p class="text-start m-5">Well I do enjoy web development, my end goal is to help in the optimization/research of nuclear fusion power to make it more viable for commercial use. However, I believe that becoming a skilled programmer is also a part of the journey to get there.</p>
            <p class="text-start m-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis facere, sed in nam voluptatem ipsam pariatur a quo suscipit incidunt numquam assumenda! Sint aut minus magni, officia obcaecati cupiditate nostrum!</p>
        </div>
    </div>
</div>

<div class="h-screen" id="education">

</div>

<div class="h-screen" id="experience">
    <div class="animate__animated animate__slideInRight relative bg-base-100 rounded-xl overflow-hidden font-helvetica">
      <div class="relative rounded-xl overflow-auto">
        <!-- Snap Point -->
        <div class="flex ml-[30%] items-end justify-start pt-10 mb-6"></div>
        <!-- Contents -->
        <div class="relative w-full flex gap-20 snap-x snap-mandatory overflow-x-auto pb-14 ">
          <div class="snap-center">
          </div>
          <div class="mt-20 snap-always snap-center first:pl-8 last:pr-8">
            <div class="w-96 h-96 rounded-lg bg-slate-50 box">
              <div class="w-full h-1/5 bg-gradient-to-r from-primary to-accent rounded-lg rounded-b-none"></div>
            </div>
          </div>
          <div class="mt-20 snap-always snap-center first:pl-8 last:pr-8">
            <div class="w-96 h-96 rounded-lg bg-slate-50 box">
              <div class="w-full h-1/5 bg-gradient-to-r from-accent to-primary rounded-lg rounded-b-none"></div>
            </div>
          </div>
          <div class="mt-20 snap-always snap-center first:pl-8 last:pr-8">
            <div class="w-96 h-96 rounded-lg bg-slate-50 box">
                <div class="w-full h-1/5 bg-gradient-to-r from-primary to-accent rounded-lg rounded-b-none pt-px">
                    <div class = "mt-5 ml-5 text-2xl font-bold">Creative Dining Services</div>
                    <div class = "ml-5 text-sm">Student Supervisor    (August 2021 - Present)</div>
                </div>
                <div class ="m-5 text-base font-helvetica">
                    <p>Successfully manage a team of 10-15 students, ensuring efficient operations and excellent customer service to serve up to 1000 college students per shift.</p>
                    <p class ="mt-5 fon">Proactively resolve conflicts and implement appropriate disciplinary measures when necessary, fostering a positive work environment.</p>
                </div>
            </div>
          </div>
          <div class="mt-20 snap-always snap-center first:pl-8 last:pr-8">
            <div class="w-96 h-96 rounded-lg bg-slate-50 box">
                <div class="w-full h-1/5 bg-gradient-to-r from-accent to-primary rounded-lg rounded-b-none p-3">
                    <img src="/src/components/SCS_BIG.D.png" class ="w-1/3 h-3/4 rounded-lg z-10" alt="steelcase logo">
                </div>
                <div></div>
            </div>
          </div>
          <div class="snap-center shrink-0">
          </div>
        </div>
      </div>
    </div>
  </div>
  
<div class="h-screen" id="projects">

</div>

