<template>
    <div class="max-w-screen-xl mx-auto">
        <header class="sticky top-0 bg-white z-50">
            <div class="flex justify-between items-center w-[420px] md:w-[1200px]">
                <div
                    class="bg-[url('https://media.salekit.com/uploads/salekit_9ace970b3e97aee72b623414c1fbd841/112345678.png?v=1')] bg-cover bg-center w-32 h-16 md:w-[200px] md:h-[90px] flex-shrink-0">
                </div>
                <nav class="hidden md:block">
                    <ul class="flex justify-around gap-10">
                        <li class="font-semibold cursor-pointer text-gray-800">Giới thiệu</li>
                        <li class="font-semibold cursor-pointer text-gray-800">Tính năng</li>
                        <li class="font-semibold cursor-pointer text-gray-800">Sản phẩm</li>
                        <li class="font-semibold cursor-pointer text-gray-800">FAQ</li>
                    </ul>
                </nav>
                <button
                    class="bg-green-700 uppercase text-white font-bold cursor-pointer rounded-lg px-5 py-2 text-sm md:px-10 md:py-4 ">Dùng
                    thử miễn phí</button>
            </div>
        </header>
        <main class="">
            <slot>
            </slot>
        </main>
        <footer
            class="bg-[url('https://media.salekit.com/uploads/salekit_9ace970b3e97aee72b623414c1fbd841/bg2.png?v=1')] w-full h-[227px] object-cover object-top flex justify-around items-center">
            <div class="flex flex-col justify-start">
                <img src="https://media.salekit.com/uploads/salekit_9ace970b3e97aee72b623414c1fbd841/21234567.png?v=1"
                    alt="logo" class="w-[200px] h-[128px] object-cover object-top ">
                <h3 class="text-white">Tri thức Thời đại số</h3>
                <div>
                    <img src="https://salekit.page/assets/builder/img/shape/facebook.svg" alt=""
                        class="w-[30px] h-[30px]">
                    <i class="fa-brands fa-youtube" style="color: #f10404;"></i>
                </div>
            </div>
        </footer>
    </div>
</template>