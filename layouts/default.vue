<template>
    <div class="w-f font-muli box-border ">
        <div class="px-50  flex justify-between items-center sticky top-0 bg-white z-50">
            <div class="bg-[url('https://media.salekit.com/uploads/salekit_9ace970b3e97aee72b623414c1fbd841/112345678.png?v=1')] bg-cover bg-center w-50 h-25"></div>
            <nav>
                <ul class="flex justify-between gap-10">
                    <li class="font-semibold cursor-pointer text-gray-800">Giới thiệu</li>
                    <li class="font-semibold cursor-pointer text-gray-800">Tính năng</li>
                    <li class="font-semibold cursor-pointer text-gray-800">Sản phẩm</li>
                    <li class="font-semibold cursor-pointer text-gray-800">FAQ</li>
                </ul>
            </nav>
            <button class="bg-green-700 px-10 py-4 rounded-lg uppercase text-white font-bold cursor-pointer">Dùng thử miễn phí</button>
        </div>
        <main class="">
            <slot>
            </slot>
        </main>
    </div>
</template>