<template>
    <div class="dashboard">
        <div class="slogan">
            <img src="/static/logo.svg" alt="logo"/>
            <p class="text">请在这里改写欢迎语</p>
        </div>
    </div>
</template>

<script>
export default {name: 'dashboard'};
</script>

<style lang="scss">
.dashboard {

    .slogan{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        text-align: center;
    }

    .text {
        color: #A3ACBA;
        font-size: 30px;
        margin-top: 20px;
    }
    img {
        width: 100px;
        height: 100px;
    }
}
</style>