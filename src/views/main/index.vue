<template>
  <div class="body">
    <Header />
    <main>

      <section id="work" class="work__
       top_section">
        <div class="container">
          <div class="section_header">
            <h2>كيف نعمل؟</h2>
            <!-- <p>نستلم تبرعاتك من موقعك ونوصلها لمحتاج يفرح بها</p> -->
          </div>
          <div class="kiswah_cards web">
            <div class="row">
              <div class="col-md-4">
                <div
                  class="c_card__ animate__animated second_"
                  v-inview:class="['animate__slideInLeft']"
                >
                  <div class="c_card_img">
                    <img
                      src="@/assets/img/stock-photo-beautiful-muslim-lady-at-work.png"
                      alt=""
                    />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">2</span> تأكيد الطلب</h3>
                    <p>سيتم التواصل معكم لتاكيد موعد وعنوان الإستلام</p>
                  </div>
                </div>
                <div
                  class="c_card__ animate__animated fift_"
                  v-inview:class="['animate__slideInRight']"
                >
                  <div class="c_card_img">
                    <img src="@/assets/img/kiswah-image-5.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">5</span> التوزيع</h3>
                    <p>
                      توزيع التبرعات على المحتاجين من خلال فريق كسوة التطوعي و
                      تحت اشراف االجمعيات الخيرية المعتمدة
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div
                  class="c_card__ animate__animated flex_style"
                  v-inview:class="['animate__slideInUp']"
                >
                  <div class="c_card_img">
                    <img src="@/assets/img/press-phone.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">1</span> اطلب الخدمة</h3>
                    <p>تقديم طلب التبرع عبر الموقع الإلكتروني او التطبيق</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInUp']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A0947.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">4</span> اعادة التدوير</h3>
                        <p>فرز واعادة تدوير التبرعات على يد فريقنا المختص</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInRight']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A1063.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">3</span> استلام التبرعات</h3>
                        <p>استلام تبرعاتكم من منزلكم مجاناً خلال 24 ساعة</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="kiswah_cards mobile">
            <div class="row">
              <div class="col-sm-12">
                <div class="c_card__ animate__animated flex_style">
                  <div class="c_card_img">
                    <img src="@/assets/img/press-phone.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">1</span> اطلب الخدمة</h3>
                    <p>تقديم طلب التبرع عبر الموقع الإلكتروني او التطبيق</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="c_card__ animate__animated second_">
                  <div class="c_card_img">
                    <img
                      src="@/assets/img/stock-photo-beautiful-muslim-lady-at-work.png"
                      alt=""
                    />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">2</span> تأكيد الطلب</h3>
                    <p>سيتم التواصل معكم لتاكيد موعد وعنوان الإستلام</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A1063.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">3</span> استلام التبرعات</h3>
                    <p>استلام تبرعاتكم من منزلكم مجاناً خلال 24 ساعة</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A0947.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">4</span> اعادة التدوير</h3>
                    <p>فرز واعادة تدوير التبرعات على يد فريقنا المختص</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="c_card__ animate__animated fift_">
                  <div class="c_card_img">
                    <img src="@/assets/img/kiswah-image-5.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">5</span> التوزيع</h3>
                    <p>
                      توزيع التبرعات على المحتاجين من خلال فريق كسوة التطوعي و
                      تحت اشراف االجمعيات الخيرية المعتمدة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


          <section class="mb-5">
                  <img class="img-fluid mb-4" style="width:100%" src="@/assets/img/strate-desktop.jpeg"/>

            <div class="text-center">
                          <h4>
