<template>
   <div class="-mx-10 grid justify-center">
        <div>
            <Vue3Marquee
            :width="50"
            >
                <slot />
            </Vue3Marquee>
        </div>
    </div>
</template>