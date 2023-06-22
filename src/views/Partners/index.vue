<template>
    <div class="body">
        <PagesHeader />
        <main>
            <!-- associations -->
            <section class="block_section">
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                        <div class="section_header">
                            <h2>شركاؤنا من الجمعيات الخيرية</h2>
                            <!-- <p>الجمعيات الخيرية هم شركاء النجاح</p> -->
                        </div>
                        </div>
                    </div>
                    <!-- Circle Cards -->
                    <div class="row">
                        <div class="col-md-12">
                        <div
                            class="assoc_list animate__animated"
                            v-inview:class="['animate__slideInRight']"
                            v-if="charities"
                        >
                            <div
                            class="assoc_card"
                            v-for="charity in charities"
                            :key="charity.id"
                            >
                            <img :src="charity.image" :alt="`${charity.name} logo`" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <!-- Carousel -->
                    <div class="carousel__wrapper">
                    <carousel
                        class="kiswah_t_carousel"
                        :margin="20"
                        :nav="true"
                        :dots="false"
                        :responsive="{
                        0: {
                            items: 1,
                            nav: false,
                            autoPlay: true,
                            dots: true,
                            margin: 0,
                        },
                        600: { items: 2, nav: true },
                        1000: { items: 4, nav: true },
                        }"
                    >
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/image01.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img
                            src="@/assets/img/drive-image/C3383.00_00_32_015.Still001.jpg"
                            alt=""
                        />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC04763.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC04775.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC05453.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC05460.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC05464.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC05481.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC08883.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC08897.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC09007.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC09035.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC09071.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/DSC09080.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/EQ0A1824.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/EQ0A2148.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/EQ0A2154.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/EQ0A7661.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/EQ0A7683.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img
                            src="@/assets/img/drive-image/IMG_1E0B55F0F5F7-46.jpeg"
                            alt=""
                        />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/IMG_4797.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/IMG_4816.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/IMG_4858.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/IMG_5427.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/IMG_5447.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/IMG_5454.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/‎⁨IMG_5458.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/‎⁨IMG_5459.jpg" alt="" />
                        </div>
                        <div class="p__card_small">
                        <img src="@/assets/img/drive-image/‎IMG_5588.jpg" alt="" />
                        </div>
                        <!---->
                        <!-- <div
                        class="p__card_small"
                        v-for="(s, i) in images"
                        :key="i"
                        >
                        <img :src="require(`@/assets/img/drive-image/${s}`)" alt="" />
                        </div> -->
                    </carousel>
                    </div>
                </section>
        </main>
        <Footer />
    </div>
    
</template>

<script>
import PagesHeader from "../../components/PagesHeader.vue";
import carousel from "vue-owl-carousel";
import Footer from "../../components/Footer.vue";

export default {
    components: { PagesHeader, carousel, Footer },
    data() {
        return{
            charities:[]
        }
    },
    mounted() {
        this.getCharities();
    },
    methods:{
        async getCharities() {
            let url = `https://apiv1.kiswaksa.com/api/charities`;
            try {
                let res = await this.$http.get(url);
                res.data.data.links.forEach(async element => {
                if(element.url != null){
                    let result = await this.$http.get(element.url);
                    this.charities =  this.charities.concat(result.data.data.data);
                }
                });
            } catch (error) {
                console.log(error);
                if (error.response) {
                console.log(error.response);
                }
            }
        },
    },
}
</script>
