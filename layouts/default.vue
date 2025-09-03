<template>
    <div class=" mx-auto">
        <header class="sticky top-0 bg-white z-50 flex justify-center ">
            <div class="flex justify-between items-center w-sm md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex-shrink-0">
                <div class="flex justify-between items-center flex-shrink-0">
                    <img src="https://media.salekit.com/uploads/salekit_9ace970b3e97aee72b623414c1fbd841/112345678.png?v=1" alt="" class="w-[120px] h-[60px] object-cover object-center md:w-[200px] md:h-[90px] flex-shrink-0">
                    <nav class="ml-20 hidden lg:block">
                        <ul class="flex justify-between items-center gap-10">
                            <li class="font-semibold cursor-pointer text-gray-500 flex-shrink-0">Giới thiệu</li>
                            <li class="font-semibold cursor-pointer text-gray-500 flex-shrink-0">Tính năng</li>
                            <li class="font-semibold cursor-pointer text-gray-500 flex-shrink-0">Sản phẩm</li>
                            <li class="font-semibold cursor-pointer text-gray-500 flex-shrink-0">FAQ</li>
                        </ul>
                    </nav>
                </div>
                <button
                    class="bg-green-700 uppercase text-white font-bold cursor-pointer rounded-lg px-5 py-2 text-[11px] md:text-[17px] md:px-10 md:py-4 flex-shrink-0 ">Dùng
                    thử miễn phí</button>
            </div>
        </header>
        <main class="">
            <slot>
            </slot>
        </main>
        <footer>
            <div class="flex flex-col md:flex-row justify-around items-center 
            text-white bg-[url('https://media.salekit.com/uploads/salekit_9ace970b3e97aee72b623414c1fbd841/bg2.png?v=1')] 
            w-full h-[320px] md:h-[227px] bg-cover mx-auto ">
                <div class="text-center">
                    <img src="https://media.salekit.com/uploads/salekit_9ace970b3e97aee72b623414c1fbd841/21234567.png?v=1" alt="" class="w-[200px] h-[100px] object-cover object-center">
                    <h3 class="font-bold text-[Open Sans] text-[16px]">Tri thức Thời đại số</h3>
                    <div class="flex items-center px-6">
                        <img src="https://salekit.page/assets/builder/img/shape/facebook.svg" alt="" class="w-6 h-6">
                        <img src="@/assets/img/youtube.svg" class="w-6 h-6" alt="">
                    </div>
                </div>

                <div>
                    <h3 class="font-bold text-[Open Sans] text-[17px] pb-5">Thông tin liên hệ</h3>
                    <p class="font-light"><img src="" alt="">092.868.5588</p>
                    <p class="font-light"><img src="" alt="">business@inet.vn</p>
                </div>
            </div>
        </footer>
    </div>
</template>