
<template>

    <section class="bg-bgPrimary p-4 h-screen w-screen flex flex-col justify-center items-center">
        <div class="text-2xl font-semibold mx-auto max-w-7xl text-center">

            <p class="text-primary">Message from DashboardLayout...</p>
            <slot />

        </div>
    </section>

</template>

<script>
    export default {
        name: 'DashboardLayout',
    }
</script>

<style lang="scss"></style>