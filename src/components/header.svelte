<script>
    import { onMount } from 'svelte';

    import { activePage } from "../components/header.js";

    let headerHeight;
    let offset = 100;

    onMount(() => {
        headerHeight = document.querySelector('header').offsetHeight;
        updateActivePageOnScroll();
    });

    function updateActivePageOnScroll() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + headerHeight + offset;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activePage.set(section.id);
            }
        });
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        const scrollPosition = section.offsetTop - headerHeight - offset;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
        activePage.set(sectionId);
    }

    window.addEventListener('scroll', updateActivePageOnScroll);
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
    .active {
        @apply text-primary;
    }
</style>

<header class="text-center justify-center fixed grid grid-cols-5 w-full font-helvetica backdrop-blur z-10 bg-opacity-60 bg-base-100">
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl hover:text-primary {$activePage === 'home' ? 'active' : ''}" on:click={() => scrollToSection('home')}>Home</button>
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl hover:text-primary {$activePage === 'about' ? 'active' : ''}" on:click={() => scrollToSection('about')}>About</button>
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl hover:text-primary {$activePage === 'education' ? 'active' : ''}" on:click={() => scrollToSection('education')}>Education</button>
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl hover:text-primary {$activePage === 'experience' ? 'active' : ''}" on:click={() => scrollToSection('experience')}>Experience</button>
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl hover:text-primary {$activePage === 'contact' ? 'active' : ''}" on:click={() => scrollToSection('projects')}>Projects</button>
</header>
