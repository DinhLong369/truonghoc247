<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-center text-3xl font-bold text-green-700 mb-6">
      Câu hỏi thường gặp - FAQ
    </h1>

    <div v-for="(faq, index) in faqs" :key="index" class="mb-2">
      <!-- Header -->
      <button
        @click="toggle(index)"
        class="flex justify-between items-center w-full bg-green-800 text-white px-4 py-3 font-semibold hover:bg-green-700 transition"
      >
        <span>{{ index + 1 }}. {{ faq.question }}</span>
        <svg
          :class="{ 'rotate-180': activeIndex === index }"
          class="w-5 h-5 transform transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Content -->
      <div
        v-show="activeIndex === index"
        class="bg-white border border-green-800 px-4 py-3 text-gray-800"
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = ref([
  {
    question: "Truonghoc247 là gì ?",
    answer:
      "Truonghoc247 là nền tảng giúp Nhà Trường, Trung Tâm vận hành tối ưu với hệ thống lớp học ảo..."
  },
  {
    question: "Việc đăng ký dùng thử có mất phí không?",
    answer: "Không, bạn có thể đăng ký dùng thử miễn phí..."
  },
  {
    question: "Truonghoc247 có thể giúp ích cho Trường học, Trung tâm của tôi không?",
    answer: "Có, hệ thống hỗ trợ đầy đủ cho mọi quy mô trường học..."
  }
]);

const activeIndex = ref(null);

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}
</script>