الخير دليل على الأناقة، لنفعل ذلك معاً            </h4>
                          <button class="btn btn-success" @click="$router.push('lacoste')">تبرع الآن</button>
            </div>
          </section>



      <section class="work__">
        <div class="container">
          <div class="section_header">
            <h2>الأخبار</h2>
            <!-- <p>
              تابع أخبار مشروع كسوة أول بأول عن طريق الموقع أو بالاشتراك في
              قائمة البريد الاخبارية
            </p> -->
          </div>
        </div>
        <div class="container-fluid">
          <div class="card_section">
            <div class="row">
              <carousel
                class="kiswah_card_carousel"
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
                  600: { items: 2, nav: true, margin: 20 },
                  1000: { items: 4, nav: true, margin: 20 },
                }"
                v-if="news.length > 0"
              >
                <div class="p__card" v-for="article in news" :key="article.id">
                  <img
                    :src="article.image"
                    :alt="`${article.title} thumbnail`"
                  />
                  <div class="card_overlay">
                    <div class="p__info">
                      <h4>{{ article.title }}</h4>
                      <p
                        :inner-html.prop="article.text | truncateString(100)"
                      ></p>
                      <button
                        class="btn btn-primary"
                        @click="moreNews(article)"
                      >
                        اقراء المزيد
                      </button>
                    </div>
                  </div>
                </div>
              </carousel>
            </div>
          </div>
        </div>

        <!-- News Modal -->
        <modal
          v-if="article"
          name="more_news"
          :width="700"
          height="auto"
          :resizable="true"
          :adaptive="true"
          :scrollable="true"
        >
          <div class="text-right pr-3 pt-2">
            <small class="text-primary mb-3 cancel" @click="cancelNews"
              ><b>x</b></small
            >
          </div>
          <div class="more__news">
            <div class="p__info">
              <h4>{{ article.title }}</h4>
              <p :inner-html.prop="article.text"></p>
            </div>
            <img
              :src="article.image"
              :alt="`${article.title} thumbnail`"
              class="more__news--image"
            />
          </div>
        </modal>
        <!-- News Modal End-->

        <div class="container-fluid">
          <div class="row justify-content-md-center">
            <div class="col-md-3">
              <router-link class="custom-link" to="/all-news"
                >المزيد من الأخبار</router-link
              >
            </div>
          </div>
        </div>
      </section>

            <section class="app_layout">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="wrap__app">
                <img src="@/assets/img/main/kiswah-app.png" alt="kiswah-app" />
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="center__view animate__animated"
                v-inview:class="['animate__slideInRight']"
              >
                <div class="h_view">
                  <h6>تطبيق كسوة</h6>
                  <h2>حمّل تطبيق كسوة</h2>
                  <ul>
                    <li>سهولة في تقديم طلبات التبرع</li>
                    <li>خاصية حفظ بيانتك لسرعة ارسال الطلبات في المستقبل</li>
                    <li>امكانية تتبع حالة طلبك بشكل مباشر</li>
                    <li>
                      سهولة التواصل مع المندوب المخصص لك خلال يوم الإستلام
                    </li>
                  </ul>
                  <!-- <p>
                    يمكنك الحصول على خصومات وخدمات منوعة مقدمة من شركاءنا
                    المحبين للخير وأهله. كل ما عليك هوا تحميل التطبيق واستخدامه
                    للتبرع.
                  </p> -->
                </div>

                <div class="btn_set">
                  <button
                    class="btn btn-app"
                    @click="
                      redirectTo(
                        'https://play.google.com/store/apps/details?id=com.kiswa.customer&gl=SA'
                      )
                    "
                  >
                    <img
                      src="@/assets/img/Google.png"
                      alt="google-play-store"
                    />
                  </button>
                  <button
                    class="btn btn-app"
                    @click="
                      redirectTo(
                        'https://apps.apple.com/sa/app/kiswah/id1514766556'
                      )
                    "
                  >
                    <img src="@/assets/img/Apple.png" alt="apple-store" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- associations -->
      <section class="block_section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="section_header">
                <h2>شركائنا من الجمعيات الخيرية</h2>
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

      <!-- Accordion -->
      <section class="work__">
        <div class="container">
          <div class="section_header">
            <h2>الأسئلة الشائعة</h2>
            <p>
              يمكنك التواصل مع فريق خدمة العملاء اذا لم تجد جوابك لسؤالك من
              الأسئلة الشائعة
            </p>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="accordion" role="tablist">
                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="info">
                      <span class="arrow_">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.95842 1.06704C4.06381 0.961517 4.20679 0.902168 4.35592 0.902037L4.64092 0.902037C4.78974 0.903765 4.93213 0.962874 5.03843 1.06704L8.88593 4.92204C8.95692 4.99245 8.99685 5.0883 8.99685 5.18829C8.99685 5.28828 8.95692 5.38412 8.88593 5.45454L8.35343 5.98704C8.2843 6.05759 8.18969 6.09734 8.09093 6.09734C7.99216 6.09734 7.89755 6.05759 7.82843 5.98704L4.49842 2.64954L1.16842 5.98704C1.09801 6.05803 1.00216 6.09796 0.902174 6.09796C0.802185 6.09796 0.706337 6.05803 0.635924 5.98704L0.110924 5.45454C0.0399321 5.38412 9.6554e-09 5.28828 1.08478e-08 5.18829C1.20401e-08 5.0883 0.0399321 4.99245 0.110924 4.92204L3.95842 1.06704Z"
                            fill="#2D4148"
                          />
                        </svg>
                      </span>
                      ماهي أنواع التبرعات التي تستقبلونها؟
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text
                        >جميع أنواع الملابس والأقمشة المستعملة أو التالفة مهما
                        كانت حالتها بالإضافة الى الشنط والأحذية والاكسسوارات
                        والالعاب.</b-card-text
                      >
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="info">
                      <span class="arrow_">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.95842 1.06704C4.06381 0.961517 4.20679 0.902168 4.35592 0.902037L4.64092 0.902037C4.78974 0.903765 4.93213 0.962874 5.03843 1.06704L8.88593 4.92204C8.95692 4.99245 8.99685 5.0883 8.99685 5.18829C8.99685 5.28828 8.95692 5.38412 8.88593 5.45454L8.35343 5.98704C8.2843 6.05759 8.18969 6.09734 8.09093 6.09734C7.99216 6.09734 7.89755 6.05759 7.82843 5.98704L4.49842 2.64954L1.16842 5.98704C1.09801 6.05803 1.00216 6.09796 0.902174 6.09796C0.802185 6.09796 0.706337 6.05803 0.635924 5.98704L0.110924 5.45454C0.0399321 5.38412 9.6554e-09 5.28828 1.08478e-08 5.18829C1.20401e-08 5.0883 0.0399321 4.99245 0.110924 4.92204L3.95842 1.06704Z"
                            fill="#2D4148"
                          />
                        </svg>
                      </span>
                      ماهي المدن المتواجدين فيها؟
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text
                        >مكة المكرمة - المدينة المنورة - الرياض - جدة - المنطقة
                        الشرقية - الطائف -ا لقصيم - الباحة - حائل - نجران - تبوك
                        - عسير - الجوف – جيزان.</b-card-text
                      >
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="info">
                      <span class="arrow_">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.95842 1.06704C4.06381 0.961517 4.20679 0.902168 4.35592 0.902037L4.64092 0.902037C4.78974 0.903765 4.93213 0.962874 5.03843 1.06704L8.88593 4.92204C8.95692 4.99245 8.99685 5.0883 8.99685 5.18829C8.99685 5.28828 8.95692 5.38412 8.88593 5.45454L8.35343 5.98704C8.2843 6.05759 8.18969 6.09734 8.09093 6.09734C7.99216 6.09734 7.89755 6.05759 7.82843 5.98704L4.49842 2.64954L1.16842 5.98704C1.09801 6.05803 1.00216 6.09796 0.902174 6.09796C0.802185 6.09796 0.706337 6.05803 0.635924 5.98704L0.110924 5.45454C0.0399321 5.38412 9.6554e-09 5.28828 1.08478e-08 5.18829C1.20401e-08 5.0883 0.0399321 4.99245 0.110924 4.92204L3.95842 1.06704Z"
                            fill="#2D4148"
                          />
                        </svg>
                      </span>
                      ماهي آلية عمل كسوة ؟
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <p>
                          يتم ارسال طلب التبرع من قبل المتبرعين عبر اي من
                          قنواتنا الإلكترونية و من ثم يعمل فريقنا على استلام
                          التبراعات من مقر المتبرع خلال 48 ساعة. بعدها يتم فرزها
                          الملابس و تجهيزها و من ثم توزيعها على مستفيدي الجمعيات
                          الخيرية المعتمدة داخل المملكة
                        </p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-4 variant="info">
                      <span class="arrow_">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.95842 1.06704C4.06381 0.961517 4.20679 0.902168 4.35592 0.902037L4.64092 0.902037C4.78974 0.903765 4.93213 0.962874 5.03843 1.06704L8.88593 4.92204C8.95692 4.99245 8.99685 5.0883 8.99685 5.18829C8.99685 5.28828 8.95692 5.38412 8.88593 5.45454L8.35343 5.98704C8.2843 6.05759 8.18969 6.09734 8.09093 6.09734C7.99216 6.09734 7.89755 6.05759 7.82843 5.98704L4.49842 2.64954L1.16842 5.98704C1.09801 6.05803 1.00216 6.09796 0.902174 6.09796C0.802185 6.09796 0.706337 6.05803 0.635924 5.98704L0.110924 5.45454C0.0399321 5.38412 9.6554e-09 5.28828 1.08478e-08 5.18829C1.20401e-08 5.0883 0.0399321 4.99245 0.110924 4.92204L3.95842 1.06704Z"
                            fill="#2D4148"
                          />
                        </svg>
                      </span>
                      لدي ملابس قديمة جداً او تالفة هل يمكن استقبالها ؟
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-4"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <p>
                          بالتأكيد , نستقبل جميع أنواع الملابس مهما كانت حالتها,
                          حيث سوف يتم اعادة تدويرها بالكامل
                        </p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-5 variant="info">
                      <span class="arrow_">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.95842 1.06704C4.06381 0.961517 4.20679 0.902168 4.35592 0.902037L4.64092 0.902037C4.78974 0.903765 4.93213 0.962874 5.03843 1.06704L8.88593 4.92204C8.95692 4.99245 8.99685 5.0883 8.99685 5.18829C8.99685 5.28828 8.95692 5.38412 8.88593 5.45454L8.35343 5.98704C8.2843 6.05759 8.18969 6.09734 8.09093 6.09734C7.99216 6.09734 7.89755 6.05759 7.82843 5.98704L4.49842 2.64954L1.16842 5.98704C1.09801 6.05803 1.00216 6.09796 0.902174 6.09796C0.802185 6.09796 0.706337 6.05803 0.635924 5.98704L0.110924 5.45454C0.0399321 5.38412 9.6554e-09 5.28828 1.08478e-08 5.18829C1.20401e-08 5.0883 0.0399321 4.99245 0.110924 4.92204L3.95842 1.06704Z"
                            fill="#2D4148"
                          />
                        </svg>
                      </span>
                      لقد ارسلت طلب تبرّع و لم يصل المندوب حتى الآن؟
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-5"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <p>
                          نأسف لذلك,الرجاء التواصل معنا مباشراً بإتصال أو رسالة
                          وتسأب على الرقم الموحد 0500070201
                        </p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-6 variant="info">
                      <span class="arrow_">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.95842 1.06704C4.06381 0.961517 4.20679 0.902168 4.35592 0.902037L4.64092 0.902037C4.78974 0.903765 4.93213 0.962874 5.03843 1.06704L8.88593 4.92204C8.95692 4.99245 8.99685 5.0883 8.99685 5.18829C8.99685 5.28828 8.95692 5.38412 8.88593 5.45454L8.35343 5.98704C8.2843 6.05759 8.18969 6.09734 8.09093 6.09734C7.99216 6.09734 7.89755 6.05759 7.82843 5.98704L4.49842 2.64954L1.16842 5.98704C1.09801 6.05803 1.00216 6.09796 0.902174 6.09796C0.802185 6.09796 0.706337 6.05803 0.635924 5.98704L0.110924 5.45454C0.0399321 5.38412 9.6554e-09 5.28828 1.08478e-08 5.18829C1.20401e-08 5.0883 0.0399321 4.99245 0.110924 4.92204L3.95842 1.06704Z"
                            fill="#2D4148"
                          />
                        </svg> </span
                      >هل أنتم جهة رسمية؟
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-6"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <p>
                          نحن جهة مفوّضة رسمياً لاستلام التبرعات من قبل الجمعيات
                          الخيرية المعتمدة في المملكة. بإمكانكم الاطلاع على
                          توثيقنا في معروف من خلال الرابط هنا
                          <a
                            href="https://maroof.sa/BusinessCertificate/Index?bid=117186"
                            target="_blank"
                            >Business Certificate</a
                          >
                        </p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-7 variant="info">
                      <span class="arrow_">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.95842 1.06704C4.06381 0.961517 4.20679 0.902168 4.35592 0.902037L4.64092 0.902037C4.78974 0.903765 4.93213 0.962874 5.03843 1.06704L8.88593 4.92204C8.95692 4.99245 8.99685 5.0883 8.99685 5.18829C8.99685 5.28828 8.95692 5.38412 8.88593 5.45454L8.35343 5.98704C8.2843 6.05759 8.18969 6.09734 8.09093 6.09734C7.99216 6.09734 7.89755 6.05759 7.82843 5.98704L4.49842 2.64954L1.16842 5.98704C1.09801 6.05803 1.00216 6.09796 0.902174 6.09796C0.802185 6.09796 0.706337 6.05803 0.635924 5.98704L0.110924 5.45454C0.0399321 5.38412 9.6554e-09 5.28828 1.08478e-08 5.18829C1.20401e-08 5.0883 0.0399321 4.99245 0.110924 4.92204L3.95842 1.06704Z"
                            fill="#2D4148"
                          />
                        </svg> </span
                      >هل يتم توزيع التبرعات على من يحتاجها؟
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-7"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <p>
                          بالتأكيد, بامكانكم مشاهدة العديد من فيدوهات توزيع
                          الملابس على كافة قنوات التواصل الاجتماعي الخاصة بنا
                        </p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-8 variant="info">
                      <span class="arrow_">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.95842 1.06704C4.06381 0.961517 4.20679 0.902168 4.35592 0.902037L4.64092 0.902037C4.78974 0.903765 4.93213 0.962874 5.03843 1.06704L8.88593 4.92204C8.95692 4.99245 8.99685 5.0883 8.99685 5.18829C8.99685 5.28828 8.95692 5.38412 8.88593 5.45454L8.35343 5.98704C8.2843 6.05759 8.18969 6.09734 8.09093 6.09734C7.99216 6.09734 7.89755 6.05759 7.82843 5.98704L4.49842 2.64954L1.16842 5.98704C1.09801 6.05803 1.00216 6.09796 0.902174 6.09796C0.802185 6.09796 0.706337 6.05803 0.635924 5.98704L0.110924 5.45454C0.0399321 5.38412 9.6554e-09 5.28828 1.08478e-08 5.18829C1.20401e-08 5.0883 0.0399321 4.99245 0.110924 4.92204L3.95842 1.06704Z"
                            fill="#2D4148"
                          />
                        </svg> </span
                      >من هي الجمعيات الخيرية التي تتعاملون معها؟
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-8"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <p>
                          بامكانكم الإطلاع على لائحة الجمعيات الخيرية المعتمدة
                          التي نتعامل معها في قسم الجمعيات المخصص في مواقعنا
                          الإلكترونية
                        </p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body>
                  <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-9 variant="info">
                      <span class="arrow_">
                        <svg
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.95842 1.06704C4.06381 0.961517 4.20679 0.902168 4.35592 0.902037L4.64092 0.902037C4.78974 0.903765 4.93213 0.962874 5.03843 1.06704L8.88593 4.92204C8.95692 4.99245 8.99685 5.0883 8.99685 5.18829C8.99685 5.28828 8.95692 5.38412 8.88593 5.45454L8.35343 5.98704C8.2843 6.05759 8.18969 6.09734 8.09093 6.09734C7.99216 6.09734 7.89755 6.05759 7.82843 5.98704L4.49842 2.64954L1.16842 5.98704C1.09801 6.05803 1.00216 6.09796 0.902174 6.09796C0.802185 6.09796 0.706337 6.05803 0.635924 5.98704L0.110924 5.45454C0.0399321 5.38412 9.6554e-09 5.28828 1.08478e-08 5.18829C1.20401e-08 5.0883 0.0399321 4.99245 0.110924 4.92204L3.95842 1.06704Z"
                            fill="#2D4148"
                          />
                        </svg> </span
                      >ماهي أوقات العمل؟
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    id="accordion-9"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        <p>
                          من السبت إلى الخميس من الساعة ٩ صباحاً حتى الساعة ١١
                          مساءً
                        </p>
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
            <!-- <div class="section spacer">
              <p class="primary-color center mb-20">
                المزيد من الأسئلة الشائعة
              </p>
            </div> -->
          </div>
        </div>


      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import carousel from "vue-owl-carousel";
