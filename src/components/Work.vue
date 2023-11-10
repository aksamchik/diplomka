<template>
    <div class="work" id="work">
        <div class="work__wrapper container">
            <div class="work__wrapper_title">
                {{ $t('projects.projectsTitle') }}
                <span>{{ $t('projects.projectsSub') }}</span>
            </div>
            <swiper :pagination="true" :modules="modules" class="mySwiper swiper">
                <swiper-slide v-for="wor in work" :key="wor.id">
                    <WorkCard :wor="wor" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import WorkCard from "../components/WorkCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

export default {
    components: {
        WorkCard,
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapState(['work'])
    },

}
</script>