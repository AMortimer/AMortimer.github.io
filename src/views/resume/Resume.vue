<script setup>
import Segment from '@/layouts/partials/Segment.vue';
import Container from '@/layouts/partials/Container.vue';
import ResumeItem from './ResumeItem.vue';
import AccordionPanel from '@/components/AccordionPanel.vue';
</script>

<template>
    <Segment>
        <Container>
            <h2>Resume</h2>
            <h3 class="mt-10">Work Experience</h3>
            <AccordionPanel
                aria-title="Lead Front End Designer"
                title="Lead Front End Designer"
                >
                <ResumeItem
                    company="Tree View Designs | Remote"
                    dates="March 2023 to present"
                    >
                    <li>
                        I lead the design and maintenance of web templates using Tailwind CSS, HTML, and a 
                        custom CMS, supporting sales and content teams in delivering healthcare websites across 
                        the UK.
                    </li>
                    <li>
                        I craft bespoke designs for clients with more specific requirements. This has allowed the 
                        company to diversify and grow its client base.
                    </li>
                    <li>
                        I have expanded responsibilities to include lifecycle management tasks such as 
                        provisioning sandbox environments and launching new sites using Laravel Forge, AWS, 
                        and Google Cloud Console.
                    </li>
                </ResumeItem>
            </AccordionPanel>
            <AccordionPanel
                aria-title="Content Editor and Customer Support"
                title="Content Editor / Customer Support"
                >
                <ResumeItem
                    company="Tree View Designs | Remote"
                    dates="September 2021 to March 2023"
                    >
                    <li>
                        Developed and managed websites for healthcare organizations, ensuring compliance with 
                        the latest WCAG standards, improving user access and engagement.
                    </li>
                    <li>
                        Delivered onboarding and training through webinars and provided dedicated customer 
                        support via email and video calls, ensuring client satisfaction and smooth operations. 
                    </li>
                </ResumeItem>
            </AccordionPanel>
            <AccordionPanel
                aria-title="Web Designer"
                title="Web Designer"
                >
                <ResumeItem
                    company="Freelance | Remote"
                    dates="January 2021 to present"
                    >
                    <li>
                        I design, build and deploy websites for various clients using HTML/CSS/JavaScript as well as content management systems such as WordPress and SquareSpace.
                    </li>
                    <li>
                        I manage web content and provide SEO to help reach as many users as possible.
                    </li>
                </ResumeItem>
            </AccordionPanel>
            <h3 class="mt-10">
                Qualifications
            </h3>
            <AccordionPanel
                aria-title="Computer Science Bsc (Hons)"
                title="Computer Science Bsc (Hons)"
                >
                <ResumeItem
                    company="University of Strathclyde | UK"
                    dates="September 2012 to June 2016"
                    >
                    <li>
                        Studied various topics and tools, including web development using JavaScript, PHP, SQL, HTML/CSS.
                    </li>
                    <li>
                        Developed a student support web app for my Honours project. Provided documentation detailing research, requirements gathering, design rationale, implementation, and user testing.
                    </li>
                    <li>
                        Competed as an active member of the cross-country team, participating in nationwide competitions
                    </li>
                </ResumeItem>
            </AccordionPanel>
            <h3 class="mt-10">
                Skills
            </h3>
            <AccordionPanel
                aria-title="View my skills"
                title="View my skills"
                >
                <ResumeItem
                    
                    >
                    <li>
                        <span class="font-semibold">Content presentation:</span> web content and user experience design, web accessibility standards
                    </li>
                    <li>
                        <span class="font-semibold">Web development:</span> JavaScript, HTML/CSS, SVG manipulation, Vue.js, PHP, Tailwind CSS, content management systems
                    </li>
                    <li>
                        <span class="font-semibold">Interpersonal:</span> communication, empathy, collaboration, relationship-building, presentation 
                    </li>
                    <li>
                        <span class="font-semibold">Back-End Technologies:</span> MySQL, Laravel, AWS, Google Cloud Console
                    </li>
                    <li>
                       <span class="font-semibold">Organization:</span> project management, time management, problem-solving, independent working
                    </li>
                    <li>
                        <span class="font-semibold">Tools & Platforms:</span> Git, TablePlus, Laravel Forge, Google Tag Manager, Google Analytics, Google Suite
                    </li>
                </ResumeItem>
            </AccordionPanel>
        </Container>
    </Segment>
</template>