import Footer from "../../components/Footer.vue";
export default {
  components: { Header, carousel, Footer },
  data() {
    return {
      images: [
        "image01.jpg",
        "C3383.00_00_32_015.Still001.jpg",
        "DSC04763.jpg",
        "DSC04775.jpg",
        "DSC05453.jpg",
        "DSC05460.jpg",
        "DSC05464.jpg",
        "DSC05481.jpg",
        "DSC08883.jpg",
        "DSC08897.jpg",
        "DSC09007.jpg",
        "DSC09035.jpg",
        "DSC09071.jpg",
        "DSC09080.jpg",
        "EQ0A1824.jpg",
        "EQ0A2148.jpg",
        "EQ0A2154.jpg",
        "EQ0A7661.jpg",
        "EQ0A7683.jpg",
        "IMG_1E0B55F0F5F7-46.jpeg",
        "IMG_4797.jpg",
        "IMG_4816.jpg",
        "IMG_4858.jpg",
        "IMG_5427.jpg",
        "IMG_5447.jpg",
        "IMG_5454.jpg",
        "‎⁨IMG_5458.jpg",
        "‎⁨IMG_5459.jpg",
        "‎IMG_5588.jpg",
      ],
      responsivePip: {
        0: { items: 1, nav: false },
        480: { items: 1 },
      },
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      news: [],
      charities: [],
    };
  },
  created() {
    window.fbq('track', 'home');
  },
  mounted() {
    this.getNews();
    this.getCharities();
  },
  methods: {
    redirectTo(link) {
      window.open(link, "_blank");
    },
    cancelNews() {
      this.$modal.hide("more_news");
    },
    moreNews(value) {
      this.article = value;
      this.$modal.show("more_news");
    },
    async getNews() {
      let url = `https://apiv1.kiswaksa.com/api/news`;
      try {
        let res = await this.$http.get(url);
        this.news = res.data.data.data;
      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      }
    },
    async getCharities() {
      let url = `https://apiv1.kiswaksa.com/api/charities`;
      try {
        let res = await this.$http.get(url);
        this.charities = res.data.data.data;
      } catch (error) {
        console.log(error);
        if (error.response) {
          console.log(error.response);
        }
      }
    },
  },
  filters: {
    truncateString(str, num) {
      // If the length of str is less than or equal to num
      // just return str--don't truncate it.
      if (str.length <= num) {
        return str;
      }
      // Return str truncated with '...' concatenated to the end of str.
      return str.slice(0, num) + "...";
    },
  },
};
</script>

<style scoped>
.cancel {
  font-size: 16px;
  cursor: pointer;
  text-align: right;
  padding-top: 30px;
  padding-left: 10px;
}

.vm--modal .more__news {
  padding: 30px !important;
  text-align: right;
}
.more__news--image {
  width: 100%;
  object-fit: cover;
  /* max-width: 400px; */
}
</style>
