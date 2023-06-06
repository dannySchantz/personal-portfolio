<script>
    import { onMount } from 'svelte';

    import { activePage } from "../components/header.js";


    onMount(() => {
        updateActivePageOnScroll();
    });

    function updateActivePageOnScroll() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + headerHeight

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
        const scrollPosition = section.offsetTop - 20

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
        @apply bg-gradient-to-r from-primary to-accent;
    }
    .active {
        @apply text-transparent;
        @apply bg-gradient-to-r from-primary to-accent;
        background-clip: text;
    } 
    .btn:hover {
        @apply text-transparent;
        @apply bg-gradient-to-r from-primary to-accent;
        background-clip: text;
    }
</style>

<header class="text-center justify-center fixed bg-clip-text grid grid-cols-5 w-full font-helvetica backdrop-blur z-10 bg-opacity-60 bg-base-100">
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl {$activePage === 'home' ? 'active' : ''}" on:click={() => scrollToSection('home')}>Home</button>
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl {$activePage === 'about' ? 'active' : ''}" on:click={() => scrollToSection('about')}>About</button>
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl {$activePage === 'education' ? 'active' : ''}" on:click={() => scrollToSection('education')}>Education</button>
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl {$activePage === 'experience' ? 'active' : ''}" on:click={() => scrollToSection('experience')}>Experience</button>
    <button class="btn-ghost relative btn transition-all duration-700 ease-in-out rounded-none col-span-1 text-xl {$activePage === 'projects' ? 'active' : ''}" on:click={() => scrollToSection('projects')}>Projects</button>
</header>
